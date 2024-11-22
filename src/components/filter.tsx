export default function Filter() {
  return (
    <div className="p-4 flex flex-col gap-2 w-64 h-72">
      <div className="flex flex-col">
        <b>Work Format</b>
        <div className="flex justify-between">
          <button className="bg-[#F0ECEC] p-1 rounded-2xl h-7 items-center flex w-16 justify-center">
            Remote
          </button>
          <button className="bg-[#F0ECEC] p-1 rounded-2xl h-7 items-center flex w-16 justify-center">
            Hybrid
          </button>
          <button className="bg-[#F0ECEC] p-1 rounded-2xl h-7 items-center flex w-16 justify-center">
            Offline
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <b>Experience</b>
        <div className="flex justify-between">
          <button className="bg-[#F0ECEC] p-1 rounded-2xl h-7 items-center flex w-16 justify-center">
            5-10
          </button>
          <button className="bg-[#F0ECEC] p-1 rounded-2xl h-7 items-center flex w-16 justify-center">
            1-4
          </button>
          <button className="bg-[#F0ECEC] p-1 rounded-2xl h-7 items-center flex w-16 justify-center">
            None
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <b>Salary filters</b>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Write a numbers..."
            className="bg-[#F0ECEC] rounded-[20px] p-2 w-40"
          />
          <button className="bg-[#0F172A] text-white rounded-xl p-2">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
