'use client';
import { useRef, useState, useEffect } from 'react';
import styles from './staticWall.module.css'; // CSS Module for scoped styles

const StaticWall = () => {
  const firstMarqueeRef = useRef<HTMLDivElement>(null);
  const [additionalMarquees, setAdditionalMarquees] = useState<number>(0);

  useEffect(() => {
    const firstMarquee = firstMarqueeRef.current;
    if (!firstMarquee) return;

    const marqueeHeight = firstMarquee.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;

    // Calculate the number of additional marquees needed
    const additional = Math.ceil(viewportHeight / marqueeHeight) - 1;
    setAdditionalMarquees(additional);
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <>
      <div className={styles.staticWall} ref={firstMarqueeRef}>
        <h1>Oi oi oi oi oi oi oi oi oi</h1>
      </div>
      {Array.from({ length: additionalMarquees }).map((_, i) => (
        <div className={styles.staticWall} key={i}>
          <h1>Oi oi oi oi oi oi oi oi oi</h1>
        </div>
      ))}
    </>
  );
};

export default StaticWall;