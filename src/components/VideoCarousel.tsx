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
  title: string;
  youtubeUrl: string;
}

interface VideoCarouselProps {
  items?: VideoItem[];
  title: string;
}

/**
 * Extracts YouTube video ID from:
 * - watch?v=
 * - youtu.be/
 * - shorts/
 */
const getVideoId = (url: string) => {
  const patterns = [
    /v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /shorts\/([^?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return '';
};

/**
 * YouTube thumbnail fallbacks (best → worst)
 */
const getThumbnailUrls = (videoId: string) => [
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
];

const VideoCarousel = ({ items, title }: VideoCarouselProps) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    setSwiperKey(prev => prev + 1);
  }, [i18n.language]);

  const defaultItems: VideoItem[] = items || [
    {
      id: 1,
      title: isRTL ? 'فيديو 1' : 'Video 1',
      youtubeUrl: 'https://www.youtube.com/watch?v=hfiQFfXaL3Y',
    },
    {
      id: 2,
      title: isRTL ? 'فيديو 2' : 'Video 2',
      youtubeUrl: 'https://www.youtube.com/shorts/lBrSnKJIku0',
    },
    {
      id: 3,
      title: isRTL ? 'فيديو 3' : 'Video 3',
      youtubeUrl: 'https://www.youtube.com/shorts/gBZvx_Fxgdc',
    },
    {
      id: 4,
      title: isRTL ? 'فيديو 4' : 'Video 4',
      youtubeUrl: 'https://www.youtube.com/shorts/b_bhQjbaXPY',
    },
    {
      id: 5,
      title: isRTL ? 'فيديو 5' : 'Video 5',
      youtubeUrl:
        'https://www.youtube.com/watch?v=8IT4nCYr5yE&list=PLoGt7ow7bdpODQpgwIQ-Y7H90OoRiTE8P&index=2',
    },
    {
      id: 6,
      title: isRTL ? 'فيديو 6' : 'Video 6',
      youtubeUrl: 'https://www.youtube.com/shorts/PxRnv7Shk4s',
    },
    {
      id: 7,
      title: isRTL ? 'فيديو 7' : 'Video 7',
      youtubeUrl: 'https://www.youtube.com/shorts/cAyHF-jck3M',
    },
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
        {defaultItems.map(item => {
          const videoId = getVideoId(item.youtubeUrl);
          const thumbnailUrls = getThumbnailUrls(videoId);

          return (
            <SwiperSlide key={item.id}>
              <a
                href={item.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-border bg-card overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={thumbnailUrls[0]}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      const currentIndex = thumbnailUrls.indexOf(img.src);

                      if (currentIndex < thumbnailUrls.length - 1) {
                        img.src = thumbnailUrls[currentIndex + 1];
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                      <Play className="w-8 h-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                </div>

                {/* <div className="p-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                </div> */}
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
