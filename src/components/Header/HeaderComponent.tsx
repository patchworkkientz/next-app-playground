"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './HeaderComponent.module.css'

export default function Header() {

  const router = useRouter()

  let places = ["here", "there", "where", "inside", "outside"]

  function changePlace() {
    let x = places[Math.floor(Math.random() * places.length)]
    return `/${x}`
  }

  return (
    <header className="hover:bg-yellow-50">
      <Link href="/whatever" className="bg-blue-400">go where?</Link>
    <button className="btn btn-primary" onClick={ () => {
      router.push(changePlace())
    } }>change place?</button>
    </header>
  )
}
