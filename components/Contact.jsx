import Image from "next/image";

const Contact = () => {
  return (
    <section className=" px-5 pb-24 flex gap-6 flex-wrap   justify-center   ">
      {/* left side */}
      <div className="relative    w-[700px] bg-green-500 h-[300px] rounded-xl overflow-hidden">
        <Image src={"/buffet.png"} fill={true} alt="buffet image" />
      </div>

      {/* right side  */}
      <div className="w-[818px] bg-[#FFF3F9] rounded-xl p-9 flex gap-5 flex-col  ">
        <h1 className="font-cabinet font-medium text-[43px]">
          S’inscrire & économiser <span className="text-[#5CD2DD]">10%</span>
        </h1>
        <p className="font-geist font-medium text-sm text-[#BDA2B0]">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didn't. Yet busy any meeting shark
          light marginalised 4-blocker message. Productize corporate nail caught
          synergy highlights lunch. Company another pushback items dear or any.
        </p>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="john@doe.com"
            className="flex-1 outline-none px-4 border rounded-lg"
          />
          <div className="bg-[#5CD2DD] text-white flex font-cabinet font-bold text-[18px]  items-center justify-center uppercase gap-2  p-4 rounded-lg">
            S’inscrire
            <div className="w-3 h-3 rotate-180 ">
              <Image src="/left_arrow.png" alt="arrow" fill={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
