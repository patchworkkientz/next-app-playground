import React from 'react'

interface Props {
    params: {
        id: number,
        quote_id: number
    }
}

export default function UserQuote({params: {id, quote_id}}: Props) {
  return (
    <>
    <p>User: {id}, Quote: {quote_id}</p>
    </>
  )
}
