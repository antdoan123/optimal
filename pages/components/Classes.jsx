"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const classes = [
  {
    name: "Boot Camp",
    duration: "60 min",
    description:
      "High-intensity workouts combining cardio, strength training, obstacle courses, kickboxing, and military-style drills.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Yoga Flow",
    duration: "45 min",
    description:
      "Peaceful classes to increase flexibility, coordination, and strength with certified yoga instructors. All levels welcome.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Pilates",
    duration: "50 min",
    description:
      "Strengthen your core, improve flexibility, and boost endurance through structured Pilates sessions for all levels.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Zumba",
    duration: "45 min",
    description:
      "A Latin-inspired dance-fitness party blending upbeat music and moves for an energetic, fun, and effective workout.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-wide mb-4 text-gray-900">Group Classes</h2>
          <p className="text-gray-600">
            Our diverse range of classes are led by experienced instructors who will motivate and guide you to achieve
            your fitness goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={classItem.image}
                  alt={classItem.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full shadow">
                    {classItem.duration}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between h-[240px]">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{classItem.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-4">{classItem.description}</p>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-base font-medium">
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
}
