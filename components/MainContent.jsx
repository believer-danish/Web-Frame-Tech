import Contact from "./Contact";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import Services from "./Services";
import Slider from "./Slider";

const MainContent = () => {
  return (
    <main className="my-container  ">
      <ProductDetail />
      <Slider />
      <Products />
      <Services />
      <Contact />
    </main>
  );
};

export default MainContent;
