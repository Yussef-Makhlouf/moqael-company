import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bookmark, Share2, MessageCircle, Eye, Calendar } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "مستقبل البناء المستدام في المملكة العربية السعودية 2024",
    excerpt: "استكشف معنا أحدث التقنيات والابتكارات في مجال البناء المستدام وكيف تساهم في تحقيق رؤية المملكة 2030. نناقش التقنيات الخضراء، أنظمة توفير الطاقة، ومواد البناء الصديقة للبيئة التي تشكل مستقبل قطاع البناء في المملكة.",
    image: "https://images.unsplash.com/photo-1531972111231-7482a960e109",
    author: {
      name: "م. عبدالله الفهد",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      role: "مستشار البناء المستدام"
    },
    stats: {
      reads: "1.2k",
      comments: 28,
      shares: 15
    },
    date: "15 يناير 2024",
    readTime: "10 دقائق",
    featured: true,
    tags: ["البناء المستدام", "التقنيات الخضراء", "رؤية 2030"]
  },
  {
    id: 2,
    title: "الاتجاهات المعمارية الحديثة في تصميم المباني التجارية 2024",
    excerpt: "تحليل شامل لأحدث الاتجاهات في تصميم المباني التجارية، من المساحات المرنة إلى التصاميم الذكية. نستعرض كيفية دمج التكنولوجيا مع التصميم المعماري لخلق مساحات عمل عصرية تلبي متطلبات المستقبل.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    author: {
      name: "م. نورة السالم",
      avatar:  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      role: "مهندسة معمارية رئيسية"
    },
    stats: {
      reads: "856",
      comments: 19,
      shares: 12
    },
    date: "12 يناير 2024",
    readTime: "8 دقائق",
    tags: ["التصميم المعماري", "المباني التجارية", "التكنولوجيا"]
  },
  {
    id: 3,
    title: "ثورة التقنيات الذكية في إدارة المشاريع الإنشائية",
    excerpt: "نظرة عميقة على كيفية تحول التقنيات الذكية لصناعة البناء والتشييد. من الذكاء الاصطناعي إلى إنترنت الأشياء، نكشف كيف تساهم هذه التقنيات في تحسين الكفاءة وتقليل التكاليف وتعزيز السلامة في المواقع الإنشائية.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    author: {
      name: "م. فيصل العمري",
      avatar:  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      role: "مدير التقنيات والابتكار"
    },
    stats: {
      reads: "945",
      comments: 23,
      shares: 18
    },
    date: "10 يناير 2024",
    readTime: "12 دقائق",
    tags: ["التقنيات الذكية", "إدارة المشاريع", "الابتكار"]
  }
]
export default function Blog() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">مدونة المقاولات والبناء</h2>
            <p className="text-muted-foreground text-lg">
              استكشف أحدث التطورات والرؤى في عالم البناء والمقاولات مع خبراء الصناعة
            </p>
          </div>
          <Button variant="outline" size="lg" className="hidden md:flex">
            جميع المقالات <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Featured Post - Full Width */}
          <Card className="col-span-12 group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3]">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                  مميز
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={blogPosts[0].author.avatar}
                          alt={blogPosts[0].author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="font-medium block">{blogPosts[0].author.name}</span>
                        <span className="text-sm text-muted-foreground">{blogPosts[0].author.role}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h3>
                  <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {blogPosts[0].stats.reads}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {blogPosts[0].stats.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      {blogPosts[0].stats.shares}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Secondary Posts - Side by Side */}
          {blogPosts.slice(1).map((post) => (
            <Card 
              key={post.id} 
              className="col-span-12 md:col-span-6 group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-medium block">{post.author.name}</span>
                      <span className="text-sm text-muted-foreground">{post.author.role}</span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.stats.reads}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.stats.comments}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            عرض المزيد من المقالات <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
