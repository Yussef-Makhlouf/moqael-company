'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'أعمال الأسفلت',
    description: 'نقدم خدمات عالية الجودة في مجال الأسفلت باستخدام أحدث التقنيات والمعدات.',
    image: 'https://images.unsplash.com/photo-1573075175660-08fd45ac27a1?w=800&auto=format&fit=crop&q=60',
    features: ['سفلتة الطرق', 'صيانة الأسفلت', 'تخطيط الطرق'],
    rating: 4.9,
  },
  {
    title: 'العوازل',
    description: 'نوفر جميع أنواع العوازل لحماية المباني من الرطوبة والحرارة.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=60',
    features: ['عزل مائي', 'عزل حراري', 'عزل صوتي'],
    rating: 4.8,
  },
  {
    title: 'المباني الصناعية',
    description: 'نقدم خدمات صناعية متكاملة في مجال المباني الصناعية باستخدام مواد عالية الجودة.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop&q=60',
    features: ['بناء المباني الصناعية', 'صيانة المباني الصناعية', 'تصميم المباني الصناعية'],
    rating: 4.7,
  },
  {
    title: 'المباني السكنية',
    description: 'نقدم خدمات مباني سكنية عالية الجودة لتلبية احتياجات العملاء.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60',
    features: ['بناء المباني السكنية', 'صيانة المباني السكنية', 'تصميم المباني السكنية'],
    rating: 4.6,
  },
  {
    title: 'المباني التجارية',
    description: 'نقدم خدمات مباني تجارية عالية الجودة لتلبية احتياجات العملاء.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60',
    features: ['بناء المباني التجارية', 'صيانة المباني التجارية', 'تصميم المباني التجارية'],
    rating: 4.5,
  },
  {
    title: 'المباني المدرسية',
    description: 'نقدم خدمات مباني مدرسية عالية الجودة لتلبية احتياجات العملاء.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=60',
    features: ['بناء المباني المدرسية', 'صيانة المباني المدرسية', 'تصميم المباني المدرسية'],
    rating: 4.4,
  },
  {
    title: 'المباني الطبية',
    description: 'نقدم خدمات مباني طبية عالية الجودة لتلبية احتياجات العملاء.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=60',
    features: ['بناء المباني الطبية', 'صيانة المباني الطبية', 'تصميم المباني الطبية'],
    rating: 4.3,
  },
]


export default function ServiceCards() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-100 via-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا المتميزة</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات المقاولات بأعلى معايير الجودة وأحدث التقنيات.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl bg-white transition-transform transform hover:-translate-y-2"
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 bg-gray-800 text-white text-sm px-3 py-1 rounded-full flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  {service.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
