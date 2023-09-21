import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

// put this in the parameter annotation
// interface Props {
//     params: { id: number }
//}

export async function GET(
    request: NextRequest, 
    { params }: { params: { id: string } }) {

   const user = await prisma.user.findUnique({
    where: { id: params.id }
   })

   if (!user) {
    return NextResponse.json({error: "User not found"}, {status: 404})
   }

    return NextResponse.json(user)
}

