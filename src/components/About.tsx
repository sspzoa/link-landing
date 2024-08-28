'use client';

import { useIntersection } from '@/hooks/useIntersection';
import React from 'react';

export default function About() {
  const refs = useIntersection<HTMLDivElement>();

  return (
    <span ref={refs} id="about" className="text-paragraph text-center py-[150px]">
      Link는
      <strong>
        '미래의 창업가를 <span className="text-link-purple">연결</span>하다'
      </strong>
      라는 비전으로 만들어진 고등학생 단체로, 전국에 있는 다양한 고등학교의 IT 프로젝트 및
      <br className="hidden md:block" /> 창업 동아리들을 모아{' '}
      <strong>경험, 비전, 지식 등을 공유하고 관련 역량을 강화하는 것</strong>을 목표로 하고 있습니다.
    </span>
  );
}
