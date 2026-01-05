import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogData = {
  '360k-success': {
    titleAr: 'كواليس تحقيق 360 ألف ريال في 3 أشهر',
    titleEn: 'Behind the Scenes: How We Achieved 360K SAR in 3 Months',
    date: '2024-01-15',
    readTime: '8',
  },
  'ecommerce-guide': {
    titleAr: 'كيفية إنشاء متجر إلكتروني لزيادة مبيعاتك',
    titleEn: 'How to Create an E-commerce Store to Increase Your Sales',
    date: '2024-01-10',
    readTime: '12',
  },
};

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const currentBlog = slug ? blogData[slug as keyof typeof blogData] : null;

  if (!currentBlog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {isRTL ? 'المقال غير موجود' : 'Article Not Found'}
            </h1>
            <Link to="/" className="text-primary hover:underline">
              {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
          </button>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {isRTL ? currentBlog.titleAr : currentBlog.titleEn}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{currentBlog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{currentBlog.readTime} {isRTL ? 'دقائق قراءة' : 'min read'}</span>
                </div>
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>{isRTL ? 'مشاركة' : 'Share'}</span>
                </button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden border border-border">
              <img
                src="/placeholder.svg"
                alt={isRTL ? currentBlog.titleAr : currentBlog.titleEn}
                loading="lazy"
                decoding="async"
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-invert max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {isRTL
                    ? 'سيتم إضافة محتوى المقال قريباً. هذه الصفحة جاهزة لاستقبال المحتوى الكامل.'
                    : 'Article content will be added soon. This page is ready to receive the full content.'}
                </p>
                <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {isRTL ? 'ملاحظة' : 'Note'}
                  </h3>
                  <p className="text-muted-foreground">
                    {isRTL
                      ? 'يمكنك التواصل معنا للحصول على المزيد من المعلومات حول هذا الموضوع.'
                      : 'You can contact us for more information about this topic.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <a
              href="https://wa.me/966539959221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-aura rounded-full text-primary-foreground"
            >
              {isRTL ? 'تواصل معنا للمزيد' : 'Contact Us for More'}
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
