import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
}

interface PortfolioCarouselProps {
  items?: PortfolioItem[];
  title: string;
}

const PortfolioCarousel = ({ items, title }: PortfolioCarouselProps) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    setSwiperKey(prev => prev + 1);
  }, [i18n.language]);

  // Default placeholder items
  const defaultItems: PortfolioItem[] = items || [
    { id: 1, image: '/placeholder.svg', title: isRTL ? 'مشروع 1' : 'Project 1' },
    { id: 2, image: '/placeholder.svg', title: isRTL ? 'مشروع 2' : 'Project 2' },
    { id: 3, image: '/placeholder.svg', title: isRTL ? 'مشروع 3' : 'Project 3' },
    { id: 4, image: '/placeholder.svg', title: isRTL ? 'مشروع 4' : 'Project 4' },
    { id: 5, image: '/placeholder.svg', title: isRTL ? 'مشروع 5' : 'Project 5' },
    { id: 6, image: '/placeholder.svg', title: isRTL ? 'مشروع 6' : 'Project 6' },
  ];

  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-foreground mb-8">{title}</h3>
      <Swiper
        key={swiperKey}
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        dir={isRTL ? 'rtl' : 'ltr'}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="portfolio-swiper !pb-14"
      >
        {defaultItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioCarousel;
