import { Phone, MapPin, ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
<section id="memberships" className="py-20 bg-purple-600 relative overflow-hidden w-full">
  <div className="absolute inset-0 bg-[url('/cta-texture.png')] opacity-10 pointer-events-none"></div>

  {/* Content Container */}
  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Ready to Get Started?
    </h2>

    <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
      Stop by for a tour or call us for membership details. No pressure — just see if we are the right fit for you.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-6">

      {/* Call Button */}
      <a
        href="tel:+18565550123"
        className="flex items-center justify-center gap-3 bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        <Phone className="w-5 h-5" />
        Call for Pricing
      </a>

      {/* Visit Button */}
      <a
        href="https://maps.google.com/?q=3821+South+Main+Road,+Vineland,+NJ+08360"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition"
      >
        <MapPin className="w-5 h-5" />
        Visit the Gym
      </a>
    </div>

    <p className="mt-8 text-white/80 flex items-center justify-center gap-2 text-sm">
      Membership options available: 1, 3, 6 & 12 months
    </p>
  </div>
</section>
  )}