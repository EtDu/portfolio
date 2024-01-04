import Link from 'next/link';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import projectMetadata from "../app/projectMetadata.json"

const Home = () => {

  return (
    <div className="flex bg-white h-full bg-opacity-80">
      <div className="grid grid-cols-4 p-4 w-full h-screen overflow-y-auto">
        {projectMetadata.map((image, index) => (
          <Link href={`/projects/${image.route}`} key={index}>
            <div key={index} className="flex flex-col items-center justify-center h-64">
              <div className="relative w-full h-3/4">
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="contain" className="absolute" />
              </div>
              <p className="text-center font-fonseca mt-2">{image.alt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;