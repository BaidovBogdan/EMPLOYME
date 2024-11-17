import { useEffect, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { FiHome } from 'react-icons/fi';
import { VscSearch } from 'react-icons/vsc';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [activeButton, setActiveButton] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/main') {
      setActiveButton('home');
    } else if (location.pathname === '/chat') {
      setActiveButton('chat');
    } else if (location.pathname === '/profile') {
      setActiveButton('profile');
    }
  }, [location.pathname]);

  const handleButtonClick = (button: string) => {
    if (button === activeButton) return;
    else if (button === 'home') {
      navigate('/main');
    } else if (button === 'chat') {
      navigate('/chat');
    } else if (button === 'profile') {
      navigate('/profile');
    }
    setActiveButton(button);
  };

  return (
    <footer className="fixed bottom-0 w-full bg-[#0F1238] flex justify-center px-4 py-8 border-t-4">
      <div className="flex justify-around w-4/5 bg-white p-4 rounded-[28.35px]">
        <button
          onClick={() => handleButtonClick('home')}
          className={`flex justify-center items-center w-8 h-8 rounded-full shadow-md transition-all duration-300 ${
            activeButton === 'home'
              ? 'bg-white text-[#28A8E0] -translate-y-8 bor'
              : 'bg-white text-[#0F1238]'
          }`}
        >
          <FiHome />
        </button>

        <button
          onClick={() => handleButtonClick('chat')}
          className={`flex justify-center items-center w-8 h-8 rounded-full shadow-md transition-all duration-300 ${
            activeButton === 'chat'
              ? 'bg-white text-[#28A8E0] -translate-y-8 bor'
              : 'bg-white text-[#0F1238]'
          }`}
        >
          <VscSearch />
        </button>

        <button
          onClick={() => handleButtonClick('profile')}
          className={`flex justify-center items-center w-8 h-8 rounded-full shadow-md transition-all duration-300 ${
            activeButton === 'profile'
              ? 'bg-white text-[#28A8E0] -translate-y-8 bor'
              : 'bg-white text-[#0F1238]'
          }`}
        >
          <CiSettings />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
