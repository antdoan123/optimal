import Head from "next/head"
import Script from "next/script"

import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import About from "./components/about"
import Features from "./components/Features"
import Classes from "./components/Classes"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "Optimal Gym",
    description:
      "24/7 fitness and sports club in Vineland, NJ offering free weights, cardio, indoor tennis, racquetball and basketball courts, steam room, sauna, and group fitness classes.",
    url: "https://your-domain.com", // TODO: replace with real domain
    telephone: "+1-856-300-7099", // TODO: confirm number
    address: {
      "@type": "PostalAddress",
      streetAddress: "3821 South Main Road",
      addressLocality: "Vineland",
      addressRegion: "NJ",
      postalCode: "08360",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    amenitiesFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free weights" },
      { "@type": "LocationFeatureSpecification", name: "Cardio equipment" },
      { "@type": "LocationFeatureSpecification", name: "Indoor tennis court" },
      { "@type": "LocationFeatureSpecification", name: "Racquetball courts" },
      { "@type": "LocationFeatureSpecification", name: "Basketball court" },
      { "@type": "LocationFeatureSpecification", name: "Steam room" },
      { "@type": "LocationFeatureSpecification", name: "Sauna" },
      {
        "@type": "LocationFeatureSpecification",
        name: "Group fitness classes (yoga, Zumba, Pilates, bootcamp)",
      },
    ],
  }

  return (
    <>
      <Head>
        <title>
          Optimal Gym Vineland NJ | 24/7 Fitness, Indoor Tennis &amp; Sports Club
        </title>
        <meta
          name="description"
          content="Train at Optimal Gym in Vineland, NJ. 24/7 access, old-school free weights, cardio, indoor tennis, racquetball and basketball courts, steam room, sauna, and group fitness classes."
        />
        <meta
          name="keywords"
          content="Optimal Gym Vineland, gym Vineland NJ, indoor tennis Vineland, racquetball court Vineland, basketball court gym, 24 hour gym Vineland, fitness center Vineland NJ, sauna steam room gym NJ"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/optimallogo.png" />

        {/* Open Graph / Social preview */}
        <meta
          property="og:title"
          content="Optimal Gym Vineland NJ | 24/7 Fitness & Indoor Tennis"
        />
        <meta
          property="og:description"
          content="Full fitness and sports club with free weights, indoor tennis, racquetball, basketball courts, steam room, sauna and more in Vineland, New Jersey."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta
          property="og:image"
          content="https://your-domain.com/og-optimal-gym.jpg"
        />
      </Head>

      {/* LocalBusiness schema for Google */}
      <Script
        id="optimal-gym-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex flex-col justify-center items-center bg-white w-full mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Classes />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
