"use client";
import { useState } from "react";

const ProductList = () => {
  const [active, setActive] = useState(0);

  const productList = [
    "Art de la table",
    "Mobilier",
    "Nappage",
    "Matériel de salle",
    "Cuisine",
    "Barbecue",
    "Tente",
    "Chauffage",
    "Podium - Piste de danse",
    "Son et lumière",
    "Packs",
    "Consommables",
  ];
  return (
    <div className=" font-inter   border-b border-[rgba(229,_231,_235,_1)]  overflow-x-scroll [scrollbar-width:none]  mt-8">
      <div className="my-container max-md:pl-4  pl-7 flex gap-[38px] text-[14px] [line-height:21px] font-medium w-max">
        {productList.map((product, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`uppercase whitespace-pre cursor-pointer border-b-2  hover:border-gray-400  text-gray-500 pb-4
            ${
              active == i
                ? "border-[rgba(0,_147,_208,_1)] text-[rgba(0,_147,_208,_1)] font-bold"
                : "border-white"
            }
            hover:motion-preset-shake  `}
          >
            {product}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
