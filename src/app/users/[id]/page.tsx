import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}

export default function UserDetails({params: {id}}: Props) {
  if (id > 10) notFound()
  return (
    <>
        <h1>User Detail: {id}</h1>
    </>
  )
}
