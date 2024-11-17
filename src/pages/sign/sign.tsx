import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../public/Logo.png';

export default function Sign() {
  const [isRegister, setIsRegister] = useState<boolean>(true);
  const navigate = useNavigate();

  const str = '<-';

  return (
    <main className="flex justify-center items-center w-full h-full bg-[#0F1238]">
      {isRegister ? (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="" />
            <span className="text-white">LOGIN</span>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Имя пользователя..."
              className="p-1 rounded-xl"
            />
            <input
              type="text"
              placeholder="Пароль..."
              className="p-1 rounded-xl"
            />
            <div className="flex justify-end p-1">
              <button
                onClick={() => navigate('/select')}
                className="bg-[#0F172A] p-1 rounded-xl text-white"
              >
                Continue
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => setIsRegister((prev) => !prev)}
              className="bg-[#00AEEF] p-1 w-full rounded-2xl text-white"
            >
              SIGN UP
            </button>
          </div>
          <div className="left-0 bottom-0 absolute p-4">
            <button
              onClick={() => navigate('/')}
              className="bg-[#00AEEF] text-white p-1 rounded-full"
            >
              {str}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center">
            <span className="text-white">SIGN UP</span>
          </div>
          <br />
          <div className="flex flex-col gap-3">
            <input type="text" placeholder="Name" className="p-1 rounded-xl" />
            <input
              type="text"
              placeholder="Surname"
              className="p-1 rounded-xl"
            />
            <input type="text" placeholder="Gmail" className="p-1 rounded-xl" />
            <input
              type="text"
              placeholder="Create a password"
              className="p-1 rounded-xl"
            />
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/select')}
                className="bg-[#0F172A] p-1 rounded-xl text-white"
              >
                Continue
              </button>
            </div>
            <br />
            <div className="flex">
              <span className="text-white">
                Sign up and get started your <br /> path to finding your dream
                job
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
