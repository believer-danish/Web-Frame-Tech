import Image from "next/image";

const Card = () => {
  return (
    <div className=" flex flex-col gap-3">
      <div className="bg-[#F9F7F5] py-5 px-3 rounded-md pb-[60px] ">
        <div className="flex items-center justify-between ">
          <Image
            src="/heart2.png"
            alt="heart icon"
            width={"27"}
            height={"27"}
          />
          <span className="text-[10px] font-geist font-medium text-[#111928]">
            Art de la table
          </span>
        </div>

        <div className=" flex items-center justify-center">
          <div className="relative w-56 h-56  mt-8 mx-[40px]  ">
            <Image src="/table.png" alt="table image" fill={true} />
          </div>
        </div>
      </div>

      <div className="flex flex-col p-2">
        <h1 className="flex items-center justify-between">
          <span className="font-playfair text-2xl">Title</span>
          <span className="font-geist text-2xl font-medium text-gray3939">
            0 <sup className="text-sm">€</sup>
          </span>
        </h1>

        <div className="flex justify-between h-[18px] items-center text-gray1 font-geist text-sm">
          <p>
            0,35€/Pièce · <span className="text-[10px]">RÉF : VABGN5</span>
          </p>
          <span className="font-medium bg-[#F1F4F6] px-2 py-1 rounded-2xl text-[11px]">
            20 pièces
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
