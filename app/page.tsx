"use client";

import { useState, useEffect, useRef } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Clock, CheckCircle2, Phone, Mail, ArrowUpRight } from "lucide-react";

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
    ]
  },
  {
    name: "Full Restoration",
    price: "from $299",
    time: "3–4 HRS",
    highlight: true,
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
    description: "Our highest level of detailing for the absolute best possible results.",
    inclusions: [
      "Multi-Stage Polish",
      "Ceramic Protection",
      "Steam Cleaning",
      "Precision Refinement"
    ]
  }
];

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
    <main className="bg-obsidian min-h-screen selection:bg-white selection:text-black">
      <PremiumBackground />
      <RefinedCursor />


      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[110] origin-left" style={{ scaleX }} />

      {/* Hero Section */}
      <RefinedHero onBookingClick={scrollToBooking} />

      {/* Trust Grid */}
      <TrustBlocks />

      {/* Storytelling Section 1 */}
      <div id="philosophy">
        <EditorialSection
          title="CARE. WITHOUT COMPROMISE."
          subtitle="OUR PROMISE"
          description="We believe in doing things the right way. Every car is treated with extreme care, using the best tools and methods to protect your investment for years to come."
        />
      </div>

      {/* Interactive Process Section */}
      <ProcessCraft />

      {/* Services Section */}
      <section id="services" className="py-40 px-6 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold mb-8 block font-sans">
                CURATED EXPERIENCES
              </span>
              <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9]">
                Select Your <br />
                <span className="text-gradient italic">Transformation</span>
              </h2>
            </div>
            <p className="text-zinc-500 text-lg font-sans max-w-xs mb-4">
              Tiered protocols tailored to your vehicle's unique state.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-[2.5rem] overflow-hidden border border-white/10">
            {services.map((service, index) => (
              <div key={service.name} className="bg-obsidian">
                <PremiumCard delay={index * 0.1} highlight={service.highlight}>
                  <div className="mb-12">
                    <h3 className="text-3xl font-display font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{service.time}</p>
                  </div>

                  <p className="text-zinc-500 mb-12 font-sans h-16">{service.description}</p>

                  <div className="mb-12">
                    <span className="text-4xl font-display font-bold text-white tracking-tight">{service.price}</span>
                  </div>

                  <ul className="space-y-6 mb-16 flex-grow">
                    {service.inclusions.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-400 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-white transition-colors" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToBooking}
                    className={`group w-full h-16 rounded-full transition-all duration-500 font-bold uppercase tracking-widest text-[10px] ${service.highlight
                      ? 'bg-white text-black hover:bg-satin-silver'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                      }`}
                  >
                    Initiate protocol <ArrowUpRight className="ml-2 w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                </PremiumCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Section 2 */}
      <div id="portfolio">
        <EditorialSection
          title="PROTECTED FOR THE LONG RUN."
          subtitle="BEYOND THE SHINE"
          description="A great detail isn't just about how it looks today. It's about how it stays protected. We use long-lasting solutions to keep your car looking great in any weather."
          reversed
        />
      </div>

      {/* Booking Form */}
      <section id="booking" ref={bookingRef} className="py-40 px-6 relative bg-obsidian">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold mb-8 block font-sans">
              RESERVE YOUR ALLOTMENT
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9]">
              Begin The <br /> Journey
            </h2>
          </div>

          <div className="p-px bg-gradient-to-br from-white/20 to-transparent rounded-[3rem]">
            <div className="bg-obsidian p-8 md:p-20 rounded-[3rem]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4 text-white">Application Received</h3>
                  <p className="text-zinc-500 font-sans text-lg">Our technicians will verify your slot within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12 font-sans">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <Label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">CLIENT NAME</Label>
                      <Input
                        placeholder="Alex Sterling"
                        className="bg-transparent border-0 border-b border-white/10 rounded-none h-14 px-0 focus:border-white transition-all text-white placeholder:text-zinc-700 text-lg"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-4">
                      <Label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">CONTACT CHANNEL</Label>
                      <Input
                        placeholder="+1 (555) 000-0000"
                        className="bg-transparent border-0 border-b border-white/10 rounded-none h-14 px-0 focus:border-white transition-all text-white placeholder:text-zinc-700 text-lg"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">VEHICLE SPECIFICATION</Label>
                    <Input
                      placeholder="2024 Porsche 911 GT3 RS"
                      className="bg-transparent border-0 border-b border-white/10 rounded-none h-14 px-0 focus:border-white transition-all text-white placeholder:text-zinc-700 text-lg"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <Label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">SERVICE TIER</Label>
                      <Select onValueChange={(v) => setFormData({ ...formData, package: v })} required>
                        <SelectTrigger className="bg-transparent border-0 border-b border-white/10 rounded-none h-14 px-0 focus:ring-0 focus:border-white text-white text-lg">
                          <SelectValue placeholder="Select Protocol" />
                        </SelectTrigger>
                        <SelectContent className="bg-obsidian border-white/10 text-white">
                          <SelectItem value="refresh">Executive Refresh</SelectItem>
                          <SelectItem value="deep">Deep Transformation</SelectItem>
                          <SelectItem value="concours">Concours Detail</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-4">
                      <Label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">SCHEDULE PREFERENCE</Label>
                      <Input
                        type="datetime-local"
                        className="bg-transparent border-0 border-b border-white/10 rounded-none h-14 px-0 focus:border-white transition-all text-white [color-scheme:dark] text-lg"
                        value={formData.datetime}
                        onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-20 bg-white text-black hover:bg-satin-silver transition-all text-xs font-bold uppercase tracking-[0.3em] rounded-full mt-12">
                    Request Appointment
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 px-6 border-t border-white/5 bg-obsidian">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-24">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-display font-bold mb-8 text-white tracking-tighter">REYES AUTO <span className="text-zinc-500 font-light">DETAIL CO.</span></h3>
            <p className="text-zinc-500 font-sans max-w-sm text-lg leading-relaxed">
              Curating automotive excellence through precision and passion.
              The ultimate destination for professional preservation in Florida.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">CONTACT</h4>
            <ul className="space-y-4 font-sans text-sm text-zinc-500">
              <li className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-white/20" /> (954) 555-0123
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-white/20" /> bespoke@reyesauto.co
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-white/20" /> Fort Lauderdale, FL
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">SOCIAL</h4>
            <ul className="space-y-4 font-sans text-sm text-zinc-500">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-white/20" /> Instagram
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-white/20" /> LinkedIn
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-40 mt-40 border-t border-white/5 text-center font-sans text-[10px] text-zinc-600 tracking-[0.5em] uppercase">
          &copy; {new Date().getFullYear()} Reyes Auto Detail Co. &bull; All Rights Reserved
        </div>
      </footer>
    </main>
  );
}
