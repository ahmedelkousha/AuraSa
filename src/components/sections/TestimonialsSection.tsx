import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [swiperKey, setSwiperKey] = useState(0);

  // Re-render Swiper when language changes to fix RTL issues
  useEffect(() => {
    setSwiperKey((prev) => prev + 1);
  }, [i18n.language]);

  const testimonials = [
    {
      name: "أبو سعود",
      role: "صاحب متجر تمور و عسل",
      message:
        "شهادة حق فريق اورا نقلوا متجري لمرحلة ثانية قبل كنت أخسر في الإعلانات لكن بعد إدارتهم للحملات واستهدافهم الدقيق صار ال ROAS عندي عالي والمبيعات في تصاعد",
      rating: 5,
    },
    {
      name: "المهندسة نورة العتيبي",
      role: "صاحبة استوديو تصميم داخلي",
      message:
        "اللمسة الإبداعية عندهم تفرق طلبت منهم تحسين هوية حساباتنا وسووا لنا 20 تصميم جرافيك خيالية الحساب صار واجهة تفتح النفس و تعكس احترافيتنا قدام العملاء والمنافسين",
      rating: 5,
    },
    {
      name: "ياسر الشمري",
      role: "مدير تسويق شركة دهانات",
      message:
        "الفيديوهات الـ 6 اللي سووها لنا ضربت تريند في التيك توك وجابت لنا عملاء جدد ما كنا نتوقعهم المونتاج عصري والمؤثرات تشد المشاهد من أول ثانية",
      rating: 5,
    },
    {
      name: "نورة القحطاني",
      role: "مؤسسة براند عطور",
      message:
        "كنت أدور على وكالة تطل من المنافسة التقليدية اورا أبهروني بمرونتهم خاصة في المواسم جربتهم باليوم الوطني حققنا نجاح قوي",
      rating: 5,
    },
    {
      name: "سارة الماجد",
      role: "مؤسسة براند عبايات",
      message:
        "اشتغلنا مع شركات كثير بس ميزة اورا هي المرونة خطة المحتوى عندهم تتفاعل مع التريندات بالسعودية أول بأول شكرا لكم",
      rating: 5,
    },
    {
      name: "ريم الشمري",
      role: "صاحبة بوتيك",
      message: "إدارة حساباتي أصبحت أسهل وأكثر فعالية بفضل أورا",
      rating: 4,
    },
    {
      name: "سلطان بن فهد",
      role: "رائد أعمال في قطاع التجزئة",
      message:
        "أكثر شيء ريحني مع أورا هو الوضوح أتابع كل النتائج والتقارير عبر باركود نوشن وأنا بمكاني صراحة شغلهم مرتب",
      rating: 5,
    },
    {
      name: "هند السبيعي",
      role: "مصممة أزياء",
      message: "الموشن جرافيك اللي صمموه لي كان مذهل! أوصي فيهم",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t("testimonials.title")}
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <Swiper
          key={swiperKey}
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500, disableOnInteraction: true }}
          dir={isRTL ? "rtl" : "ltr"}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper !pb-14">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full">
                <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    {testimonial.message}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
