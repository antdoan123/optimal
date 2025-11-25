'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const amenities = [
  {
    title: "Old-School Free Weights",
    description: "A full weight training area with dumbbells, racks, benches and strength equipment for all levels.",
    image: "/weights.jpg",
  },
  {
    title: "Indoor Tennis Court",
    description: "Train year-round on our indoor court — no weather, no wait.",
    image: "/tennis.JPG",
  },
  {
    title: "Racquetball & Basketball Courts",
    description: "Play solo or compete with friends — a true sports club experience.",
    image: "/courts.jpg",
  },
  {
    title: "Cardio Training Zone",
    description: "Treadmills, bikes, rowers and other machines to help build stamina and conditioning.",
    image: "/cardio.jpg",
  },
  {
    title: "Steam Room & Sauna",
    description: "Recover, relax, and recharge with heat therapy after your workout.",
    image: "/sauna.jpg",
  },
  {
    title: "Group Fitness Classes",
    description: "Yoga, Zumba, Pilates and Bootcamp — led by real instructors.",
    image: "/classes.jpg",
  },
  {
    title: "Locker Rooms & Showers",
    description: "Clean and convenient locker areas for post-workout refresh.",
    image: "/lockerroom.jpg",
  },
  {
    title: "24/7 Member Access",
    description: "Train on your schedule — anytime, day or night.",
    image: "/24hours.jpg",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="w-full py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">Amenities & Features</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            More than a gym — a full fitness and sports environment built for every goal and every style of training.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <div className="aspect-video relative w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition" />
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
