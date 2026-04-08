import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

interface SlideImage {
  src: string;
  alt: string;
}

interface Props {
  images: SlideImage[];
}

export default function HeroSlider({ images }: Props) {
  return (
    <div className="w-full max-w-[34rem]">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={650}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet hero-slider-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        className="hero-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {/* Decorator variant — replicates Image.astro variant="decorator" */}
            <div className="hero-decorator group relative w-full p-4">
              <div className="hero-bg-outer pointer-events-none absolute inset-0 rounded-2xl bg-[color:var(--color-brand-primary)]/20" />
              <div className="hero-bg-inner pointer-events-none absolute inset-4 rounded-2xl bg-[color:var(--color-brand-secondary)]/10" />
              <div className="relative block overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-image)]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="hero-img block h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-pagination mt-5 flex justify-center gap-2" />
    </div>
  );
}