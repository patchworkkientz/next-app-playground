"use client"
import Spinner from '@/components/Spinner'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {

  const { status, data: session } = useSession()

  return (
    <div className='flex bg-slate-200 space-x-3'>
      <Link href="/" className="mr-5">Whatever</Link>
      <Link href="/users">Users</Link>
      {status === "loading" && <Spinner color="gray"></Spinner>}
      {status === "authenticated" &&
        <div>
          {session.user!.name}
          <Link className="ml-3" href="api/auth/signout">Logout</Link>
        </div>}
      {status === "unauthenticated" && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}
