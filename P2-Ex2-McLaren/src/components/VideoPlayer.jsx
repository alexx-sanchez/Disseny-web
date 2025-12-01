import React from 'react';

export default function VideoPlayer() {
  return (
    <section className="video-section">
      <h2>Video destacat</h2>
      <video controls preload="metadata" loading="lazy" width="100%" style={{ maxHeight: '500px' }}>
        <source src="/video/sample.mp4" type="video/mp4" />
        <source src="/video/sample.webm" type="video/webm" />
        El teu navegador no suporta la reproducció de vídeo.
      </video>
    </section>
  );
}
