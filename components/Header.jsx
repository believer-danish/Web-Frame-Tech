import Image from "next/image";

const Header = () => {
  return (
    <header className="flex pt-8 pl-7 pr-5">
      <div className="flex gap-[11px] items-center flex-1">
        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="logo" width={"133"} height={"65"} />
        </div>

        {/* SearchBar */}
        <div className="flex   w-full p-4 gap-2 max-w-3xl items-center justify-center">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Rechercher un produit"
            className="border-none outline-none flex-1 placeholder:text-[#667482]"
          />

          <Image
            src="/search.png"
            alt="search icon"
            width={"49"}
            height={"50"}
          />
        </div>
      </div>

      {/*Navigation Links*/}
      <nav className="bg-red-300  flex gap-3 w-max">
        <div className="flex items-center gap-1 padding-[10px]">
          <Image src="/bulb.png" alt="bulb icon" width={"20"} height={"20"} />
          <span>Inspirations</span>
        </div>
        <div className="flex items-center gap-1 padding-[10px]">
          <Image src="/heart.png" alt="heart icon" width={"20"} height={"20"} />
          <span>Mes favoris</span>
          <span>24</span>
        </div>
        <div className="flex items-center gap-1 padding-[10px]">
          <Image
            src="/shopping.png"
            alt="shopping icon"
            width={"20"}
            height={"20"}
          />
          <span>Panier</span>
        </div>
        <div className="flex items-center gap-1 padding-[10px]">
          <span className="w-11 h-11 rounded-full bg-[#EAEDEE]"></span>
          <select name="language" id="language" className="bg-transparent">
            <option value="Fr">Fr</option>
            <option value="En">En</option>
            <option value="Hi">Hi</option>
          </select>
        </div>
      </nav>

      {/* Product List */}
    </header>
  );
};

export default Header;
