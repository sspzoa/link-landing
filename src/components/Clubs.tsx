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
    <div className="flex flex-col gap-[32px]">
      <span ref={refs[0]} className="text-paragraph text-center">
        <strong className="text-link-purple">2024년 Link</strong>는
        <strong>
          한국디지털미디어고등학교, 선린인터넷고등학교, 미림여자정보과학고등학교,
          <br className="hidden md:block" /> 단국대학교 부속 소프트웨어고등학교 외 8곳 고등학교, 10개의 동아리
        </strong>
        와 함께합니다.
      </span>
      <div className="flex justify-center items-center">
        <Link href="#" onClick={() => alert('준비 중입니다.')}>
          <div ref={refs[1]} className="px-[40px] py-[12px] rounded-full border border-gray200 bg-link-white text-item">
            추가 모집중
          </div>
        </Link>
      </div>
      <div ref={refs[2]} className="flex flex-row gap-[30px] md:gap-[60px] flex-wrap justify-center">
        <Image className="hidden md:block" src="/club-logo/LUNA.svg" alt="luna" width={60} height={60} />
        <Image className="hidden md:block" src="/club-logo/implude.svg" alt="luna" width={60} height={60} />
        <Image className="hidden md:block" src="/club-logo/crevice.svg" alt="luna" width={60} height={60} />
        <Image className="hidden md:block" src="/club-logo/edcan.svg" alt="luna" width={60} height={60} />
        <Image className="hidden md:block" src="/club-logo/applepie.svg" alt="luna" width={60} height={60} />
        <Image className="hidden md:block" src="/club-logo/seda.svg" alt="luna" width={60} height={60} />
        <Image className="hidden md:block" src="/club-logo/miven.svg" alt="luna" width={60} height={60} />
        <Image className="hidden md:block" src="/club-logo/noid.svg" alt="luna" width={60} height={60} />
        <Image className="block md:hidden" src="/club-logo/LUNA.svg" alt="luna" width={50} height={50} />
        <Image className="block md:hidden" src="/club-logo/implude.svg" alt="luna" width={50} height={50} />
        <Image className="block md:hidden" src="/club-logo/crevice.svg" alt="luna" width={50} height={50} />
        <Image className="block md:hidden" src="/club-logo/edcan.svg" alt="luna" width={50} height={50} />
        <Image className="block md:hidden" src="/club-logo/applepie.svg" alt="luna" width={50} height={50} />
        <Image className="block md:hidden" src="/club-logo/seda.svg" alt="luna" width={50} height={50} />
        <Image className="block md:hidden" src="/club-logo/miven.svg" alt="luna" width={50} height={50} />
        <Image className="block md:hidden" src="/club-logo/noid.svg" alt="luna" width={50} height={50} />
      </div>
    </div>
  );
}
