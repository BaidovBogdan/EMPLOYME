import { useNavigate } from 'react-router-dom';
import Logo from '../../../public/Logo.png';

export default function Start() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-full h-full bg-[#0F1238]">
      <div className="flex flex-col gap-2">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex justify-center">
          <span className="text-2xl text-white">EMPLOY</span>
          <span className="text-2xl text-[#00AEEF]">ME</span>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/sign')}
            className="bg-[#00AEEF] p-1 w-full rounded-2xl text-white"
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
}
