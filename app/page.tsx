// import Articles from "@/components/article"
import Blog from "@/components/blog"
import Gallery from "@/components/gallery"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import ServiceCards from "@/components/service-cards"
import SuccessPartners from "@/components/SuccessPartners"
import { Button } from "@/components/ui/button"
import WhyChooseUs from "@/components/why-choose-us"
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <section id="about" className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">عن شركة النهضة للمقاولات</h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                منذ تأسيسها في عام 2005، أصبحت مؤسسة النهضة للمقاولات العامة المحدودة علامة بارزة في قطاع البناء والتشييد بالشرق الأوسط. نفخر بإنجاز أكثر من 200 مشروع متميز في مختلف القطاعات.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">رؤيتنا</h4>
                  <p>أن نكون الخيار الأول في مجال المقاولات والبناء بالمنطقة</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">رسالتنا</h4>
                  <p>تقديم خدمات بناء متكاملة بأعلى معايير الجودة والاحترافية</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="group">
                  تعرف علينا أكثر
                  <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">تحميل البروفايل</Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <Image 
                  src='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000'
                  alt="صورة عن الشركة" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-2xl"
                  quality={100}
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">سنوات من الخبرة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceCards />
      <WhyChooseUs />
      <Projects />
      <Gallery />
      <Blog />
      {/* <Articles /> */}
      <SuccessPartners />

      <section id="contact" className="relative py-24 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-xl opacity-90">
              نحن هنا لمساعدتك في تحقيق رؤيتك. تواصل معنا للحصول على استشارة مجانية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Phone, title: 'اتصل بنا', content: '+966 123 456 789' },
              { icon: Mail, title: 'راسلنا', content: 'info@alnahda.com' },
              { icon: MapPin, title: 'موقعنا', content: 'الرياض، المملكة العربية السعودية' },
              { icon: Clock, title: 'ساعات العمل', content: 'السبت - الخميس: 9 ص - 6 م' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-primary-foreground/10">
                <item.icon className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="opacity-90">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              احصل على عرض سعر مجاني
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
