'use client';

import { useIntersection } from '@/hooks/useIntersection';
import Link from 'next/link';

export default function Apply() {
  const headerRefs = [useIntersection<HTMLSpanElement>(), useIntersection<HTMLSpanElement>()];
  return (
    <div id="apply" className="flex flex-col justify-center items-center gap-[30px]">
      <span ref={headerRefs[0]} className="text-description text-gray500">
        미래의 창업가를 연결하다, <strong>Link</strong>
      </span>
      <span ref={headerRefs[1]} className="text-title text-center">
        지금 Demo Day를 신청하고
        <br />
        <strong className="text-link-purple font-[800]">Link</strong>와 함께하세요!
      </span>
      <Link href="https://sspzoa.io" target="_blank" rel="noreferrer">
        <div className="px-[40px] py-[12px] rounded-full border border-gray200 bg-link-white text-item">
          Demo Day 신청하기
        </div>
      </Link>
    </div>
  );
}
