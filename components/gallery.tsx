'use client';
import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { ZoomIn, X } from 'lucide-react'

const galleryItems = [
    {
      id: 1,
      title: "مشروع برج السكني الفاخر",
      description: "تصميم وتنفيذ برج سكني مكون من 30 طابق بأحدث المواصفات العالمية",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600",
      category: "سكني"
    },
    {
      id: 2,
      title: "مجمع تجاري الرياض",
      description: "تطوير مجمع تجاري على مساحة 50,000 متر مربع",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600",
      category: "تجاري"
    },
    {
      id: 3,
      title: "مستشفى المستقبل",
      description: "بناء وتجهيز مستشفى حديث بسعة 500 سرير",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&h=600",
      category: "صحي"
    },
    {
      id: 4,
      title: "مدرسة الرياض",
      description: "تصميم وتنفيذ مدرسة على مساحة 10,000 متر مربع",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600",
      category: "تعليمي"
    },
    {
      id: 5,
      title: "مطار المملكة العربية السعودية",
      description: "تطوير وتجهيز مطار جديد بسعة 10 ملايين مسافر سنوياً",
      image: "https://images.unsplash.com/photo-1588412079929-790b9f593d8e?w=800&h=600",
      category: "مطار"
    },
    {
      id: 6,
      title: "مركز تسوق المدينة",
      description: "تطوير وتجهيز مركز تسوق على مساحة 20,000 متر مربع",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&h=600",
      category: "تجاري"
    }
  ]
  
const categories = ["الكل", "سكني", "تجاري", "صحي", "تعليمي", "مطار", "مسجد"]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState("الكل")

  const filteredItems = galleryItems.filter(item => 
    activeCategory === "الكل" ? true : item.category === activeCategory
  )

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">معرض أعمالنا</h2>
          <p className="text-muted-foreground text-lg">اكتشف مشاريعنا المميزة وإنجازاتنا في مجال المقاولات</p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item as any)}
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-10 h-10" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                <span className="inline-block mt-4 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 p-2 rounded-full bg-background/80 hover:bg-background"
            >
              <X className="w-5 h-5 p-3.5 rounded-full bg-background hover:bg-background/80" />
            </button>
            <div className="relative aspect-video">
              {selectedImage && (
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover rounded-lg"
                />
              )}
            </div>
            {selectedImage && (
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
