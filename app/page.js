"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import ProductList from "@/components/ProductList";
import MyContext from "@/utils/MyContext";
import { useState } from "react";

export default function Home() {
  const [likes, setLikes] = useState(0);
  const obj = {
    likes: likes,
    setLikes: setLikes,
  };
  return (
    <main className="  ">
      <MyContext.Provider value={obj}>
        <Header />
        <ProductList />
        <MainContent />
        <Footer />
      </MyContext.Provider>
    </main>
  );
}
