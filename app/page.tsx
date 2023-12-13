import Link from "next/link"  
import {getServerSession} from "next-auth"
import {authOptions} from "./api/auth/[...nextauth]/route"
import Image from "next/image"  
import tree from "@/public/images/tree.jpg"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="relative h-screen">
      <h1 className="font-bold text-3xl">Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users"><h1>Users</h1></Link>
      <Image src="https://bit.ly/react-cover" alt="Tree" fill={true} className="object-cover"
      quality={100}
      priority/>
    </main>
  )
}
