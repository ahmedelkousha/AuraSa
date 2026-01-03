import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface VideoItem {
  id: number;
  thumbnail: string;
  title: string;
  youtubeUrl: string;
}

interface VideoCarouselProps {
  items?: VideoItem[];
  title: string;
}

const VideoCarousel = ({ items, title }: VideoCarouselProps) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    setSwiperKey(prev => prev + 1);
  }, [i18n.language]);

  // Default placeholder items
  const defaultItems: VideoItem[] = items || [
    { id: 1, thumbnail: '/placeholder.svg', title: isRTL ? 'فيديو 1' : 'Video 1', youtubeUrl: 'https://youtube.com/watch?v=placeholder1' },
    { id: 2, thumbnail: '/placeholder.svg', title: isRTL ? 'فيديو 2' : 'Video 2', youtubeUrl: 'https://youtube.com/watch?v=placeholder2' },
    { id: 3, thumbnail: '/placeholder.svg', title: isRTL ? 'فيديو 3' : 'Video 3', youtubeUrl: 'https://youtube.com/watch?v=placeholder3' },
    { id: 4, thumbnail: '/placeholder.svg', title: isRTL ? 'فيديو 4' : 'Video 4', youtubeUrl: 'https://youtube.com/watch?v=placeholder4' },
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
        className="video-swiper !pb-14"
      >
        {defaultItems.map((item) => (
          <SwiperSlide key={item.id}>
            <a
              href={item.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground fill-current" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
