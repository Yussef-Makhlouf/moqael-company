'use client'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowRight} from 'lucide-react'

const projects = [
  {
    title: 'مشروع الطريق السريع',
    description: 'تنفيذ طريق سريع بطول 50 كم يربط بين المدن الرئيسية',
    image:  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    location: 'الرياض - جدة',
    date: '2023',
    stats: {
      area: '50 كم',
      duration: '18 شهر',
      value: '100 مليون ريال'
    },
    features: [
      'تصميم هندسي متطور',
      'مواد عالية الجودة',
      'نظام إضاءة ذكي'
    ]
  },
  {
    title: 'مجمع سكني الواحة',
    description: 'بناء مجمع سكني فاخر يضم 200 وحدة مع مرافق متكاملة',
    image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228",
    location: 'الدمام',
    date: '2023',
    stats: {
      area: '50,000 متر مربع',
      units: '200 وحدة',
      value: '150 مليون ريال'
    },
    features: [
      'تصاميم عصرية',
      'مرافق ترفيهية',
      'مساحات خضراء'
    ]
  },
  {
    title: 'المركز التجاري الذكي',
    description: 'إنشاء مركز تجاري حديث على مساحة 10,000 متر مربع',
    image: "https://images.unsplash.com/photo-1537958190129-ad7bf35c1dc9"
,
    location: 'جدة',
    date: '2022',
    stats: {
      area: '10,000 متر مربع',
      shops: '100 محل',
      parking: '500 موقف'
    },
    features: [
      'تقنيات ذكية',
      'توفير الطاقة',
      'تصميم مستدام'
    ]
  },

]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">مشاريعنا المميزة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نفخر بتقديم مجموعة من المشاريع الرائدة التي تعكس التزامنا بالجودة والابتكار في مجال المقاولات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400} 
                    height={300} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center text-white text-sm">
                      <MapPin className="w-4 h-4 ml-1" />
                      {project.location}
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4 ml-1" />
                      {project.date}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="bg-muted rounded-lg p-2">
                        <div className="font-bold">{value}</div>
                        <div className="text-sm text-muted-foreground">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 ml-2 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
