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
    <div className="flex flex-col gap-[32px] py-[150px]">
      <span ref={refs[0]} className="text-paragraph text-center">
        <strong className="text-link-purple">2024년 Link</strong>는{' '}
        <strong>
          한국디지털미디어고등학교, 단국대학교부속소프트웨어고등학교, 부산소프트웨어마이스터고등학교,
          <br className="hidden md:block" />
          선린인터넷고등학교, 미림마이스터고등학교, 광주소프트웨어마이스터고등학교의 9개 동아리
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
      <div ref={refs[2]} className="flex flex-row gap-[30px] md:gap-[60px] flex-wrap justify-center">
        <Image className="hidden md:block" src="/club-logo/LUNA.svg" alt="luna" width={60} height={60} />
        <Image className="block md:hidden" src="/club-logo/LUNA.svg" alt="luna" width={50} height={50} />
        <Image className="hidden md:block" src="/club-logo/crevice.svg" alt="crevice" width={60} height={60} />
        <Image className="block md:hidden" src="/club-logo/crevice.svg" alt="crevice" width={50} height={50} />
        <Image className="hidden md:block" src="/club-logo/implude.svg" alt="implude" width={60} height={60} />
        <Image className="block md:hidden" src="/club-logo/implude.svg" alt="implude" width={50} height={50} />
        <div className="flex justify-center items-center">
          <img className="hidden md:block w-[60px]" src="/club-logo/miven.png" alt="miven" />
          <img className="block md:hidden w-[50px]" src="/club-logo/miven.png" alt="miven" />
        </div>
        <Image className="hidden md:block" src="/club-logo/mrmr.png" alt="mrmr" width={60} height={60} />
        <Image className="block md:hidden" src="/club-logo/mrmr.png" alt="mrmr" width={50} height={50} />
        <Image className="hidden md:block" src="/club-logo/noid.svg" alt="noid" width={60} height={60} />
        <Image className="block md:hidden" src="/club-logo/noid.svg" alt="noid" width={50} height={50} />
      </div>
    </div>
  );
}
