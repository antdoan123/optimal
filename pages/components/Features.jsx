import React from "react";
import { BsMegaphone, BsPencil } from "react-icons/bs";
import { AiOutlineTool, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion"

function Features() {
  return (
    <div name="about" className="h-full mt-20 mx-auto p-4 w-full">
      <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="flex items-center justify-center mb-10 md:mb-32"
            >
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Running a business has never been easier.
        </h1>
      </motion.div>
      
      <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="flex flex-col lg:flex-row justify-center items-start"
                  >
        <div className="flex-1 flex-start flex-col space-y-8 w-full ">
          <h1 className="text-2xl md:text-4xl leading-sm md:leading-[52px] font-bold w-full text-black">
            You do the business, <br className="sm:block hidden" />
            we&apos;ll handle the development.
          </h1>
          <p className="flex max-w-[470px] text-lg md:text-xl text-neutral-500">
            With the right social media agency, you can focus on your business,
            while we design, develope, and host your website from scratch to
            finish. As well as monitoring and optimizing your campaign,
            advertisments, and social media.{" "}
          </p>
          <Link href="/" className="hidden lg:flex">
            <btn className="flex items-center hover:scale-105 transition duration-200 ease-in-out hover:text-gray-200 hover:cursor-pointer rounded-lg py-2 px-8 bg-[#5865F2] shadow-lg text-white gap-2">
              <p>Get Started </p>
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </btn>
          </Link>
        </div>

        <div className="flex-1 flex-col justify-center items-center md:ml-10 ml-0 mt-10 lg:mt-0 space-y-6 ">
          <div className="flex gap-x-8">
            <div className="hover:scale-105 rounded-lg bg-[#5865F2] shadow-xl text-white flex flex-row items-center justify-center px-5 h-16">
              <BsMegaphone size={"24px"}></BsMegaphone>
            </div>
            <div className="flex flex-col text-lg md:text-xl">
              <h1 className="font-bold text-black">Lead Generation</h1>
              <p className="text-lg text-neutral-500">
                We generate leads, reach target audience, optimize campaigns for
                max performance, ROI to drive conversions for businesses.
              </p>
            </div>
          </div>

          <div className="flex gap-x-8">
            <div className="hover:scale-105 rounded-lg bg-[#5865F2] shadow-xl text-white flex items-center justify-center px-5 h-16">
              <AiOutlineTool size={"24px"}></AiOutlineTool>
            </div>
            <div className="flex flex-col text-lg md:text-xl">
              <h1 className="font-bold text-black">Web Development</h1>
              <p className="text-lg text-neutral-500">
                Our web designers provide custom websites that effectively
                showcase your brand, meet business needs, and drive results.
              </p>
            </div>
          </div>

          <div className="flex gap-x-8">
            <div className="hover:scale-105 rounded-lg bg-[#5865F2] shadow-xl text-white flex items-center justify-center px-5 h-16">
              <BsPencil size={"24px"}></BsPencil>
            </div>
            <div className="flex flex-col text-lg md:text-xl">
              <h1 className="font-bold text-black">SEO Optimization</h1>
              <p className="text-lg text-neutral-500">
                We increase website traffic and visibility through SEO services
                that strategically optimize keywords and content.
              </p>
            </div>
          </div>

          <Link href="/" className="flex lg:hidden">
            <btn className="flex items-center hover:scale-105 transition duration-200 ease-in-out hover:text-gray-200 hover:cursor-pointer rounded-lg py-2 px-8 bg-[#5865F2] shadow-lg text-white gap-2">
              <p>Get Started </p>
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </btn>
          </Link>
        </div>

      </motion.div>
    </div>
  );
}

export default Features;
