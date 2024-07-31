import About from '@/components/About';
import Apply from '@/components/Apply';
import Clubs from '@/components/Clubs';
import Information from '@/components/Information';
import Onboarding from '@/components/Onboarding';
import Previous from '@/components/Previous';
import Schedule from '@/components/Schedule';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Onboarding />
      <div className="flex flex-col justify-center items-center px-[24px] py-[40px]">
        <About />
        <Clubs />
        <Information />
        <Schedule />
        <Previous />
        <Apply />
      </div>
    </div>
  );
}
