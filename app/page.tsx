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
    <main className="min-h-screen bg-black relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showFloatingCTA ? 1 : 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-t border-amber-500/20 py-4 px-4 shadow-[0_-10px_40px_rgba(217,119,6,0.3)]"
        style={{ pointerEvents: showFloatingCTA ? 'auto' : 'none' }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <p className="text-white font-semibold text-lg mb-1">Ready to Transform Your Car?</p>
            <p className="text-amber-400 text-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Only 3 slots left this week
            </p>
          </div>
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-6 text-lg rounded-lg shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] transition-all duration-300 font-bold"
          >
            Reserve Your Spot
          </Button>
        </div>
      </motion.div>

      <section className="relative min-h-[95vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center gap-4 flex-wrap text-sm"
          >
            <div className="flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-500/20">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              <span className="font-semibold text-amber-400">4.9</span>
              <span className="text-zinc-300">Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-zinc-300">230+ Vehicles Detailed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-zinc-300">Satisfaction Guaranteed</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]" style={{ textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(245,158,11,0.3)' }}>
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-zinc-300 mb-4"
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}
          >
            Professional interior and exterior detailing by{" "}
            <span className="text-amber-400 font-semibold">Jordan Reyes</span>
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg text-zinc-400 mb-10"
          >
            Clear pricing. Real results. No hassle.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-10 py-7 text-xl rounded-xl font-bold shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Reserve Your Spot</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </Button>
            <div className="text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                Only 3 slots left this week
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
            <AnimatedSection key={service.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`relative h-full flex flex-col backdrop-blur-xl bg-zinc-900/80 border-zinc-800 overflow-hidden group ${service.tier === 'gold'
                    ? 'border-2 border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.3)]'
                    : 'shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                  }`}>
                  {service.tier === 'gold' && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                  )}

                  {service.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-1.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.6)]">
                      {service.badge}
                    </div>
                  )}

                  {service.savings && (
                    <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
                      {service.savings}
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <CardTitle className="text-2xl text-white mb-1">{service.name}</CardTitle>
                        <div className="flex items-center gap-2 text-xs text-zinc-400">
                          <TrendingUp className="w-3 h-3" />
                          <span>{service.booked} booked this month</span>
                        </div>
                      </div>
                      <Sparkles className={`w-7 h-7 ${service.tier === 'gold' ? 'text-amber-400' : 'text-zinc-400'}`} />
                    </div>
                    <CardDescription className="text-base text-zinc-400">{service.description}</CardDescription>
                    <div className="flex items-center gap-4 mt-5">
                      <span
                        className={`text-3xl font-bold ${service.tier === 'gold' ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600' : 'text-white'}`}
                        style={service.tier !== 'gold' ? { textShadow: '0 0 10px rgba(255,255,255,0.3)' } : {}}
                      >
                        {service.price}
                      </span>
                      <span className="flex items-center gap-1.5 text-zinc-400 text-sm">
                        <Clock className="w-4 h-4" />
                        {service.time}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {service.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.tier === 'gold' ? 'text-amber-400' : 'text-white'}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-6">
                    <Button
                      onClick={scrollToBooking}
                      className={`w-full font-bold text-base py-6 transition-all duration-300 ${service.tier === 'gold'
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]'
                          : 'bg-white hover:bg-zinc-100 text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                        }`}
                    >
                      Reserve Your Spot
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

      {/* Storytelling Section 2 */ }
  <div id="portfolio">
    <EditorialSection
      title="PROTECTED FOR THE LONG RUN."
      subtitle="BEYOND THE SHINE"
      description="A great detail isn't just about how it looks today. It's about how it stays protected. We use long-lasting solutions to keep your car looking great in any weather."
      reversed
    />
  </div>

  {/* Booking Form */ }
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
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-zinc-900/80 backdrop-blur-xl border-zinc-800 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all">
                    <CardHeader>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                        <div className="flex items-center gap-1.5 bg-blue-500/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-blue-500/30">
                          <BadgeCheck className="w-4 h-4 text-blue-400" />
                          <span className="text-xs text-blue-400 font-semibold">{testimonial.verified}</span>
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 mt-1">{testimonial.location}, FL</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-300 leading-relaxed">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full border border-amber-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-amber-400 text-sm font-semibold">FAQ</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.4)' }}>
                Common Questions
              </h2>
              <p className="text-xl text-zinc-400">Everything you need to know</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-xl px-6 hover:border-zinc-700 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-amber-400 py-6 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-300 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      <section id="booking" className="py-24 px-4 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-2xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.div
                className="inline-block mb-6 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full border border-amber-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-amber-400 text-sm font-semibold">SECURE YOUR APPOINTMENT</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.4)' }}>
                Lock In Your Transformation
              </h2>
              <p className="text-lg text-zinc-400 mb-3">
                Complete in under 60 seconds • Confirmation within 2 hours
              </p>
              <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30">
                <TrendingUp className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm font-semibold">Only 3 slots remaining this week</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="backdrop-blur-xl bg-zinc-900/90 border-zinc-800 shadow-[0_0_40px_rgba(245,158,11,0.2)] border-t-2 border-t-amber-500/50">
              <CardContent className="pt-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-green-600/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-3" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
                      Booking Confirmed!
                    </h3>
                    <p className="text-zinc-300 text-lg">
                      Thanks for choosing Reyes Auto Detail Co.
                    </p>
                    <p className="text-amber-400 mt-2 font-semibold">
                      You'll receive a confirmation call or text within 2 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white font-semibold">Your Name</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="bg-zinc-800/80 backdrop-blur-sm border-zinc-700 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500 h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white font-semibold">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(954) 555-0123"
                          className="bg-zinc-800/80 backdrop-blur-sm border-zinc-700 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500 h-12"
                        />
                      </div>
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

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black text-lg py-7 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] transition-all font-bold"
                    >
                      Reserve Your Spot Now
                    </Button>

                    <div className="flex items-center justify-center gap-4 pt-4 text-xs text-zinc-500">
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        <span>100% Secure</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>No Payment Required</span>
                      </div>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section >

    <footer className="bg-black text-white py-16 px-4 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left md:flex md:justify-between md:items-start mb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">
              Reyes Auto Detail Co.
            </h3>
            <p className="text-zinc-400 mb-2 flex items-center gap-2 justify-center md:justify-start">
              <Award className="w-4 h-4 text-amber-400" />
              Fort Lauderdale, FL
            </p>
            <p className="text-zinc-400 mb-4">Owned & operated by Jordan Reyes</p>
            <p className="text-zinc-300 mb-2">
              <span className="font-semibold text-amber-400">Hours:</span> Mon–Sat 8:30am–6:00pm
            </p>
            <p className="text-zinc-400 text-sm">
              Serving Fort Lauderdale, Hollywood & Plantation
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-zinc-400 text-sm mb-6">
              <span className="font-semibold text-white">230+ vehicles detailed</span>
              <br />
              with a 4.9★ rating
            </p>
            <Button
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all font-bold"
            >
              Reserve Your Spot
            </Button>
          </div>
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
    </main >
  );
}
