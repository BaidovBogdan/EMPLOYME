import Footer from '../../components/footer';
import Kulikovskiy from '../../../public/kulikovskiy.png';
import Florist from '../../../public/florist.png';
import Bishkek from '../../../public/bishkek.png';
import DropdownMenu from '../../components/menu';
import BgMainScreen from '../../../public/bgChat.png';
import { useState } from 'react';
import Filter from '../../components/filter';

export default function MainScreen() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  interface CardJobProps {
    bgColor: string;
    img: string;
  }

  const CardJob: React.FC<CardJobProps> = ({ bgColor, img }) => {
    return (
      <div className="flex flex-col gap-2">
        <div
          className="flex justify-around w-80 h-28 text-white rounded-2xl"
          style={{ backgroundColor: bgColor }}
        >
          <img src={img} alt="" />
          <div className="flex flex-col gap-[1px] text-left">
            <span>Marketing Analyst </span>
            <span>BrightWave Innovations</span>
            <span className="text-xs">Location: Bishkek </span>
            <span className="text-xs">
              Full-time, 9 AM - 6 PM, Monday to Friday
            </span>
            <span className="text-xs">$80,000 - $100,000 per year</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="text-white rounded-2xl p-1 w-24"
            style={{ backgroundColor: bgColor }}
          >
            Apply
          </button>
          <button
            className="text-white rounded-2xl p-1 w-24"
            style={{ backgroundColor: bgColor }}
          >
            Details
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative flex flex-col h-full w-full mt-20"
      style={{
        backgroundImage: `url(${BgMainScreen})`,
        backgroundPosition: 'center 50%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'auto',
      }}
    >
      <header className="flex justify-between w-full items-center p-4">
        <div>
          <div className="text-3xl font-bold text-center">
            EMPLOY<span className="text-[#00AEEF]">ME</span>
          </div>
          <div className="text-lg">
            Job list -{' '}
            <span className="font-semibold text-[#00AEEF]">Marketing</span>
          </div>
        </div>
        <div className="mb-5">
          <DropdownMenu />
        </div>
      </header>
      <div className="p-4 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Jobs, keywords..."
          className="bg-[#F0ECEC] rounded-[20px] p-2 w-2/3"
        />
        <button
          className="p-1 bg-[#00AEEF] w-[155px] rounded-2xl text-white"
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        >
          Adjust Filters
        </button>
        {isOpen && <Filter />}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <CardJob bgColor="#9519AD" img={Kulikovskiy} key={1} />
        <CardJob bgColor="#0068AC" img={Bishkek} key={2} />
        <CardJob bgColor="#C5A17C" img={Florist} key={3} />
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}
