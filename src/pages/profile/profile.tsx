import Footer from '../../components/footer';

export default function Profile() {
  interface InputInt {
    label: string;
  }
  const Input: React.FC<InputInt> = ({ label }) => {
    return (
      <div className="flex gap-1">
        <b>{label}</b>
        <input
          className="border-0 border-b-[1px] border-[#D9D9D9] focus:outline-none"
          type="text"
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="flex flex-col items-center gap-2 mt-32">
        <div className="w-24 h-24 rounded-full bg-[#D9D9D9]"></div>
        <span className="text-xl text-center">Profile setting</span>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Input label="Name" key={1} />
        <Input label="Surname" key={2} />
        <Input label="Gmail " key={3} />
        <Input label="Work experience" key={4} />
        <Input label="Education" key={5} />
        <Input label="Location" key={6} />
      </div>
      <br />
      <br />
      <br />
      <div>
        <button className="p-3 w-32 text-white bg-[#334155] rounded-xl">
          Continue
        </button>
      </div>
      <Footer />
    </div>
  );
}
