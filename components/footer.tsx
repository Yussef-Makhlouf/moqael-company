'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">عن الشركة</h3>
            <p className="text-sm">
              مؤسسة النهضة للمقاولات العامة المحدودة هي شركة رائدة في مجال المقاولات والبناء في الشرق الأوسط، نقدم خدمات عالية الجودة ونلتزم بأعلى معايير الصناعة.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">الرئيسية</Link></li>
              <li><Link href="#services" className="hover:underline">خدماتنا</Link></li>
              <li><Link href="#projects" className="hover:underline">مشاريعنا</Link></li>
              <li><Link href="#about" className="hover:underline">عن الشركة</Link></li>
              <li><Link href="#contact" className="hover:underline">اتصل بنا</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="ml-2 h-4 w-4" />
                <span>+966 12 345 6789</span>
              </li>
              <li className="flex items-center">
                <Mail className="ml-2 h-4 w-4" />
                <span>info@alnahda-construction.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="ml-2 h-4 w-4" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm">
            &copy; {currentYear} مؤسسة النهضة للمقاولات العامة المحدودة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

