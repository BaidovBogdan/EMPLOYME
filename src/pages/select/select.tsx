import React from 'react';
import { useNavigate } from 'react-router-dom';

const BtnSmall = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/main')}
      className="p-1 bg-[#00AEEF] w-[155px] rounded-xl text-white hover:bg-[#0F1238]"
    >
      {children}
    </button>
  );
};
const BtnBig = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/main')}
      className="p-1 bg-[#00AEEF] w-52 rounded-xl text-white text-left hover:bg-[#0F1238]"
    >
      {children}
    </button>
  );
};

export default function Select() {
  return (
    <>
      <main className="flex justify-center items-start w-full h-full mt-20">
        <div className="flex flex-col gap-4 w-full max-w-lg p-4">
          <b className="text-[#0F1238] text-xl text-center">
            Choose your interest
          </b>
          <div className="border-2 border-black rounded-2xl p-2 flex flex-col gap-4">
            <br />
            <div className="w-full flex flex-row justify-center flex-wrap gap-4">
              <BtnSmall>Программирование</BtnSmall>
              <BtnSmall>HR и рекрутинг</BtnSmall>
              <BtnSmall>Дизайн</BtnSmall>
              <BtnSmall>Медицина</BtnSmall>
              <BtnSmall>Маркетинг</BtnSmall>
              <BtnSmall>Архитектура</BtnSmall>
              <BtnSmall>Юриспруденция</BtnSmall>
              <BtnSmall>Туризм</BtnSmall>
              <BtnSmall>Финансы</BtnSmall>
              <BtnSmall>Искусство</BtnSmall>
            </div>
            <div className="w-full flex flex-col ml-4 gap-4 lg:ml-16">
              <BtnBig>Образование и обучение</BtnBig>
              <BtnBig>Наука и исследование</BtnBig>
              <BtnBig>Бухгалтерия</BtnBig>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </main>
    </>
  );
}
