import React from 'react'

interface Props {
  params: {slug: String[]}
}

export default function ProductPage({params: {slug}}: Props) {
  return (
    <p>Products {slug}</p>
  )
}
