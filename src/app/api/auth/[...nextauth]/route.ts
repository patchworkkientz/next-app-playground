import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prismaC from "../../../../prisma/client"
import bcrypt from "bcrypt"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prismaC),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                
                if (!credentials?.email || !credentials.password) return null

                const user = await prismaC.user.findUnique({ where: { email: credentials.email }})

                if (!user) return null

                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)

                return passwordMatch ? user : null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!

        })],
    session: {
        strategy: "jwt"
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }