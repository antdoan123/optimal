import Image from "next/image"
import { MapPin, Clock, Phone } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-4 text-gray-900">
              About Optimal Gym
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Optimal Gym is a 24/7 fitness and sports club located in Vineland, NJ,
              built for people who love a real training environment—old-school
              free weights, space to move, and courts to play on.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              More than just machines, our facility brings together strength
              training, cardio, and multiple sports under one roof. Members come
              here to lift, hoop, compete, recover, and stay consistent year-round.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you&apos;re just starting your fitness journey or you&apos;ve
              been training for years, Optimal Gym gives you access to free weights,
              cardio equipment, indoor tennis, racquetball and basketball courts,
              plus steam room, sauna, group classes, and more.
            </p>

            {/* Quick facts */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">
                    3821 South Main Road, Vineland, NJ 08360
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Hours</p>
                  <p className="text-gray-600">Open 24 hours daily for members</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Contact</p>
                  <p className="text-gray-600">(856) 555-0123</p>
                  {/* TODO: replace with the real phone number */}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about.JPG"
                alt="Optimal Gym interior with free weights and training space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
