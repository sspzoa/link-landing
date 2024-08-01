import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-row bg-gray1000 justify-center items-center px-[24px] py-[48px]">
      <div className="w-full flex flex-col md:flex-row justify-between items-center max-w-[1200px] gap-[16px]">
        <Image src="/link-logo/logo-full.svg" alt="link" width={120} height={40} />
        <div className="flex flex-col items-center md:items-end gap-[16px]">
          <div className="flex flex-row gap-[16px]">
            <Link href="mailto:me@sspzoa.io">
              <FontAwesomeIcon icon={faEnvelope} className="w-[32px] h-[32px] text-link-white" />
            </Link>
            <Link href="https://www.instagram.com/link.abroad/ " target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="w-[32px] h-[32px] text-link-white" />
            </Link>
          </div>
          <span className="text-item text-link-white text-center">
            Refreshed by{' '}
            <Link href="https://github.com/sspzoa" target="_blank" rel="noreferrer">
              sspzoa
            </Link>{' '}
            / Copyright © 2024 LUNA All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
