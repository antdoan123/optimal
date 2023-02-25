import { motion, AnimatePresence } from "framer-motion"
import { animated, useSpring } from 'react-spring';
import Link from 'next/link'
import { useState, useEffect } from "react";

const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 200,
    -(x - window.innerWidth / 2) / 200,
    1.05,
  ];
  const trans = (x, y, s) =>
    `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Businesses", "Influencers", "Brands" ];
  const period = 1000;

    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 2, tension: 350, friction: 40 },
      }));

      useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
  return (
    <div className='h-screen mt-20 mx-auto p-4 w-full '>
          <motion.div
            as="div"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ y: 10, opacity: 0 }}
          >     
        <div className="flex flex-col h-full text-white justify-center items-center text-center">
          {/* dashboard */}
              <h1 className='flex-1 font-semibold text-5xl md:text-6xl lg:leading-[62px] leading-[52px]'>
                The Leading <br className='sm:block hidden'/> {" "}
                Social Media Resources <br className='sm:block hidden'/>
                For <span className="txt-rotate"><span className="wrap">{text}</span></span>
              </h1>
            <div className='flex w-[100%] md:w-[50%]'>
              <p className='flex-1 text-xl mt-10 '>Eeesshh Media provide you a one stop platform to Develop your Website, Automated Hosting, Optimize SEO, and Provide Social Media Marketing</p>
            </div>
            <Link href="/">
              <btn className='flex hover:scale-105 transition duration-200 ease-in-out hover:text-gray-200 hover:cursor-pointer rounded-lg py-2 px-8 bg-white mt-10 shadow-lg'><span className='text-[#5865F2] font-bold text-2xl'>Get Started</span></btn>
            </Link>

         <div className='flex items-center justify-center w-full h-full '>

         <animated.img
                  src="https://lh3.googleusercontent.com/m-c08br1k0exO4ZcgGTTZE3zzzJmqOplHDPzthuMdwY4DSzZTYBSVcmkya1RdBMsbuEsV4b3Pj9V_AFWUw=s340"
                  alt="hero"
                  draggable={false}
                  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: [-(y - window.innerHeight / 2) / 200, -(x - window.innerWidth / 2) / 200, 1.05] })}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ opacity:0.9, transform: props.xys.interpolate((x, y, s) => `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`) }}
                  className="hover:drop-shadow-md "
                />

         </div>
         {/* dashboard */}  


        </div>
        </motion.div> 
    </div>
  )
}

export default Hero