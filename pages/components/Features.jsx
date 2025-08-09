'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "Modern Equipment",
    description: "High-quality machines for strength and cardio training",
    image: "/machine.jpg",
  },
  {
    title: "Swimming Pool",
    description: "Clean, well-maintained pool for lap swimming and aquatic fitness",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Recovery Area",
    description: "Dedicated space for stretching and post-workout recovery",
    image: "/recovery.jpg",
  },
  {
    title: "Sports Courts",
    description: "Professional courts for tennis, basketball, and racquetball",
    image: "/tennis.jpg",
  },
];

export default function Feature() {
  return (
    <section id="facilities" className="w-full py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-wide mb-4 text-gray-900">Our Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Optimal Gym offers well-designed spaces that inspire performance and recovery. Each area is thoughtfully
            equipped to support your fitness journey.
          </p>
        </motion.div>

        {/* Facility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-md w-full"
            >
              <div className="aspect-video relative w-full">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-1">{facility.title}</h3>
                  <p className="text-sm text-white/90">{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our facilities are designed to provide a comfortable and motivating environment for members of all fitness
            levels.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
