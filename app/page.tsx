"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { RefinedHero } from "@/components/RefinedHero";
import { ProcessCraft } from "@/components/ProcessCraft";
import { TrustBlocks } from "@/components/TrustBlocks";
import { EditorialSection } from "@/components/EditorialSection";
import { PremiumCard } from "@/components/PremiumCard";
import { PremiumBackground } from "@/components/PremiumBackground";
import { RefinedCursor } from "@/components/RefinedCursor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Star, Clock, CheckCircle2, TrendingUp, Shield, BadgeCheck, Award, Sparkles } from "lucide-react";

const services = [
  {
    name: "Essential Refresh",
    price: "from $149",
    time: "90–120 MIN",
    description: "The perfect maintenance treatment for your car's interior and exterior.",
    inclusions: [
      "Hand Wash",
      "Interior Vacuum",
      "Dust & Wipe Detail",
      "Surface Cleaning"
    ],
    tier: "silver",
    booked: "45"
  },
  {
    name: "Full Restoration",
    price: "from $299",
    time: "3–4 HRS",
    tier: "master",
    badge: "MOST POPULAR",
    booked: "82",
    description: "A complete cleanup and protection package to bring your car back to life.",
    inclusions: [
      "Paint Cleaning",
      "Premium Wax Finish",
      "Engine Bay Clean",
      "Leather Treatment"
    ]
  },
  {
    name: "Showroom Perfection",
    price: "QUOTATION",
    time: "FULL DAY",
    tier: "platinum",
    booked: "12",
    description: "Our highest level of detailing for the absolute best possible results.",
    inclusions: [
      "Multi-Stage Polish",
      "Ceramic Protection",
      "Steam Cleaning",
      "Precision Refinement"
    ]
  }
];

const faqs = [
  {
    question: "How long does a full detail take?",
    answer: "A full restoration typically takes 4–6 hours depending on the vehicle's condition."
  },
  {
    question: "Do you offer mobile services?",
    answer: "Yes, we provide premium mobile detailing at your location in Fort Lauderdale and surrounding areas."
  },
  {
    question: "What products do you use?",
    answer: "We use professional-grade, pH-balanced cleaners and premium ceramic coatings from industry-leading brands."
  }
];

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    package: "",
    datetime: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", vehicle: "", package: "", datetime: "", notes: "" });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-black relative">
      <Navbar onBookingClick={scrollToBooking} />
      <RefinedCursor />

      <RefinedHero onBookingClick={scrollToBooking} />

      <ProcessCraft />

      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Select Your <span className="text-gradient italic">Transformation</span>
            </h2>
            <p className="text-zinc-400 text-lg">Tiered protocols tailored to your vehicle's unique state.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <Card className={`h-full flex flex-col bg-zinc-900 border-zinc-800 ${service.tier === 'master' ? 'border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : ''}`}>
                  <CardHeader>
                    {service.badge && (
                      <div className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full w-fit mb-4">
                        {service.badge}
                      </div>
                    )}
                    <CardTitle className="text-2xl text-white">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-zinc-500 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {service.time}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {service.inclusions.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={scrollToBooking} className="w-full bg-white text-black hover:bg-zinc-200">
                      Reserve Your Spot
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TrustBlocks />

      <EditorialSection
        title="PROTECTED FOR THE LONG RUN."
        subtitle="BEYOND THE SHINE"
        description="A great detail isn't just about how it looks today. It's about how it stays protected. We use long-lasting solutions to keep your car looking great in any weather."
        reversed
      />

      <section id="booking" ref={bookingRef} className="py-24 px-4 bg-black">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Lock In Your Transformation</h2>
            <p className="text-zinc-400">Confirmation within 2 hours • No payment required now</p>
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="pt-6">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-zinc-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
                  <p className="text-zinc-400">We'll contact you shortly to confirm the details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input id="name" required className="bg-zinc-800 border-zinc-700 text-white" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input id="phone" type="tel" required className="bg-zinc-800 border-zinc-700 text-white" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle" className="text-white">Vehicle Make & Model</Label>
                    <Input id="vehicle" required className="bg-zinc-800 border-zinc-700 text-white" value={formData.vehicle} onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Select Protocol</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, package: v })} required>
                      <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                        <SelectItem value="refresh">Essential Refresh</SelectItem>
                        <SelectItem value="restoration">Full Restoration</SelectItem>
                        <SelectItem value="perfection">Showroom Perfection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200 font-bold">
                    Reserve Your Spot Now
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-zinc-800">
                <AccordionTrigger className="text-white hover:text-zinc-400">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-zinc-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-zinc-800 bg-black text-center">
        <p className="text-zinc-600 text-sm">&copy; {new Date().getFullYear()} Reyes Auto Detail Co. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
