import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className='text-violet-700'>Essa é a home</h1>
      <a href='posts'>veja nossos posts</a>
    </div>
  )
}
