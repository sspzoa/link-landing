'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      if (window.scrollY > viewportHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkClass = `text-item ${isScrolled ? 'text-gray1000' : 'text-[#f9f8fe]'} transition-colors duration-300`;

  return (
    <div
      className={`z-10 fixed top-0 w-full flex items-center justify-center p-[24px] transition-all duration-300 backdrop-blur-[5px] ${
        isScrolled ? 'bg-link-white100' : 'bg-[#19112633]'
      }`}>
      <div className="w-full flex flex-col md:flex-row justify-between items-center max-w-[1200px] gap-[15px]">
        <Link href="/">
          <Image
            className="dark:hidden"
            src={isScrolled ? '/link-logo/logo-full-dark.svg' : '/link-logo/logo-full.svg'}
            alt="linkLogo"
            width={72}
            height={24}
          />
          <Image className="hidden dark:block" src="/link-logo/logo-full.svg" alt="linkLogo" width={72} height={24} />
        </Link>
        <div className="flex flex-row w-full justify-around md:w-auto md:gap-[45px]">
          <Link href="#about" className={linkClass}>
            About Link
          </Link>
          <Link href="#information" className={linkClass}>
            행사 소개
          </Link>
          <Link href="#schedule" className={linkClass}>
            행사 일정
          </Link>
          <Link href="#previous" className={linkClass}>
            지난 행사
          </Link>
          <Link href="#apply" className={linkClass}>
            신청하기
          </Link>
        </div>
      </div>
    </div>
  );
}
