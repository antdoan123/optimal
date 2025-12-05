"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";

const SHEET_URL =
  "https://api.sheetbest.com/sheets/1187d393-08dc-4e56-9108-21a289b07e85"; // class schedule from Sheet.best

const staticClasses = [
  {
    name: "Boot Camp",
    duration: "60 min",
    description:
      "High-intensity workouts combining cardio, strength training, obstacle courses, kickboxing, and military-style drills.",
    image: "/bootcamp.jpg?height=400&width=600",
  },
  {
    name: "Yoga Flow",
    duration: "45 min",
    description:
      "Peaceful classes to increase flexibility, coordination, and strength with certified yoga instructors. All levels welcome.",
    image: "/yoga.jpg?height=400&width=600",
  },
  {
    name: "Pilates",
    duration: "50 min",
    description:
      "Strengthen your core, improve flexibility, and boost endurance through structured Pilates sessions for all levels.",
    image: "/pilates.jpg?height=400&width=600",
  },
  {
    name: "Zumba",
    duration: "45 min",
    description:
      "A Latin-inspired dance-fitness party blending upbeat music and moves for an energetic, fun, and effective workout.",
    image: "/zumba.jpg?height=400&width=600",
  },
];

// TODO: replace with real trainers + images + emails when they send them
const trainers = [
  {
    name: "Jennifer Newton",
    role: "Personal Trainer",
    bio: "Specializes in muscle building, strength training, and athletic performance for all fitness levels.",
    image: "/personal.png", // replace with real path
    email: "Powerbyjen@gmail.com",
  },

];

export default function Classes() {
  const [scheduleMap, setScheduleMap] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(SHEET_URL);
        const data = await res.json();

        const schedule = {};

        data.forEach((cls) => {
          try {
            if (!cls.datetime) return;

            const date = parseISO(cls.datetime);
            if (isNaN(date.getTime())) return;

            const weekday = format(date, "EEEE");
            const time = format(date, "HH:mm");

            if (!schedule[time]) schedule[time] = {};
            schedule[time][weekday] = cls.name;
          } catch (err) {
            console.warn("Invalid datetime:", cls.datetime);
          }
        });

        setScheduleMap(schedule);
      } catch (error) {
        console.error("Failed to load class schedule:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="classes" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-wide mb-4 text-gray-900">
            Group Classes
          </h2>
          <p className="text-gray-600">
            Our diverse range of classes are led by experienced instructors who
            will motivate and guide you to achieve your fitness goals.
          </p>
        </div>

        {/* Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staticClasses.map((classItem, index) => (
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
                  src={classItem.image || "/placeholder.svg"}
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
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {classItem.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-4">
                    {classItem.description}
                  </p>
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

        {/* Weekly Schedule Table */}
        <div className="mt-20 text-black">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
            Weekly Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-2">Time</th>
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <th
                      key={day}
                      className="border border-gray-200 p-2 text-center"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(scheduleMap)
                  .sort(
                    (a, b) =>
                      new Date(`1970-01-01T${a}`) -
                      new Date(`1970-01-01T${b}`)
                  )
                  .map((time) => (
                    <tr key={time}>
                      <td className="border border-gray-200 p-2 font-medium">
                        {format(
                          new Date(`1970-01-01T${time}`),
                          "h:mm a"
                        )}
                      </td>
                      {[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ].map((day) => (
                        <td
                          key={day}
                          className="border border-gray-200 p-2 text-center text-gray-700"
                        >
                          {scheduleMap[time] && scheduleMap[time][day]
                            ? scheduleMap[time][day]
                            : "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Personal Training Section */}
        <div className="mt-20">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-wide mb-4 text-gray-900">
              Personal Training
            </h2>
            <p className="text-gray-600">
              Looking for one-on-one coaching or a more customized plan? Our
              personal trainers offer private sessions tailored to your goals —
              from weight loss and strength training to athletic performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.email}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden border"
              >
                <div className="relative w-full md:w-1/3 aspect-[4/3] md:aspect-auto">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between w-full md:w-2/3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {trainer.name}
                    </h3>
                    <p className="text-purple-600 text-sm font-medium mb-2">
                      {trainer.role}
                    </p>
                    <p className="text-gray-600 text-sm">{trainer.bio}</p>
                  </div>
                  <div className="mt-4">
                    <Button
                      className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white"
                      asChild
                    >
                      <a href={`mailto:${trainer.email}`}>
                        Email {trainer.name.split(" ")[0]} for Private Training
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
