import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="w-full max-w-[928px] mx-auto pt-[66px] pb-[130px] text-center">
      {/* Heading */}
      <div className="font-cabinet font-medium text-4xl pb-11">
        <h1>
          On s’occupe de{" "}
          <span className="font-extrabold text-[#5CD2DD]">tout</span>
        </h1>
        <p className="pt-2 font-geist text-gray1 text-sm">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>

      {/* Services */}

      <div className="flex gap-[86px] max-lg:flex-col">
        <div className="flex flex-col gap-3 justify-center max-lg:items-center relative before:absolute  before:left-16 before:bg-gray-600 lg:before:h-[1px] before:w-full before:top-6">
          <Image
            src="/trolley.png"
            alt="trolley image"
            width={"56"}
            height={"51"}
          />
          <h1 className="font-cabinet font-medium text-xl leading-[22px] text-[#393939]  whitespace-pre">
            Livraison & Reprise
          </h1>
          <h2 className="font-geist text-sm text-gray1">Selon vos besoins</h2>
        </div>

        <div className="flex flex-col gap-3 justify-center max-lg:items-center relative before:absolute before:left-16 before:bg-gray-600 lg:before:h-[1px] before:w-full before:top-6">
          <Image src="/dish.png" alt="dish image" width={"61"} height={"51"} />
          <h1 className="font-cabinet font-medium text-xl leading-[22px] text-[#393939]  whitespace-pre">
            Nettoyage
          </h1>
          <h2 className="font-geist text-sm text-gray1">Selon vos besoins</h2>
        </div>

        <div className="flex flex-col gap-3 justify-center max-lg:items-center relative before:absolute before:left-16 before:bg-gray-600 lg:before:h-[1px] before:w-full before:top-6">
          <Image
            src="/shoppingcart.png"
            alt="shoppingcart image"
            width={"51"}
            height={"51"}
          />
          <h1 className="font-cabinet font-medium text-xl leading-[22px] text-[#393939]  whitespace-pre">
            Commande Illimitée
          </h1>
          <h2 className="font-geist text-sm text-gray1">Tout est possible</h2>
        </div>
        <div className="flex flex-col gap-3 justify-center max-lg:items-center">
          <Image src="/van.png" alt="van image" width={"62"} height={"54"} />
          <h1 className="font-cabinet font-medium text-xl leading-[22px] text-[#393939]  whitespace-pre">
            Transport & Enlèvement
          </h1>
          <h2 className="font-geist text-sm text-gray1">
            On s’occupe de tout.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
