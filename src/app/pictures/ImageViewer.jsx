// components/ImageViewer.js
'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ImageViewer.module.css';

export default function ImageViewer({ src, alt = "Image" }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => setIsFullscreen(true);
  const closeFullscreen = () => setIsFullscreen(false);

  return (
    <>
      <div className={styles.thumbnailContainer} onClick={openFullscreen}>
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          style={{objectFit: "cover"}}
          className={styles.thumbnail}
        />
      </div>

      {isFullscreen && (
        <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
          <div className={styles.fullscreenContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              fill
              style={{objectFit: "contain"}}
            />
            <button className={styles.closeButton} onClick={closeFullscreen}>×</button>
          </div>
        </div>
      )}
    </>
  );
}