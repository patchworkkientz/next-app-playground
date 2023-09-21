import Link from 'next/link'
import React, { Component } from 'react'
import { sort } from 'fast-sort'

interface User {
  id: number
  name: string
  email: string
}

interface Props {
  sortOrder: string
}

export default async function UserTable({sortOrder}: Props) {

  let res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
    // or
    //{ next: { revalidate: 10} } 
    // will re-get data every 10 seconds, Wow! (only for fetch() with Next)
  )

  const users: User[] = await res.json()

  const sortedUsers = sort(users).asc(sortOrder === "email" ? u => u.email : u => u.name)

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
        {sortedUsers.map(usr => {
          return <tr key={usr.id}>
            <td>{usr.name}</td>
            <td>{usr.email}</td>
          </tr>
        })}
        </tbody>
      </table>
    </>
  )
}
