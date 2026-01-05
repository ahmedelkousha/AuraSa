import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Import partner logos
import tayaranLogo from '@/assets/partners/tayaran.webp';
import barotoysLogo from '@/assets/partners/barotoys.webp';
import jaziraLogo from '@/assets/partners/jazira.webp';
import greenLogo from '@/assets/partners/green.webp';
import bcacquireLogo from '@/assets/partners/bcacquire.webp';
import amkitLogo from '@/assets/partners/amkit.webp';
import masroorLogo from '@/assets/partners/masroor.webp';
import tafaseelLogo from '@/assets/partners/tafaseel.webp';
import nassayemLogo from '@/assets/partners/nassayem.webp';
import angoliLogo from '@/assets/partners/angoli.webp';
import shaheen from '@/assets/partners/shaheen.webp';
import snow from '@/assets/partners/snow.webp';
import oree from '@/assets/partners/oree.webp';
import dirhamee from '@/assets/partners/dirahme.webp';
import trans from '@/assets/partners/trans.webp';

const PartnersSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const partners = [
    { name: 'Tayaran', logo: tayaranLogo },
    { name: 'Barotoys', logo: barotoysLogo },
    { name: 'Jazira', logo: jaziraLogo },
    { name: 'Green Store', logo: greenLogo },
    { name: 'BC Acquire', logo: bcacquireLogo },
    { name: 'Amkit', logo: amkitLogo },
    { name: 'Masroor', logo: masroorLogo },
    { name: 'Tafaseel', logo: tafaseelLogo },
    { name: 'Nassayem Salalah', logo: nassayemLogo },
    { name: 'Angoli Shop', logo: angoliLogo },
    { name: 'Shaheen', logo: shaheen },
    { name: 'Oree', logo: oree },
    { name: 'Trans', logo: trans },
    { name: 'Dirhamee', logo: dirhamee },
    { name: 'Snow', logo: snow },
  ];

  return (
    <section className="mt-16 bg-black border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center text-foreground"
        >
          {t('partners.title')}
        </motion.h2>
      </div>

      <div className="px-4 bg-white">
        <Swiper
          key={isRTL ? 'rtl' : 'ltr'}
          dir={isRTL ? 'rtl' : 'ltr'}
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={true}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="partners-swiper"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-32 p-4 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain scale-[2] transform"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersSection;
