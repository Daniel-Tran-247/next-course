import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from '@/prisma/client'

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: {id: id}
  })
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
  // Fetch data from a db
  // If not found return 404 error
  // Else return data
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
    // Validate the request body
    // If invalid, return 400 error
    // Else fetch the user with the given id
    // If doesn't exist, return 404
    // Else update the user 
    // return the updated user
    const body = await request.json()

    const validation = schema.safeParse(body)
    if(!validation.success) {   
        return NextResponse.json(validation.error.format(), {status: 400})
    }

    const user = await prisma.user.findUnique({
        where: {id: id}
    })

    if (!user) {
      return NextResponse.json({error: 'User not found'}, {status: 404})
    }

    const isEmailExist = await prisma.user.findUnique({
      where: {email: body.email}
    })

    if (isEmailExist) { 
      return NextResponse.json({error: 'This email already used'}, {status: 400})
    }

    const updatedUser = await prisma.user.update({
      where: {id: user.id},
      data: {
        name: body.name,
        email: body.email,
      }
    })


    // if (!body.name) {
    //     return NextResponse.json(
    //         {error: 'Name is required'},
    //         {status: 400})
    // }

    // if (parseInt(id) > 10) {
    //     return NextResponse.json({error: 'User not found'}, {status: 404})  
    // }

    return NextResponse.json(updatedUser)
}


export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    // Fetch the user form db
    // If user not found, return 404
    // Else delete the user
    // Return 200 status

    const user = await prisma.user.findUnique({
        where: {id: id}
    })

    if (!user) {
      return NextResponse.json({error: 'User not found'}, {status: 404})
    }
    
    await prisma.user.delete({
      where: {id: user.id}
    })
    // if (parseInt(id) > 10) {  
    //     return NextResponse.json({error: 'User not found'}, {status: 404})  
    // }
    return NextResponse.json({})
}