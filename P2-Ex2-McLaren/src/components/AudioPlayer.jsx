import React from 'react';

export default function AudioPlayer() {
  return (
    <section className="audio-section">
      <h2>Audio destacat</h2>
      <audio controls>
        <source src="/audio/sample.mp3" type="audio/mpeg" />
        <source src="/audio/sample.ogg" type="audio/ogg" />
        El teu navegador no suporta la reproducció d'àudio.
      </audio>
    </section>
  );
}
