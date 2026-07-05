import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ServiceCard.css';

function ServiceCard({ title, description, images }) {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (paused || open || isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, open, images.length, isMobile]);

  return (
    <>
      <motion.div
        className="service-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Imagen full con swiper */}
        <div className="image-container" onClick={() => setOpen(true)}>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={title} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Label superpuesto sobre la imagen */}
          <div className="service-label">
            <span className="service-label-title">{title}</span>
          </div>
        </div>
      </motion.div>

      {/* Modal sin cambios */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setOpen(false)}>
                ✕
              </button>
              <Swiper
                modules={[Navigation, Zoom]}
                navigation
                zoom={{ maxRatio: 3 }}
                initialSlide={current}
                spaceBetween={10}
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="swiper-zoom-container">
                      <img src={img} alt={title} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ServiceCard;
