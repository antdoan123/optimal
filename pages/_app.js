import '../styles/globals.css'

import Head from 'next/head'
import { AnimatePresence } from "framer-motion";
import Navbar from './components/navbar';
import Hero from './components/Hero'
import Footer from './components/Footer';

const MyApp = ({ Component, pageProps }) => {


  return (
    <>
    <Head>
  <title>Optimal Gym | 24/7 Fitness & Indoor Tennis/Pickleball in South Jersey</title>
  <meta
    name="description"
    content="Optimal Gym is Vineland's 24/7 fitness center offering indoor tennis, racquetball, sauna, pool, weight training, group classes, and more."
    
  />
  <link rel="canonical" href="https://www.vinelandoptimalgym.com/" />
          <link rel="icon" href="/optimallogo.png" />

</Head>

            <Component {...pageProps} />

    </>
  )
}
export default MyApp