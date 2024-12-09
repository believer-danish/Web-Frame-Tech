import Image from "next/image";

const Footer = () => {
  return (
    <footer className="font-cabinet font-bold border-t pb-[417px] pt-10">
      <div className="my-container flex justify-between max-md:flex-col ">
        {/* Links */}
        <div className="flex  gap-10">
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="logo" width={"133"} height={"66"} />
          </div>

          <div className="flex max-md:flex-col gap-20">
            <div>
              <h1 className="text-[18px]">INFOS PRATIQUES</h1>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                À propos
              </h2>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                Livraisons & Reprises
              </h2>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                Mode d’emploi
              </h2>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                F.A.Q
              </h2>
            </div>
            <div>
              <h1 className="text-[18px]">LÉGAL</h1>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                Mentions légales
              </h2>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                CGU
              </h2>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                CGV
              </h2>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                Politique de confidentialité
              </h2>
            </div>
            <div>
              <h1 className="text-[18px]">MON COMPTE</h1>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                Accéder à mon compte
              </h2>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                Ma liste d’envie
              </h2>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                Créer un compte
              </h2>
              <h2 className="font-geist text-sm font-normal text-gray3939">
                Mot de passe oublié
              </h2>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center flex flex-col gap-3 items-center justify-center mt-8">
          <h1>NOUS SUIVRE</h1>
          <div className="flex gap-3">
            <div className="p-2 relative border rounded-lg cursor-pointer">
              <Image
                src={"/twitter.png"}
                alt="twitter icon"
                width={"22"}
                height={"22"}
              />
            </div>
            <div className="p-2 relative border rounded-lg cursor-pointer">
              <Image
                src={"/instagram.png"}
                alt="twitter icon"
                width={"22"}
                height={"22"}
              />
            </div>
            <div className="p-2 relative border rounded-lg cursor-pointer">
              <Image
                src={"/linkedin.png"}
                alt="twitter icon"
                width={"22"}
                height={"22"}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
