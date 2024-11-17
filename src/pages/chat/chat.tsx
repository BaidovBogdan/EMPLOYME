import Footer from '../../components/footer';
import Kulikovskiy from '../../../public/kulikovskiy.png';
import Florist from '../../../public/florist.png';
import Bishkek from '../../../public/bishkek.png';
import Studio from '../../../public/studio.png';

export default function Chat() {
  interface CardJobProps {
    bgColor: string;
    img: string;
    text: string;
  }

  const CardJob: React.FC<CardJobProps> = ({ bgColor, img, text }) => {
    return (
      <div className="flex flex-col">
        <span className="text-left text-white">{text}</span>
        <div
          className="flex justify-around w-[350px] h-[100px] text-white rounded-lg"
          style={{ backgroundColor: bgColor }}
        >
          <img src={img} alt="" />
          <div className="flex flex-col gap-[1px] text-left text-xs justify-center">
            <span>Каков ваш опыт и на какую</span>
            <span>зарплату вы расчитываете?</span>
            <span>Вы сможете завтра прийти на собеседование </span>
            <div className="flex justify-end">
              <button
                className="bg-white rounded-xl w-20 mt-3 p-1"
                style={{ color: bgColor }}
              >
                respond
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#B4B4B4B8]">
      <br />
      <br />
      <br />
      <br />
      <div className="p-6">
        <header className="flex flex-col">
          <div className="text-white text-3xl">
            <b>
              CHATS <span className="text-[#0F172A]">EMPLOY</span>
              <span className="text-[#00AEEF]">ME</span>
            </b>
          </div>
          <div>
            <span className="text-white">Messages from agency</span>
          </div>
        </header>
        <div className="flex flex-col mt-10 items-center gap-2">
          <CardJob
            bgColor="#9519AD"
            img={Kulikovskiy}
            text="Kulikov cafe"
            key={4}
          />
          <CardJob
            bgColor="#0068AC"
            img={Bishkek}
            text="Bishkek center"
            key={5}
          />
          <CardJob bgColor="#050608" img={Studio} text="1.1 Studio" key={6} />
          <CardJob bgColor="#C5A17C" img={Florist} text="Caterina" key={7} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
