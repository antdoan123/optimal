import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { animated, useSpring } from 'react-spring';
import Link from 'next/link'
import Features from './components/Features'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Services from './components/Services';


const inter = Inter({ subsets: ['latin'] })
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 200,
  -(x - window.innerWidth / 2) / 200,
  1.05,
];
const trans = (x, y, s) =>
  `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Home() {

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 350, friction: 40 },
  }));

  return (
    <>
      <Head>
        <title>Eeesshh Media</title>
        <meta name="description" content="Your next leading social media resources" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col justify-center items-center text-black w-full max-w-7xl mx-auto'>

      
        {/* Features */}
        <Features></Features>
        <Services></Services>
        <Contact></Contact>
        {/* Features */}
      
      </main>
    </>
  )
}
