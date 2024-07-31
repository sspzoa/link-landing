import Image from 'next/image';
import Link from 'next/link';

export default function Onboarding() {
  return (
    <div className="bg-[url('/images/background.png')] h-screen flex justify-center items-center px-[24px]">
      <div className="max-w-[1200px] w-full flex flex-row gap-[30px] items-center">
        <Image src="/link-logo/logo-text.svg" alt="linkLogo" width={222} height={97} />
        <hr className="bg-link-white w-full h-[3px] rounded-full" />
        <div className="flex flex-col gap-[40px] items-end">
          <span className="text-nowrap text-right text-title text-link-white">
            미래의 창업가를
            <br />
            연결하다
          </span>
          <Link href="#apply">
            <div className="px-[40px] py-[12px] rounded-full border border-gray200 bg-link-white text-item">
              Demo Day 신청하기
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
