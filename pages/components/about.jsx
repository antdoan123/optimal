import Image from "next/image"
import { MapPin, Clock, Phone } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-4 text-gray-900">About Optimal Gym</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Optimal Gym, we believe that fitness is for everyone. Our approach combines effective training methods
              with a supportive community to help you achieve lasting results.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with the mission to create a welcoming environment where members of all fitness levels can thrive,
              we&apos;ve built a space where physical health and mental wellbeing go hand in hand.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">3821 South Main Road, Vineland, NJ 08360</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Hours</p>
                  <p className="text-gray-600">24 hours daily for members</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Contact</p>
                  <p className="text-gray-600">(856) 555-0123</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about.JPG"
                alt="Modern gym interior"
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
