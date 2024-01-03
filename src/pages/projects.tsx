import Link from 'next/link';
import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

const Home = () => {

  return (
    <div className="flex min-h-screen bg-primary-1">
      <div className="relative flex-grow">
        <div className="flex justify-center items-center h-full max-w-md mx-auto">
          <Image src="/ethgobblers.webp" alt="Eth Gobblers" objectFit="contain" width={200} height={200} />
          <Image src="/mev_logo.png" alt="MEV" layout="responsive" width={200} height={200} />
          <Image src="/love.webp" alt="Love" width={200} height={200} />
          <Image src="/goopen.webp" alt="Goopen" width={200} height={200} />
          <Image src="/n5.webp" alt="N5" width={200} height={200} />
          <Image src="/dreamland.webp" alt="Dreamland" width={200} height={200} />
          <Image src="/md.webp" alt="Myth Division" width={200} height={200} />
          <Image src="/pepe.webp" alt="Pepe" width={200} height={200} />
          <Image src="/alien.webp" alt="Alien" width={200} height={200} />
          <Image src="/333.webp" alt="333" width={200} height={200} />
          <Image src="/firstthread.webp" alt="First Thread" width={200} height={200} />
          <Image src="/eighties.webp" alt="Eighties Babies" width={200} height={200} />
          <Image src="/gan.webp" alt="Gan Fish" width={200} height={200} />
          <Image src="/receipt.webp" alt="Omakasea Receipt" width={200} height={200} />
          <Image src="/cacti.webp" alt="Cacti" width={200} height={200} />
          <Image src="/bandel.webp" alt="Bandel" width={200} height={200} />
          <Image src="/unicorn.webp" alt="Unicorn" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Home;