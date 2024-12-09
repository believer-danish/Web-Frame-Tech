"use client";
import MyContext from "@/utils/MyContext";
import Image from "next/image";
import { useContext, useState } from "react";

const imgData = [
  "/machine1.png",
  "/machine2.jpg",
  "/machine3.jpg",
  "/machine4.jpg",
];

const ProductDetail = () => {
  const [cnt, setCnt] = useState(1);
  const [img, setImg] = useState(0);
  const data = useContext(MyContext);

  const [isLike, setIsLike] = useState(false);
  const handleLikes = () => {
    setIsLike((prev) => !prev);
    if (isLike) data.setLikes((prev) => prev - 1);
    else data.setLikes((prev) => prev + 1);
  };

  const handleImage = (id) => {
    console.log(id);
    setImg(id);
  };
  return (
    <section className="w-full h-full flex max-xl:flex-col gap-[25px] px-[30px] pb-20">
      {/* left side */}
      <div className=" flex-1 flex flex-col gap-[9px] ">
        <div className="flex gap-[12px] py-3 my-[9px] text-[14px] font-medium font-geist leading-[21px] items-center ">
          <span className="text-[#393939]">Home</span>
          <span className="p-[5px] rounded-full bg-[#9C9C9C]"></span>
          <span className="text-[#9C9C9C]">Art de la table</span>
        </div>

        <div className="w-full relative bg-[#F8F6F4] p-[42px_98px_58px_111px] rounded-lg">
          <div className="flex flex-col gap-2 absolute top-5 left-5">
            {Array.from({ length: 4 }).map((e, i) => (
              <div
                key={i}
                onClick={() => handleImage(i)}
                className="w-max p-2 rounded-lg bg-white overflow-hidden cursor-pointer"
              >
                <Image
                  src={`${i == img ? "/chair2.png" : "/chair3.png"}`}
                  alt="chair image"
                  width={"40"}
                  height={"40"}
                />
              </div>
            ))}
          </div>
          <div className="relative lg:w-[552px] lg:h-[552px] w-full aspect-square ">
            <Image
              src={imgData[img]}
              alt="machine icon"
              fill={true}
              objectFit="cover"
            />
          </div>
        </div>

        <div className="mt-11 flex flex-col gap-[10px] bg-inherit">
          <h1 className="font-cabinet text-xl leading-6  text-gray900">
            Description produit
          </h1>
          <p className="font-geist text-sm text-gray1">
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
            pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit
            pour votre mariage, une fête d'anniversaire ou du personnel, ce
            produit a fait l'objet d'une sélection rigoureuse par notre équipe.
            Il est en location chez nous sous la référence "VAJGC". Nous sommes
            à votre disposition pour que les événements de nos clients, même en
            last-minute, soient toujours une réussite. Vous pourrez trouver tout
            une série d'autre produit à louer de ce type dans la catégorie "Art
            de la Table".
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="  flex-1 pt-[69px] flex flex-col justify-between ">
        <div className=" flex-1 flex flex-col gap-16 justify-between pb-3 ">
          <div>
            <div className="flex justify-between">
              <div className="text-[#111928] flex flex-col gap-[14px]">
                <h1 className="whitespace-pre-wrap font-playfair text-[30px] leading-[37.5px] ">
                  Cheese – appareil à raclette 1/2 roue
                </h1>
                <h1 className="text-2xl leading-[30px] flex gap-2 items-center">
                  39,50€{" "}
                  <span className="text-[#9C9C9C] text-[14px]  leading-4">
                    /pièce
                  </span>
                </h1>
              </div>
              <div
                onClick={handleLikes}
                className={`${
                  isLike && "bg-red-400"
                } p-1 rounded-full self-start cursor-pointer motion-preset-pulse motion-duration-1000 `}
              >
                <Image
                  src="/heart2.png"
                  alt="heart icon"
                  width={"28"}
                  height={"25"}
                />
              </div>
            </div>

            <div className="flex justify-between  mt-3 mb-4 py-5 bg-red-4000 items-center border-y  border-[#9C9C9C]">
              <div className="flex font-geist leading-5 gap-4 ">
                <div className="flex gap-3 items-end">
                  <Image
                    src="/ruler.png"
                    alt="ruler icon"
                    width={"24"}
                    height={"24"}
                  />
                  <span>
                    20<sup>cm</sup>
                  </span>
                </div>
                <div className="flex gap-3 items-end">
                  <Image
                    src="/notallowed.png"
                    alt="ruler icon"
                    width={"25"}
                    height={"25"}
                  />
                  <span>
                    50<sup>cm</sup>
                  </span>
                </div>
              </div>
              <span className="text-[#9C9C9C] font-medium text-xs font-geist leading-4">
                RÉF : VABGN5
              </span>
            </div>

            <div className="text-[#5D5D5D] font-geist text-sm leading-5 flex flex-col">
              <p className="flex flex-col">
                <span>
                  Location appareil à raclette - Raclette traditionnelle 1/2
                  roue
                </span>
                <span>Réglable en hauteur</span>
                <span>Appareil à raclette professionnel</span>
                <span>Boîtier de chauffe horizontal réglable en hauteur</span>
              </p>
              <span className="pt-4"> 220V</span>
              <span> 900W</span>
            </div>
          </div>

          <div className="flex gap-3 ">
            <button className="w-[153px] h-[50px] flex items-center justify-around rounded-md  border border-[#00000021]">
              <span
                onClick={() => setCnt((prev) => prev && prev - 1)}
                className="flex-1  flex justify-center"
              >
                <Image
                  src="/minus.png"
                  alt="minus button"
                  width={"16"}
                  height={"16"}
                />
              </span>
              <span className="font-geist">{cnt}</span>
              <span
                onClick={() => setCnt((prev) => prev + 1)}
                className="flex-1  flex justify-center"
              >
                <Image
                  src="/plus.png"
                  alt="plus button"
                  width={"16"}
                  height={"16"}
                />
              </span>
            </button>
            <button
              className="whitespace-pre flex-1 px-4 font-bold font-cabinet uppercase
           bg-[#5CD2DD] rounded-md leading-5 text-white
           overflow-hidden before:[transition:width_400ms_ease]
           relative   before:absolute before:left-0 before:top-0 before:w-0 before:hover:w-full before:h-full   before:bg-red-400"
            >
              <span className="whitespace-pre-wrap relative ">
                Ajouter au panier
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 font-cabinet font-medium ">
          <div className=" flex justify-between items-center uppercase py-5 px-4 ">
            <span>Livraisons</span>
            <Image src="/plus.png" alt="plus icon" width={"18"} height={"18"} />
          </div>
          <div className=" flex justify-between items-center uppercase  py-5 px-4">
            <span>Questions</span>
            <Image src="/plus.png" alt="plus icon" width={"18"} height={"18"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
