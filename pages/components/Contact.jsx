import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Clock,
  Phone,
  Mail,
  Wrench,
  Car,
  PenToolIcon as Tool,
  CheckCircle,
  ChevronRight,
  Star,
} from "lucide-react"

export default function Contact() {
  return (

        <section id="contact" className="bg-gradient-dark py-20 md:py-28">
          <div className="container px-4">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Request Your <span className="bg-gradient-luxury bg-clip-text text-transparent">Premium Quote</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the Chamba Mechanics difference with a complimentary consultation and detailed estimate
              </p>
            </div>
            <div className="mx-auto max-w-3xl rounded-3xl border border-luxury-gold/30 bg-card/50 backdrop-blur p-8 shadow-2xl">
              <form className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-medium text-luxury-gold">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-background/50 border-luxury-charcoal focus:border-luxury-gold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-sm font-medium text-luxury-gold">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="bg-background/50 border-luxury-charcoal focus:border-luxury-gold"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-medium text-luxury-gold">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="bg-background/50 border-luxury-charcoal focus:border-luxury-gold"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="service" className="text-sm font-medium text-luxury-gold">
                    Premium Service Required
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-luxury-charcoal focus:border-luxury-gold">
                      <SelectValue placeholder="Select your premium service" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-luxury-charcoal">
                      <SelectItem value="precision-repair">Precision Repair</SelectItem>
                      <SelectItem value="luxury-maintenance">Luxury Maintenance</SelectItem>
                      <SelectItem value="battery-excellence">Battery Excellence</SelectItem>
                      <SelectItem value="elite-inspection">Elite Inspection</SelectItem>
                      <SelectItem value="advanced-electrical">Advanced Electrical</SelectItem>
                      <SelectItem value="priority-emergency">Priority Emergency</SelectItem>
                      <SelectItem value="custom-service">Custom Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-medium text-luxury-gold">
                    Vehicle Details & Service Requirements
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide your vehicle details (year, make, model) and describe the service you require. Our premium technicians will provide a detailed consultation."
                    className="min-h-[140px] bg-background/50 border-luxury-charcoal focus:border-luxury-gold"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-luxury hover:opacity-90 text-black font-semibold py-4 text-lg"
                >
                  Request Premium Consultation
                </Button>
              </form>
            </div>
          </div>
        </section>
  )
}
