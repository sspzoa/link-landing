import Image from 'next/image';
import Link from 'next/link';

export default function Clubs() {
  return (
    <div className="flex flex-col gap-[32px] py-[160px]">
      <span className="text-paragraph text-center">
        <strong className="text-link-purple">2024년 Link</strong>는
        <strong>
          한국디지털미디어고등학교, 선린인터넷고등학교, 미림여자정보과학고등학교,
          <br />
          단국대학교 부속 소프트웨어고등학교 외 8곳 고등학교, 10개의 동아리
        </strong>
        와 함께합니다.
      </span>
      <div className="flex justify-center items-center">
        <Link href="https://sspzoa.io" target="_blank" rel="noreferrer">
          <div className="px-[40px] py-[12px] rounded-full border border-gray200 bg-link-white text-item">
            추가 모집중
          </div>
        </Link>
      </div>
      <div className="flex flex-row gap-[60px]">
        <Image src="/club-logo/LUNA.svg" alt="luna" width={60} height={60} />
        <Image src="/club-logo/implude.svg" alt="luna" width={60} height={60} />
        <Image src="/club-logo/crevice.svg" alt="luna" width={60} height={60} />
        <Image src="/club-logo/edcan.svg" alt="luna" width={60} height={60} />
        <Image src="/club-logo/applepie.svg" alt="luna" width={60} height={60} />
        <Image src="/club-logo/seda.svg" alt="luna" width={60} height={60} />
        <Image src="/club-logo/miven.svg" alt="luna" width={60} height={60} />
        <Image src="/club-logo/noid.svg" alt="luna" width={60} height={60} />
      </div>
    </div>
  );
}
