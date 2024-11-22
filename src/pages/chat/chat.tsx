import Footer from '../../components/footer';
import Kulikovskiy from '../../../public/kulikovskiy.png';
import Florist from '../../../public/florist.png';
import Bishkek from '../../../public/bishkek.png';
import Studio from '../../../public/studio.png';
import Cooking from '../../../public/Cooking.png';
import Game from '../../../public/Game.png';
import Eagle from '../../../public/Eagle.png';
import Green from '../../../public/Green.png';

export default function Chat() {
  interface CardJobProps {
    textColor: string;
    img: string;
    title: string;
  }

  const CardJob: React.FC<CardJobProps> = ({ textColor, img, title }) => {
    return (
      <div className="flex justify-center gap-4">
        <div>
          <img className="rounded-full" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <b style={{ color: textColor }}>{title}</b>
          <span>
            Каков ваш опыт и на какую <br />
            зарплату вы расчитываете? <br />
            Вы сможете завтра прийти на собеседование?
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full w-full ">
      <br />
      <br />
      <div className="p-6 ">
        <header className="flex flex-col">
          <div className=" text-3xl">
            <b>
              <span className="text-[#0F1238]">CHATS</span>
            </b>
          </div>
          <br />
          <div>
            <span className="text-[#00AEEF]">Messages from agency</span>
          </div>
          <br />
        </header>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#F0ECEC] rounded-[20px] p-2 w-2/3"
          />
        </div>
        <div className="flex flex-col mt-10 items-center gap-2">
          <CardJob
            textColor="#9519AD"
            img={Kulikovskiy}
            title="Kulikov cafe"
            key={4}
          />
          <CardJob
            textColor="#0068AC"
            img={Bishkek}
            title="Bishkek center"
            key={5}
          />
          <CardJob
            textColor="#050608"
            img={Studio}
            title="1.1 Studio"
            key={6}
          />
          <CardJob textColor="#C5A17C" img={Florist} title="Caterina" key={7} />
          <CardJob
            textColor="##FEC001"
            img={Cooking}
            title="Cooking healthy food"
            key={7}
          />
          <CardJob
            textColor="#000000"
            img={Game}
            title="Game development"
            key={8}
          />
          <CardJob
            textColor="#242A3A"
            img={Eagle}
            title="Eagle coorperation"
            key={9}
          />
          <CardJob textColor="Biprofi" img={Green} title="Biprofi" key={10} />
          <CardJob
            textColor="#C5A17C"
            img={Florist}
            title="Caterina"
            key={11}
          />
        </div>
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
