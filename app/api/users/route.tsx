import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from '@/prisma/client'

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
    const body  = await request.json()
    // Validata body
    // If invalid, return 400 error
    // Else return

    const validation = schema.safeParse(body)
    if(!validation.success) {
        return NextResponse.json(validation.error.format(), {status: 400})
    }

    // Check if user already exists
    const user = await prisma.user.findUnique({
        where: {email: body.email}
    })

    if (user) {
        return NextResponse.json({error: 'User already exists'}, {status: 400})
    }

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
        }
    })

    // if (!body.name)
    //     return NextResponse.json(
    //         {error: 'Name is required'},
    //         {status: 400})
    return NextResponse.json(newUser, {status: 201})
}