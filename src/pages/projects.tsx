import Link from 'next/link';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import projectMetadata from "../app/projectMetadata.json"

const Home = () => {

  return (
    <div className='h-full p-16'>
      <h1 className="text-3xl lg:text-5xl font-bold font-fonseca mb-4 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 lg:gap-8 pb-16">
        {Object.values(projectMetadata).map((image, index) => (
          <Link href={`/projects/${image.route}`} key={index}>
            <div className="w-3/4 h-full flex flex-col justify-between mx-auto">
              <div className='h-full flex justify-center items-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  layout="responsive"
                />
              </div>
              <p className="text-center font-fonseca mt-4">{image.alt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;