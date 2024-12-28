import { Shield, Clock, ThumbsUp, Users, Award,  HeartHandshake, Banknote } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reasons = [
  {
    title: 'جودة عالية',
    description: 'نلتزم بتقديم أعلى معايير الجودة في جميع مشاريعنا، مع ضمان استخدام أفضل المواد وأحدث التقنيات في البناء',
    icon: Shield,
    highlight: 'ضمان الجودة لمدة 10 سنوات'
  },
  {
    title: 'التزام بالمواعيد',
    description: 'نحرص على إنجاز المشاريع في الوقت المحدد مع خطة زمنية واضحة وجدول متابعة دقيق لكل مرحلة',
    icon: Clock,
    highlight: 'التزام تعاقدي بالمواعيد'
  },
  {
    title: 'خبرة واسعة',
    description: 'نمتلك خبرة تمتد لأكثر من 15 عاماً في مجال المقاولات والبناء، مع سجل حافل من المشاريع الناجحة',
    icon: Award,
    highlight: '+200 مشروع منجز'
  },
  {
    title: 'فريق متخصص',
    description: 'لدينا فريق من المهندسين والفنيين ذوي الكفاءة العالية، حاصلين على شهادات معتمدة في مجالاتهم',
    icon: Users,
    highlight: '+50 مهندس وفني متخصص'
  },
  {
    title: 'معدات حديثة',
    description: 'نستخدم أحدث المعدات والتقنيات في مجال البناء والتشييد لضمان أفضل النتائج',
    icon: ThumbsUp,
    highlight: 'تقنيات عصرية متطورة'
  },
  {
    title: 'خدمة عملاء متميزة',
    description: 'نقدم خدمة عملاء على مدار الساعة مع فريق متخصص للرد على استفساراتكم وتلبية احتياجاتكم',
    icon: HeartHandshake,
    highlight: 'دعم 24/7'
  },
  {
    title: 'أسعار تنافسية',
    description: 'نقدم أسعاراً تنافسية مع خيارات دفع مرنة تناسب مختلف الميزانيات',
    icon: Banknote,
    highlight: 'خطط دفع مرنة'
  },
  {
    title: 'ضمان الجودة',
    description: 'نقدم ضمان شامل على جميع أعمالنا مع خدمة ما بعد التنفيذ لراحة بالكم',
    icon: ThumbsUp,
    highlight: 'ضمان شامل'
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">لماذا تختارنا؟</h2>
          <p className="text-muted-foreground text-lg">
            نحن نفخر بتقديم خدمات عالية الجودة مع التزامنا التام برضا عملائنا
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <reason.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="mb-2">{reason.title}</CardTitle>
                <span className="text-sm font-medium text-primary">{reason.highlight}</span>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
