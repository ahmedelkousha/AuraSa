import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const portfolioItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: '/placeholder.svg',
    title: isRTL ? `مشروع ${i + 1}` : `Project ${i + 1}`,
    category: isRTL ? 'تصميم' : 'Design',
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('footer.portfolio')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {isRTL
                ? 'استعرض مجموعة من أفضل أعمالنا التي نفخر بها'
                : 'Browse our collection of finest work that we are proud of'}
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-primary mb-2">{item.category}</span>
                  <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
