'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const menuItems = [
    { href: '/', label: 'الرئيسية', description: 'العودة إلى الصفحة الرئيسية' },
    { href: '#services', label: 'خدماتنا', description: 'استكشف خدماتنا المتميزة' },
    { href: '#projects', label: 'مشاريعنا', description: 'تصفح أحدث مشاريعنا' },
    { href: '#about', label: 'عن الشركة', description: 'تعرف على قصتنا وقيمنا' },
    { href: '#testimonials', label: 'آراء العملاء', description: 'ماذا يقول عملاؤنا عنا' },
    { href: '#blog', label: 'المدونة', description: 'آخر الأخبار والمقالات' },
    { href: '#contact', label: 'اتصل بنا', description: 'نحن هنا لمساعدتك' },
  ]

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 ml-2" />
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 ml-2" />
              <span>نعمل: السبت - الخميس، 9 صباحاً - 6 مساءً</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <a href="tel:+966500000000" className="hover:text-primary-foreground/80">
              +966 50 000 0000
            </a>
            <a href="mailto:info@example.com" className="hover:text-primary-foreground/80">
              info@example.com
            </a>
          </div>
        </div>
      </div>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md' : 'bg-background'}`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 space-x-reverse">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000"
                alt="شعار المؤسسة"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-primary"
                >
                  مؤسسة النهضة للمقاولات
                </motion.div>
                <span className="text-sm text-muted-foreground">نبني المستقبل معاً</span>
              </div>
            </Link>

            <div className="hidden md:flex space-x-6 space-x-reverse">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <Link 
                    href={item.href} 
                    className="text-sm font-medium hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                  <span className="absolute -bottom-8 right-0 min-w-max p-2 bg-primary text-primary-foreground rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="hover-lift hover:bg-primary/10"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="hidden md:flex hover-lift hover:scale-105 transition-transform"
              >
                <Phone className="ml-2 h-4 w-4" /> 
                <span>اتصل الآن</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover-lift"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </nav>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background border-t"
            >
              <div className="container mx-auto px-4 py-3 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div>{item.label}</div>
                    <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Button variant="default" className="w-full">
                    <Phone className="ml-2 h-4 w-4" /> اتصل الآن
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
