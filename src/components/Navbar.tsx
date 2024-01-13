import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLButtonElement | null>(null);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && menuRef.current && menuRef.current.contains(event.target as Node)) {
        return;
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setTimeout(() => setNavVisible(false), 0);
      }
    }

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [navRef, menuRef]);

  return (
    <>
      <div className="fixed z-40 top-1/2h left-0 w-[60px] h-[60px] bg-light-gray lg:hidden">
        <button ref={menuRef} onClick={toggleNav} className="z-40 mt-4 ml-4 lg:hidden">
          <Image src={"/menu.png"} alt={"menu"} width={30} height={30} />
        </button>
      </div>
      <nav ref={navRef} className={`z-30 flex flex-col w-96 h-full pb-8 transition-transform duration-200 ease-in-out bg-light-gray ${isNavVisible ? 'translate-x-0 fixed' : '-translate-x-full fixed'} lg:translate-x-0 lg:static`}>
        <div className="flex flex-col items-center pt-16">
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
            <Link href="/"><span onClick={toggleNav} className="cursor-pointer font-fonseca text-3xl text-primary-3 hover:underline">Home</span></Link>
            <Link href="/projects"><span onClick={toggleNav} className="cursor-pointer font-fonseca text-3xl text-primary-5 hover:underline">Projects</span></Link>
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
    </>


  )
}

export default Navbar