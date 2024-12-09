import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="  ">
      <Header />
      <ProductList />
      <MainContent />
      <Footer />
    </main>
  );
}
