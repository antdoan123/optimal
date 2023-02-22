import React from "react";
import { animated, useSpring } from "react-spring";
import { AiOutlineTool, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 200,
  -(x - window.innerWidth / 2) / 200,
  1.05,
];
const trans = (x, y, s) =>
  `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Services() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 350, friction: 40 },
  }));

  return (
    <div className="h-full mt-20 mx-auto p-4 w-full">
      <motion.div
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center mb-10 md:mb-32"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          From start to end.
        </h1>
      </motion.div>
      
      <motion.div
                  initial={{x: 100, opacity: 0 }}
                  whileInView={{x:0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="flex flex-col lg:flex-row justify-center items-center mb-10 md:mb-32"
                  >
        <div className="flex-1 flex-start flex-col space-y-8 w-full ">
          <animated.img
            src="codesnippet.png"
            alt="hero"
            draggable={false}
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({
                xys: [
                  -(y - window.innerHeight / 2) / 200,
                  -(x - window.innerWidth / 2) / 200,
                  1.05,
                ],
              })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              opacity: 0.9,
              transform: props.xys.interpolate(
                (x, y, s) =>
                  `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
              ),
            }}
            className="rounded-lg shadow-xl "
          />
        </div>

        <div className="flex-1 justify-center items-center md:ml-10 ml-0 mt-10 lg:mt-0">
          <div className="flex-1 flex-start flex-col space-y-8 w-full ">
            <h1 className="text-2xl md:text-4xl leading-sm md:leading-[52px] font-bold w-full text-black">
              Starting with website development
            </h1>
            <p className="flex text-lg md:text-xl text-neutral-500 max-w-[470px]">
              EeesshhMedia designs, develops and deploys websites. They first
              understand the client's requirements, create an intuitive design,
              and use advanced technologies for development. Rigorous testing is
              done before deployment, and EeesshhMedia collaborates with the
              client throughout the process to ensure a high-quality and
              customized end product.
            </p>
            <Link href="/" className="hidden lg:flex">
              <btn className="flex items-center hover:scale-105 transition duration-200 ease-in-out hover:text-gray-200 hover:cursor-pointer rounded-lg py-2 px-8 bg-[#5865F2] shadow-lg text-white gap-2">
                <p>Get Started </p>
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </btn>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
                  initial={{x: -100, opacity: 0 }}
                  whileInView={{x:0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="flex flex-col lg:flex-row justify-center items-center mb-10 md:mb-32"
                  >
        <div className="lg:hidden flex-1 flex-start flex-col space-y-8 w-full ">
          <animated.img
            src="performances.png"
            alt="hero"
            draggable={false}
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({
                xys: [
                  -(y - window.innerHeight / 2) / 200,
                  -(x - window.innerWidth / 2) / 200,
                  1.05,
                ],
              })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              opacity: 0.9,
              transform: props.xys.interpolate(
                (x, y, s) =>
                  `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
              ),
            }}
            className="rounded-lg shadow-xl "
          />
        </div>
        <div className="flex-1 justify-center items-center md:ml-10 ml-0 mt-10 lg:mt-0">
          <div className="flex-1 flex-start flex-col space-y-8 w-full ">
            <h1 className="text-2xl md:text-4xl leading-sm md:leading-[52px] font-bold w-full text-black">
              Optimizing Speed and Performances
            </h1>
            <p className="flex text-lg md:text-xl text-neutral-500 max-w-[470px]">
              EeesshhMedia optimizes website performance and speed by using the
              latest web technologies and industry best practices. They conduct
              thorough research to identify relevant keywords and phrases and
              integrate them into the website's content, meta descriptions, and
              titles. EeesshhMedia also optimizes the website's structure and
              content to improve search engine ranking, helping clients reach
              their target audience and achieve their online goals.
            </p>
            <Link href="/" className="hidden lg:flex">
              <btn className="flex items-center hover:scale-105 transition duration-200 ease-in-out hover:text-gray-200 hover:cursor-pointer rounded-lg py-2 px-8 bg-[#5865F2] shadow-lg text-white gap-2">
                <p>Get Started </p>
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </btn>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 flex-end flex-col space-y-8 w-full  ">
          <animated.img
            src="performances.png"
            alt="hero"
            draggable={false}
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({
                xys: [
                  -(y - window.innerHeight / 2) / 200,
                  -(x - window.innerWidth / 2) / 200,
                  1.05,
                ],
              })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              opacity: 0.9,
              transform: props.xys.interpolate(
                (x, y, s) =>
                  `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
              ),
            }}
            className="rounded-lg shadow-xl "
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
