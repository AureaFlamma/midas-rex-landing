// pages/index.js
'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    
    const container = document.getElementById('container');
    // Clear container first to avoid duplication on re-renders
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    const screenHeight = window.innerHeight;
    const textHeight = 30; // Height of each text line
    const rows = Math.ceil(screenHeight / textHeight);
    
    // Create a single CSS animation for all rows
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
      
      .text-wrapper {
        position: absolute;
        white-space: nowrap;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.7);
        width: 200%;
        height: ${textHeight}px;
        line-height: ${textHeight}px;
        animation: float 15s linear infinite;
      }
    `;
    document.head.appendChild(style);
    
    // Create two different text patterns that will alternate
    const phrase1 = "coming soon ";
    const phrase2 = "soon coming ";
    
    // Calculate how many copies we need
    const screenWidth = window.innerWidth;
    const testSpan = document.createElement('span');
    testSpan.textContent = phrase1;
    testSpan.style.visibility = 'hidden';
    testSpan.style.fontSize = '24px';
    document.body.appendChild(testSpan);
    const phraseWidth = testSpan.offsetWidth;
    document.body.removeChild(testSpan);
    
    const copiesNeeded = Math.ceil((screenWidth * 3) / phraseWidth) + 2;
    
    // Generate the two text patterns
    let textPattern1 = '';
    let textPattern2 = '';
    for (let i = 0; i < copiesNeeded; i++) {
      textPattern1 += phrase1;
      textPattern2 += phrase2;
    }
    
    // Create rows with alternating patterns
    for (let i = 0; i < rows; i++) {
      const wrapper = document.createElement('div');
      wrapper.className = 'text-wrapper';
      wrapper.style.top = `${i * textHeight}px`;
      
      // Use regular or staggered text based on row number
      if (i % 2 === 0) {
        wrapper.textContent = textPattern1;
      } else {
        wrapper.textContent = textPattern2;
      }
      
      container.appendChild(wrapper);
    }
    
  }, [mounted]);

  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Coming Soon Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container" id="container"></div>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #121212;
          font-family: 'Arial', sans-serif;
        }
        
        .container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}