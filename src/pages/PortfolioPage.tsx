import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoCarousel from '@/components/VideoCarousel';

// Import all gallery images
import smm1 from '@/assets/smm-service/smm1.webp';
import smm2 from '@/assets/smm-service/smm2.webp';
import smm3 from '@/assets/smm-service/smm3.webp';
import smm4 from '@/assets/smm-service/smm4.webp';
import smm5 from '@/assets/smm-service/smm5.webp';
import ads1 from '@/assets/ads-service/ads1.webp';
import ads2 from '@/assets/ads-service/ads2.webp';
import ads3 from '@/assets/ads-service/ads3.webp';
import ads4 from '@/assets/ads-service/ads4.webp';

// Gallery data
const socialMediaGallery = [
  { id: 1, image: smm1, title: 'Social Media Campaign 1' },
  { id: 2, image: smm2, title: 'Social Media Campaign 2' },
  { id: 3, image: smm3, title: 'Social Media Campaign 3' },
  { id: 4, image: smm4, title: 'Social Media Campaign 4' },
  { id: 5, image: smm5, title: 'Social Media Campaign 5' },
];

const adsGallery = [
  { id: 1, image: ads1, title: 'Ads Campaign 1' },
  { id: 2, image: ads2, title: 'Ads Campaign 2' },
  { id: 3, image: ads3, title: 'Ads Campaign 3' },
  { id: 4, image: ads4, title: 'Ads Campaign 4' },
];

const ecommerceGallery = [
  { id: 1, image: ads1, title: 'E-commerce Project 1' },
  { id: 2, image: ads2, title: 'E-commerce Project 2' },
  { id: 3, image: ads3, title: 'E-commerce Project 3' },
  { id: 4, image: ads4, title: 'E-commerce Project 4' },
];

const PortfolioPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const navigate = useNavigate()

  const openLightbox = (image: string) => {
    setLightboxImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  const renderImageCarousel = (gallery: typeof socialMediaGallery, title: string) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        {title}
      </h2>
      <Swiper
        key={`${i18n.language}-${title}`}
        dir={isRTL ? 'rtl' : 'ltr'}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
        className="portfolio-swiper !pb-12"
      >
        {gallery.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border"
              onClick={() => openLightbox(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );

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
            <span>{isRTL ? 'العودة للصفحة السابقة' : 'Back to Previous Page'}</span>
          </button>

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
                ? 'مجموعة من أفضل أعمالنا التي نفخر بها'
                : 'Browse our collection of finest work that we are proud of'}
            </p>
          </motion.div>

          {/* Social Media Portfolio */}
          {renderImageCarousel(
            socialMediaGallery,
            isRTL ? 'إدارة وسائل التواصل الاجتماعي' : 'Social Media Management'
          )}

          {/* Paid Ads Portfolio */}
          {renderImageCarousel(
            adsGallery,
            isRTL ? 'الحملات الإعلانية المدفوعة' : 'Paid Advertising Campaigns'
          )}

          {/* E-commerce Portfolio */}
          {renderImageCarousel(
            ecommerceGallery,
            isRTL ? 'المواقع والتجارة الإليكترونية' : 'Web & E-commerce Solutions'
          )}

          {/* Motion Graphics Video Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {isRTL ? 'مونتاج الفيديو والموشن جرافيك' : 'Video Editing & Motion Graphics'}
            </h2>
            <VideoCarousel title="" />
          </motion.div>
        </div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="bg-black rounded-2xl p-8 lg:p-12"
        >
          <div className="p-6 bg-black rounded-xl border border-primary text-center">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
              {t('successStory.wantResults')}
            </h3>
            <p className="text-muted-foreground mb-6">
              حوّل رؤيتك إلى واقع بصري متكامل .. ابدأ رحلة التميز معنا اليوم واصنع لعلامتك التجارية الحضور الذي تستحقه!
            </p>
            <a
              href="https://wa.me/966539959221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-aura rounded-full text-primary-foreground"
            >
              {t('successStory.bookConsultation')}
            </a>
          </div>
        </motion.div>
      </main>
      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Fullscreen view"
              loading="lazy"
              decoding="async"
              className="max-w-full max-h-full object-contain"
              draggable={false}
            />
          </motion.div>
        </motion.div>

      )}

    </div>
  );
};

export default PortfolioPage;