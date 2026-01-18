import React from 'react';
import imgMedium from "/images/home.jpg";
import imgLarge from "/images/home2.jpg";

export default function Home() {
  return (
    <div className='home'>
      <h1>HOME</h1>
      <img
        src={imgMedium}
        srcSet={`
          ${imgMedium} 700w,
          ${imgLarge} 1200w
        `}
        sizes="(max-width: 768px) 100vw, 1200px"
        alt="Foto de paisajes"
        className="home-img"
        loading="eager"
      />
      
    </div>
  );
}
