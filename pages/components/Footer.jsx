import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold tracking-widest text-white">OPTIMAL</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Vineland&apos;s premier 24/7 fitness center, dedicated to helping you achieve your goals in a dynamic and
              supportive environment.
            </p>
            <div className="space-y-1 text-sm text-gray-400">
              <p>📍 3821 South Main Road</p>
              <p>🏙️ Vineland, NJ 08360</p>
              <p>📞 (856) 825-4646</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["About", "Facilities", "Classes", "Memberships", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    href={`#${label.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect + Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link
                href="https://www.instagram.com/vineland_optimal_gym/"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/vineland_optimal_gym/"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Optimal Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
