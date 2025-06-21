import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Modern gym interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4 sm:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide leading-tight text-white">
          Train Smarter. <br /> Live Stronger.
        </h1>
        <p className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto">
          Vineland&apos;s premier 24/7 fitness center with state-of-the-art equipment and expert guidance to help you achieve
          your fitness goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-base font-medium">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-base font-medium"
          >
            View Memberships
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="w-[1px] h-12 bg-white/50 mx-auto"></div>
      </div>
    </section>
  );
}
