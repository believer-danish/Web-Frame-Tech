import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <main className="w-full max-w-[1600px] mx-auto ">
      <Header />
      <MainContent />
      <Footer />
    </main>
  );
}
