import React, { Component, Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'
import Spinner from '@/components/Spinner'

interface Props {
  searchParams: {
    sortOrder: string
  }
}

export default async function UserPage({searchParams: {sortOrder}}: Props) {
  
  return (
    <>
    
      <h1>{new Date().toLocaleTimeString()}</h1>
      <Link href="/users/new" className="btn">New User</Link>
      <Suspense fallback={<Spinner color="gray"></Spinner>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}
