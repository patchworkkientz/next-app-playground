import Image from 'next/image'
import Header from '../components/Header/HeaderComponent'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import me from "../../public/images/IMG_1291.jpg"

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className="relative h-screen">
      <h1>Hello { session && <span>{session.user!.name}</span> }</h1>
    <Header></Header>
    <Image 
    src="https://bit.ly/react-cover" 
    alt="picture of me by sculpture"
    fill
    className="object-cover"
    // sizes, different sizes for different devices
    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
    quality={100}
    //appear above the fold
    priority
    //style={{ objectFit: "contain"}}
    //objectFit: "cover"
    />
    </main>
  )
}
