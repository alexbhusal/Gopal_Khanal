"use client";
import Load from "@/Components/Animation/Load";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Load />
        </div>
      ):(
        <>
        <Hero/>
        <Footer/>
        </>
      )}
    </>
  );
}
