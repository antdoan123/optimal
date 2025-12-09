import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/bg.jpg"
          alt="Optimal Gym fitness and sports club"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Tagline chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-medium text-white/80">
          <span>24/7 Access</span>
          <span className="w-[3px] h-[3px] rounded-full bg-white/60" />
          <span>Vineland, NJ</span>
        </div>

<h1
  className="
    hero-title
    text-4xl sm:text-5xl md:text-7xl font-bold 
    tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.16em]
    leading-tight md:leading-[1.15]
    text-white
  "
  style={{ textShadow: "0px 3px 6px rgba(0,0,0,0.35)" }}
>          More Than a Gym.
          <br className="hidden sm:block" /> A Full Fitness &amp; sports club.
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90">
          Old-school iron, modern convenience. Enjoy 24/7 training with free weights,
          cardio, indoor tennis, indoor pickleball, racquetball and basketball courts, plus steam room,
          sauna, and more—all under one roof.
        </p>

        {/* Amenities strip */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-xs sm:text-sm text-white/80">
          <span className="px-3 py-1 rounded-full border border-white/25 bg-white/5">
            Free Weights
          </span>
          <span className="px-3 py-1 rounded-full border border-white/25 bg-white/5">
            Indoor Tennis
          </span>
          <span className="px-3 py-1 rounded-full border border-white/25 bg-white/5">
            Racquetball &amp; Basketball
          </span>
          <span className="px-3 py-1 rounded-full border border-white/25 bg-white/5">
            Steam Room &amp; Sauna
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-base font-medium">
            View Memberships
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-base font-medium"
          >
            Explore Amenities
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2">
        <div className="w-[1px] h-10 bg-white/60" />
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
