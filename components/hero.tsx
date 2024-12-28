'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ChevronDown, Building2, Trophy, Users2, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const stats = [
    { icon: Building2, value: '+500', label: 'مشروع منجز' },
    { icon: Trophy, value: '25', label: 'عام خبرة' },
    { icon: Users2, value: '+1000', label: 'عميل سعيد' },
    { icon: Clock, value: '24/7', label: 'دعم فني' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
        >
          <source src="/construction-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div 
          className="inline-block bg-primary/20 text-primary-foreground rounded-full px-6 py-2 mb-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          رواد صناعة المقاولات في المملكة العربية السعودية
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          مؤسسة النهضة للمقاولات العامة المحدودة
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          نجمع بين الخبرة والابتكار لتحويل رؤيتكم إلى واقع ملموس. نقدم حلولاً متكاملة في مجال المقاولات والبناء بمعايير عالمية
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8" asChild>
            <Link href="tel:+966123456789">
              <Phone className="ml-2 h-5 w-5" /> اتصل بنا مجاناً
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-green-600 hover:bg-green-700 text-white text-lg h-14 px-8" 
            asChild
          >
            <Link href="https://wa.me/966123456789" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="ml-2 h-5 w-5" /> تواصل عبر واتساب
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
            >
              <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
