'use client';

import { useIntersection } from '@/hooks/useIntersection';

export default function Schedule() {
  const headerRef = useIntersection<HTMLSpanElement>();
  const scheduleRefs = [
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
  ];

  return (
    <div
      id="schedule"
      className="flex flex-col gap-[60px] w-full max-w-[1000px] justify-center items-center py-[150px]">
      <span ref={headerRef} className="text-header">
        행사 일정
      </span>
      <div className="flex flex-col w-full gap-[45px] md:gap-[30px]">
        <div ref={scheduleRefs[0]} className="w-full flex flex-col md:flex-row gap-[8px] md:gap-[30px] items-center">
          <div className="flex flex-col items-center md:items-start gap-[8px]">
            <span className="text-nowrap text-subtext text-gray500">12:00 ~ 13:00</span>
            <span className="text-nowrap text-paragraph">
              <strong>참가자 등록 및 사전 네트워킹</strong>
            </span>
          </div>
          <hr className="bg-gray100 w-full h-[2px] rounded-full hidden md:block"/>
          <div className="flex flex-col gap-[8px] items-center md:items-end">
            <span className="text-nowrap text-paragraph hidden md:block">
              <strong>본 행사 시작 전 행사 참가자 간의 간단한 네트워킹</strong>
            </span>
            <span className="text-nowrap text-subtext block md:hidden">
              본 행사 시작 전 행사 참가자 간의 간단한 네트워킹
            </span>
            <span className="text-nowrap text-subtext text-gray500">명찰 배부 및 좌석 안내, 행사 시작 전 네트워킹</span>
          </div>
        </div>
        <div ref={scheduleRefs[1]} className="w-full flex flex-col md:flex-row gap-[8px] md:gap-[30px] items-center">
          <div className="flex flex-col items-center md:items-start gap-[8px]">
            <span className="text-nowrap text-subtext text-gray500">13:00 ~ 15:15</span>
            <span className="text-nowrap text-paragraph">
              <strong>동아리별 Demo Expo</strong>
            </span>
          </div>
          <hr className="bg-gray100 w-full h-[2px] rounded-full hidden md:block"/>
          <div className="flex flex-col gap-[8px] items-center md:items-end">
            <span className="text-nowrap text-paragraph hidden md:block">
              <strong>동아리별 성과 및 경험 공유 및 경품 추첨</strong>
            </span>
            <span className="text-nowrap text-subtext block md:hidden">동아리별 성과 및 경험 공유 및 경품 추첨</span>
            <span className="text-nowrap text-subtext text-gray500">
              참가 동아리의 2024년 프로젝트 및 성과 공유 및 경품 추첨
            </span>
          </div>
        </div>
        <div ref={scheduleRefs[2]} className="w-full flex flex-col md:flex-row gap-[8px] md:gap-[30px] items-center">
          <div className="flex flex-col items-center md:items-start gap-[8px]">
            <span className="text-nowrap text-subtext text-gray500">15:15 ~ 16:00</span>
            <span className="text-nowrap text-paragraph">
              <strong>졸업생 연사 초청 특별 강연</strong>
            </span>
          </div>
          <hr className="bg-gray100 w-full h-[2px] rounded-full hidden md:block"/>
          <div className="flex flex-col gap-[8px] items-center md:items-end">
            <span className="text-nowrap text-paragraph hidden md:block">
              <strong>현직에 종사하시는 졸업생 선배들의 창업 경험 이야기</strong>
            </span>
            <span className="text-nowrap text-subtext block md:hidden">
              현직에 종사하시는 졸업생 선배들의 창업 경험 이야기
            </span>
            <span className="text-nowrap text-subtext text-gray500">최재림 <span className='text-item'>(김캐디 Co-founder/CTO)</span>, 김창환 <span className='text-item'>(익스팬드 대표이사)</span></span>
          </div>
        </div>
        <div ref={scheduleRefs[3]} className="w-full flex flex-col md:flex-row gap-[8px] md:gap-[30px] items-center">
          <div className="flex flex-col items-center md:items-start gap-[8px]">
            <span className="text-nowrap text-subtext text-gray500">16:00 ~ 16:40</span>
            <span className="text-nowrap text-paragraph">
              <strong>다과 배부 및 네트워킹 행사</strong>
            </span>
          </div>
        </div>
        <div ref={scheduleRefs[4]} className="w-full flex flex-col md:flex-row gap-[8px] md:gap-[30px] items-center">
          <div className="flex flex-col items-center md:items-start gap-[8px]">
            <span className="text-nowrap text-subtext text-gray500">16:40 ~ 17:30</span>
            <span className="text-nowrap text-paragraph">
              <strong>개인 연사 세션</strong>
            </span>
          </div>
          <hr className="bg-gray100 w-full h-[2px] rounded-full hidden md:block"/>
          <div className="flex flex-col gap-[8px] items-center md:items-end">
            <span className="text-nowrap text-paragraph hidden md:block">
              <strong>여러 청소년 창업가들의 개인 연사 세션</strong>
            </span>
            <span className="text-nowrap text-subtext block md:hidden">여러 청소년 창업가들의 개인 연사 세션</span>
            <span className="text-nowrap text-subtext text-gray500">참가 동아리의 동아리원들 중 강연자 별도 모집</span>
          </div>
        </div>
        <div ref={scheduleRefs[5]} className="w-full flex flex-col md:flex-row gap-[8px] md:gap-[30px] items-center">
          <div className="flex flex-col items-center md:items-start gap-[8px]">
            <span className="text-nowrap text-subtext text-gray500">17:30 ~ 17:40</span>
            <span className="text-nowrap text-paragraph">
              <strong>폐회식 및 단체사진 촬영</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
