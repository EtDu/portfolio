import Link from 'next/link';
import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

const Index = () => {

  return (
    <div className="flex h-full bg-opacity-80 overflow-auto py-8 relative">
      <div className="w-full h-full absolute inset-0 flex overflow-hidden transform origin-center rotate-[-45deg] z-10">
        <Image src="/compass.png" alt="Compass" layout="fill" objectFit="contain" className="opacity-10" />
      </div>
      <div className="flex flex-col w-full z-20">
        <h1 className="text-3xl lg:text-5xl font-fonseca text-center text-primary-2 font-bold">I&apos;m Etienne</h1>
        <h2 className="text-2xl lg:text-3xl font-fonseca text-center text-primary-2 font-bold py-5">Welcome to my portfolio!</h2>
        <div className="px-20 xl:px-40 w-full relative overflow-visible">
          <div className="z-20">
            <p className="text-lg font-fonseca text-center text-primary-15 font-bold py-5">
              The most adept in their fields make their work seem deceptively simple.
            </p>
            <p className="text-lg font-fonseca text-center text-primary-3 font-bold py-5">
              In my seven years as a Full Stack Software Engineer, I&apos;ve learned that the secret
              sauce to successful project launches isn&apos;t just about writing good code.
            </p>
            <p className="text-lg font-fonseca text-center text-primary-4 font-bold py-5">
              It&apos;s about creating a story – a narrative where every line of code intertwines with user experience
              and contributes to the larger tale of empowering THE PEOPLE with technology to become an extension of our
              very existence, enhancing our social networks, increasing our opportunities and elevating our serendipity.
            </p>
            <p className="text-lg font-fonseca text-center text-primary-5 font-bold py-5">
              My entire career has been about making something- from nothing. Leveraging the art of education & programming
              to produce results that exist beyond the bounds of everyday perception.
            </p>
            <p className="text-lg font-fonseca text-center text-primary-11 font-bold py-5">
              Please have a look around my website. Don&apos;t hesitate to reach out if you&apos;d like to leverage my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;