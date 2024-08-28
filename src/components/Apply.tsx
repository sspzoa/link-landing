'use client';

import { useIntersection } from '@/hooks/useIntersection';
import Link from 'next/link';

export default function Apply() {
  const refs = [
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
  ];
  return (
    <div id="apply" className="flex flex-col justify-center items-center gap-[30px] py-[150px]">
      <span ref={refs[0]} className="text-description text-gray500">
        미래의 창업가를 연결하다, <strong>Link</strong>
      </span>
      <span ref={refs[1]} className="text-title text-center">
        지금 Demo Day를 신청하고
        <br />
        <strong className="text-link-purple font-[800]">Link</strong>와 함께하세요!
      </span>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSeX8Dv4_vwvSPMQGz88gOtg8DMKzOlu-qEMP8avtl0n-dQZdw/viewform?usp=sf_link"
        target="_blank"
        rel="noreferrer">
        <div ref={refs[2]} className="px-[40px] py-[12px] rounded-full border border-gray200 bg-link-white text-item">
          Demo Day 신청하기
        </div>
      </Link>
    </div>
  );
}
