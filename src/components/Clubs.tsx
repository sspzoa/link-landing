'use client';

import { useIntersection } from '@/hooks/useIntersection';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Clubs() {
  const refs = [
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
  ];
  return (
    <div className="flex flex-col gap-[48px] py-[150px] justify-center items-center">
      <span ref={refs[0]} className="text-paragraph text-center">
        <strong className="text-link-purple">2024년 Link</strong>는{' '}
        <strong>
          한국디지털미디어고등학교, 단국대학교부속소프트웨어고등학교, 부산소프트웨어마이스터고등학교,
          <br className="hidden md:block" />
          선린인터넷고등학교, 미림마이스터고등학교, 광주소프트웨어마이스터고등학교, 경북소프트웨어마이스터고등학교의
          11개 동아리
        </strong>
        와 함께합니다.
      </span>
      <div className="flex justify-center items-center">
        <Link
          className="ease-in-out duration-500 hover:opacity-50"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe2eLgLzZA0Za2OHMpinIu4ng1ODZJFPxQd2F0RWxXgT3_8jw/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer noopener">
          <div ref={refs[1]} className="px-[40px] py-[12px] rounded-full border border-gray200 bg-link-white text-item">
            Link 연합 동아리 신청하기
          </div>
        </Link>
      </div>
      <div ref={refs[2]} className="max-w-4xl flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <img className="w-12 md:w-16" src="/club-logo/LUNA.svg" />
        <img className="w-12 md:w-16" src="/club-logo/noid.png" />
        <img className="w-12 md:w-16" src="/club-logo/mrmr.svg" />

        <img className="w-12 md:w-16" src="/club-logo/crevice.svg" />
        <img className="w-12 md:w-16" src="/club-logo/msg.svg" />
        <img className="h-6 md:h-8" src="/club-logo/devcoop.svg" />

        <img className="w-12 md:w-16" src="/club-logo/tapey.svg" />
        <img className="w-12 md:w-16" src="/club-logo/absolute.svg" />
        <img className="h-6 md:h-8" src="/club-logo/miven.svg" />
        <img className="w-12 md:w-16" src="/club-logo/implude.svg" />
        <img className="w-12 md:w-16" src="/club-logo/wine.svg" />
      </div>
    </div>
  );
}
