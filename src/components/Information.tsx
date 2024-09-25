'use client';

import { useIntersection } from '@/hooks/useIntersection';

export default function Information() {
  const refs = [
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
  ];

  return (
    <div id="information" className="flex flex-col gap-[60px] justify-center items-center py-[150px]">
      <div className="flex flex-col gap-[15px] md:gap-[45px] justify-center items-center">
        <span ref={refs[0]} className="text-description text-gray500">
          Link Demo Day
        </span>
        <span ref={refs[1]} className="text-header text-gray1000">
          행사 소개
        </span>
      </div>
      <table>
        <tbody>
          <tr>
            <td className="pb-[30px] pr-[30px] md:pr-[60px] align-top">
              <span ref={refs[2]} className="text-gray500 text-paragraph text-nowrap">
                행사명
              </span>
            </td>
            <td className="align-top">
              <span ref={refs[6]} className="text-gray1000 text-paragraph">
                <strong>Link Demo Day</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td className="pb-[30px] pr-[30px] md:pr-[60px] align-top">
              <span ref={refs[3]} className="text-gray500 text-paragraph text-nowrap">
                행사 인원
              </span>
            </td>
            <td className="align-top">
              <span ref={refs[7]} className="text-gray1000 text-paragraph">
                <strong>200명 내외</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td className="pb-[30px] pr-[30px] md:pr-[60px] align-top">
              <span ref={refs[4]} className="text-gray500 text-paragraph text-nowrap">
                행사 장소
              </span>
            </td>
            <td className="align-top">
              <span ref={refs[8]} className="text-gray1000 text-paragraph">
                <strong>프론트원 (FRONT1) 5층 박병원홀 (서울특별시 마포구 마포대로 122)</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td className="pb-[30px] pr-[30px] md:pr-[60px] align-top">
              <span ref={refs[5]} className="text-gray500 text-paragraph text-nowrap">
                행사 일시
              </span>
            </td>
            <td className="align-top">
              <span ref={refs[9]} className="text-gray1000 text-paragraph">
                <strong>2024년 11월 16일 (토) 12:00 ~ 18:00</strong>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
