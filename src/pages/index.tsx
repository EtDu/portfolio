import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const DynamicComponentWithLoading = dynamic(
  () => import('./home'),
  {
    loading: () =>
      <div className="relative w-full h-3/5 transform origin-center" style={{ transform: `rotate(${rotation}deg)` }}>
        <Image src="/compass.png" alt="Compass" layout="fill" objectFit="contain" />
      </div>
  }
)

export default function Index() {
  return <DynamicComponentWithLoading />
}


//1) extract the top 10 most prominent colors from this image
// 2) create an index.tsx for nextjs (use Link components without a tags) file with 4 navigation sections, Home, About, Projects & Blog, 
// 3) style the page to use the colors from the image
// 4) add 5 cool abstract geometric shapes to the page that draw inspiration from the photo, using the same colors
// 5) use tailwindcss for styling