// Gallery.jsx
import React from 'react';

export default function Gallery() {
  const carImages = [
    { avif: '/gallery/mclaren-mcl60.avif', webp: '/gallery/mclaren-mcl60.webp', alt: 'McLaren MCL60' },
    { avif: '/gallery/mclaren-mp44.avif', webp: '/gallery/mclaren-mp44.webp', alt: 'McLaren MP44' },
    { avif: '/gallery/mclaren-mp413.avif', webp: '/gallery/mclaren-mp413.webp', alt: 'McLaren MP413' },
    { avif: '/gallery/mclaren-mp423.avif', webp: '/gallery/mclaren-mp423.webp', alt: 'McLaren MP423' },
    { avif: '/gallery/mclaren-mp430.avif', webp: '/gallery/mclaren-mp430.webp', alt: 'McLaren MP430' },
  ];

  return (
    <div className="gallery-containerAD">
      <h1 className='galeriah1'>Galeria de fotos</h1>
      <section className="gallery-sectionAD">
        {carImages.map((img, i) => (
          <picture key={i} className="gallery-card">
            <source srcSet={img.avif} type="image/avif" />
            <source srcSet={img.webp} type="image/webp" />
            <img src={img.webp} alt={img.alt} loading="lazy" />
          </picture>
        ))}
      </section>

      <section className='audioSection'>
        <h1 className='galeriah1'>Audio</h1>
        <audio controls>
          <source src="/gallery/audio.mp3" type="audio/mpeg" />
          <source src="/gallery/audio.ogg" type="audio/ogg" />
          El teu navegador no suporta l'àudio.
        </audio>
      </section>

      <section className="video-section">
        <h2>Vídeo destacat del McLaren F1</h2>
        <video controls preload="metadata" width="100%" style={{ borderRadius: '1rem' }}>
          <source src="/gallery/video.mp4" type="video/mp4" />
          <source src="/gallery/video .webm" type="video/webm" />
          El teu navegador no suporta la reproducció de vídeos.
        </video>
      </section>
    </div>
  );
}
