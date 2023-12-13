'use client'
import Link from "next/link"
import { useSession } from "next-auth/react"  

export default function NavBar() {
  const {status, data: session} = useSession()

  return (
    <nav className="flex items-center justify-between px-5 bg-slate-200">
        <div className="py-5 space-x-5">
          <Link href="/">Next JS</Link>
          <Link href="/users">Users</Link>
        </div>
        {status === 'authenticated' && 
          <div className="flex items-center">
            <div className="flex space-x-4 items-center">
              {session.user!.image && <img src={session.user!.image} className="w-10 h-10 rounded-full" />}
              <span>{session.user!.name}</span>
            </div>
            <Link href="/api/auth/signout" className="ml-3"><p>Sign Out</p></Link>
          </div>
        }
        {status === 'unauthenticated' && <Link href="api/auth/signin">Login</Link>}
    </nav>
  )
}
