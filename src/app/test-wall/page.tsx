'use client';
import { useEffect, useRef } from 'react';
import styles from './Marquee.module.css'; // CSS Module for scoped styles

function useMarquee(ref, speed) {
  useEffect(() => {
    const parentElement = ref.current;
    if (!parentElement) return;

    const clone = parentElement.innerHTML;
    const firstElement = parentElement.children[0];
    let i = 0;

    // Clone the content twice for seamless scrolling
    parentElement.insertAdjacentHTML('beforeend', clone);
    parentElement.insertAdjacentHTML('beforeend', clone);

    const interval = setInterval(() => {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i += speed;
    }, 16); // ~60 FPS

    return () => clearInterval(interval); // Cleanup on unmount
  }, [ref, speed]);
}

export default function MarqueePage() {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const marqueeRef3 = useRef(null);

  useMarquee(marqueeRef1, 1);
  useMarquee(marqueeRef2, 1);
  useMarquee(marqueeRef3, 1);

  return (
    <>
      <div className={styles.marquee} ref={marqueeRef1}>
        <h1>Nepal * Himalayas * Mountains * Everest * </h1>
      </div>
      <div className={styles.marquee} ref={marqueeRef2}>
        <h1>Himalayas * Mountains * Everest * Nepal * </h1>
      </div>
      <div className={styles.marquee} ref={marqueeRef3}>
        <h1>Nepal * Himalayas * Mountains * Everest * </h1>
      </div>
    </>
  );
}