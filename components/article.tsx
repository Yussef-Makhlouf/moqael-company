import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: "أحدث تقنيات البناء المستدام في المملكة",
    excerpt: "تعرف على التقنيات الحديثة المستخدمة في البناء الأخضر وكيفية تطبيقها في المشاريع السكنية والتجارية",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    author: "م. أحمد السعيد",
    date: "2024-01-15",
    readTime: "7 دقائق",
    category: "تقنيات البناء",
    tags: ["البناء الأخضر", "الاستدامة", "التقنيات الحديثة"]
  },
  {
    id: 2,
    title: "مستقبل المباني الذكية في السعودية",
    excerpt: "نظرة شاملة على تطور المباني الذكية في المملكة وتأثيرها على قطاع العقارات والمقاولات",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    author: "م. سارة الخالد",
    date: "2024-01-10",
    readTime: "5 دقائق",
    category: "المباني الذكية",
    tags: ["التحول الرقمي", "المباني الذكية", "التقنية"]
  },
  {
    id: 3,
    title: "أفضل ممارسات إدارة مشاريع البناء",
    excerpt: "دليل شامل لأحدث الممارسات في إدارة مشاريع البناء وضمان جودة التنفيذ",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    author: "م. فهد العمري",
    date: "2024-01-05",
    readTime: "8 دقائق",
    category: "إدارة المشاريع",
    tags: ["إدارة المشاريع", "الجودة", "التخطيط"]
  }
]

export default function Articles() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">آخر المقالات والأخبار</h2>
          <p className="text-muted-foreground text-lg">
            اكتشف أحدث التطورات والمعلومات في عالم المقاولات والبناء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString('ar-SA')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{article.author}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button variant="link" className="group/btn p-0">
                  اقرأ المزيد
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            عرض جميع المقالات
          </Button>
        </div>
      </div>
    </section>
  )
}
