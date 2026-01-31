"use client";

import { useState, useEffect } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Clock, Shield, Sparkles, Award, CheckCircle2, TrendingUp, BadgeCheck } from "lucide-react";

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const services = [
  {
    name: "Express Detail",
    price: "from $129",
    time: "90–120 min",
    description: "Quick refresh for busy schedules",
    tier: "silver",
    booked: "12",
    inclusions: [
      "Exterior hand wash & dry",
      "Wheel & tire cleaning",
      "Interior vacuum",
      "Dashboard & console wipe-down",
      "Window cleaning (inside & out)"
    ]
  },
  {
    name: "Interior Reset",
    price: "from $179",
    time: "2–3 hrs",
    description: "Deep clean where it matters most",
    tier: "silver",
    booked: "18",
    inclusions: [
      "Deep vacuum (seats, floor, trunk)",
      "Shampoo carpets & floor mats",
      "Leather/fabric conditioning",
      "Door jambs & crevice cleaning",
      "Dashboard & console detail",
      "Pet hair removal included"
    ]
  },
  {
    name: "Signature Detail",
    price: "from $249",
    time: "3–4 hrs",
    description: "Complete transformation",
    badge: "Most Popular",
    tier: "gold",
    booked: "34",
    savings: "Best Value",
    inclusions: [
      "Everything in Interior Reset",
      "Paint wash, clay bar & wax",
      "Tire shine & wheel sealant",
      "Engine bay cleaning",
      "Headlight restoration",
      "3-month protection guarantee"
    ]
  }
];

const testimonials = [
  {
    name: "Marcus T.",
    text: "Jordan brought my 2018 Accord back to life. Stains I thought were permanent—gone. Worth every dollar.",
    rating: 5,
    verified: "Google",
    location: "Fort Lauderdale"
  },
  {
    name: "Alicia R.",
    text: "I have two dogs and a toddler. The back seat was a disaster. Now it looks brand new. I'm honestly shocked.",
    rating: 5,
    verified: "Yelp",
    location: "Hollywood"
  },
  {
    name: "David K.",
    text: "Professional, on time, and meticulous. The Signature Detail made my truck look better than when I bought it.",
    rating: 5,
    verified: "Google",
    location: "Plantation"
  }
];

const faqs = [
  {
    question: "How long does a detail take?",
    answer: "Express Details take 90–120 minutes. Interior Resets take 2–3 hours. Our Signature Detail takes 3–4 hours. I'll give you an accurate time estimate when you book."
  },
  {
    question: "Can you really remove tough stains?",
    answer: "Most of them, yes. I use professional-grade extractors and cleaners that aren't available in stores. Some permanent damage (like dye transfer) can't be fully reversed, but I'll be honest with you upfront about what's possible."
  },
  {
    question: "What if it rains after my detail?",
    answer: "If it rains within 24 hours of your exterior detail, I'll rewash and dry your car at no charge. Just text me and we'll schedule it."
  },
  {
    question: "Do you offer mobile service?",
    answer: "Yes. I come to your home or office in Fort Lauderdale, Hollywood, and Plantation. All I need is access to water and electricity."
  },
  {
    question: "What's your cancellation policy?",
    answer: "Cancel or reschedule up to 24 hours before your appointment, no charge. Same-day cancellations are subject to a $50 fee."
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
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", vehicle: "", package: "", datetime: "", notes: "" });
      setIsSubmitted(false);
    }, 5000);
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const headlineWords = "A Clean Car You're Proud to Drive Again".split(" ");

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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Insured & Bonded</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Eco-Friendly Products</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>8+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full border border-amber-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-amber-400 text-sm font-semibold">PREMIUM DETAILING SERVICES</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.4)' }}>
                Choose Your Transformation
              </h2>
              <p className="text-xl text-zinc-400">Transparent pricing. No hidden fees.</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`relative h-full flex flex-col backdrop-blur-xl bg-zinc-900/80 border-zinc-800 overflow-hidden group ${
                    service.tier === 'gold'
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
                        className={`w-full font-bold text-base py-6 transition-all duration-300 ${
                          service.tier === 'gold'
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

      <section className="py-24 px-4 bg-zinc-950 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full border border-amber-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-amber-400 text-sm font-semibold">VERIFIED REVIEWS</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.4)' }}>
                What Customers Say
              </h2>
              <p className="text-xl text-zinc-400">Real feedback from real people in Fort Lauderdale</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1}>
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

                    <div className="space-y-2">
                      <Label htmlFor="vehicle" className="text-white font-semibold">Vehicle (Year, Make, Model)</Label>
                      <Input
                        id="vehicle"
                        required
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        placeholder="2020 Honda Accord"
                        className="bg-zinc-800/80 backdrop-blur-sm border-zinc-700 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="package" className="text-white font-semibold">Choose Your Package</Label>
                      <Select
                        required
                        value={formData.package}
                        onValueChange={(value) => setFormData({ ...formData, package: value })}
                      >
                        <SelectTrigger id="package" className="bg-zinc-800/80 backdrop-blur-sm border-zinc-700 text-white focus:border-amber-500 focus:ring-amber-500 h-12">
                          <SelectValue placeholder="Select a package" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                          <SelectItem value="express" className="focus:bg-zinc-700 focus:text-white">Express Detail - from $129</SelectItem>
                          <SelectItem value="interior" className="focus:bg-zinc-700 focus:text-white">Interior Reset - from $179</SelectItem>
                          <SelectItem value="signature" className="focus:bg-zinc-700 focus:text-white">⭐ Signature Detail - from $249 (Most Popular)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="datetime" className="text-white font-semibold">Preferred Date & Time</Label>
                      <Input
                        id="datetime"
                        type="datetime-local"
                        required
                        value={formData.datetime}
                        onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
                        className="bg-zinc-800/80 backdrop-blur-sm border-zinc-700 text-white focus:border-amber-500 focus:ring-amber-500 [color-scheme:dark] h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-white font-semibold">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Any special requests or concerns about your vehicle?"
                        rows={3}
                        className="bg-zinc-800/80 backdrop-blur-sm border-zinc-700 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500"
                      />
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
      </section>

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
          <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Reyes Auto Detail Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
