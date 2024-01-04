import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="z-10 flex flex-col w-full py-5 pt-10 bg-white bg-opacity-30" style={{ height: '100vh' }}>
      <div className="flex flex-col items-center">
        <Image className="mb-5" src="/me.png" alt="Me" width={150} height={150} />
        <div className="flex space-x-4">

          <a target="_blank" className="m-0 p-0" href="mailto:etienne.dusseault@gmail.com" rel="noopener noreferrer">
            <Image src="/email.png" alt="Email" width={28} height={28} />
          </a>
          <a target="_blank" href="https://github.com/etdu" rel="noopener noreferrer">
            <Image src="/github.png" alt="GitHub" width={28} height={28} />
          </a>
          <a target="_blank" href="https://linkedin.com/in/etienne-dusseault" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} />
          </a>
          <a target="_blank" href="https://medium.com/@etdu" rel="noopener noreferrer">
            <Image src="/medium.png" alt="Medium" width={28} height={28} />
          </a>
          <a target="_blank" href="https://twitter.com/EToptimized" rel="noopener noreferrer">
            <Image src="/twitter.png" alt="Twitter" width={28} height={28} />
          </a>
        </div>
      </div>
      <div className="flex flex-col pt-20 items-center">
        <div className="flex flex-col space-y-8">
          <Link href="/"><span className="cursor-pointer font-fonseca text-3xl text-primary-3 hover:underline">Home</span></Link>
          <Link href="/projects"><span className="cursor-pointer font-fonseca text-3xl text-primary-5 hover:underline">Projects</span></Link>
        </div>
      </div>

      <div className="flex justify-center mt-auto">
        <div className="relative w-32 h-16">
          <div className="absolute w-12 h-12 bg-primary-9 rounded-full" style={{ top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}></div>
          <div className="absolute w-12 h-12 bg-primary-10 rounded-full" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: '0.7' }}></div>
          <div className="absolute w-12 h-12 bg-primary-11 rounded-full" style={{ top: '50%', left: '75%', transform: 'translate(-50%, -50%)', opacity: '0.5' }}></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar