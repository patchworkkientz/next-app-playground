import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prismaC = globalForPrisma.prisma ?? prismaClientSingleton()

export default prismaC

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismaC