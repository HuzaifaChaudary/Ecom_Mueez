"use client";
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Detailcards from "@/components/Bags/Detailcards";
import Link from "next/link";
import Hero from "@/components/Hero/Herosection";
import Anloader from "@/components/Loader/Anloader";
import Footer from "@/components/Footer/Footersection";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  // Create a ref for the Crossbody Bags section
  const crossbodyBagsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const bags = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bags-get`).then((res) =>
          res.json()
        );
        const glasses = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/glasses-get`).then((res) =>
          res.json()
        );
        const watches = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/watches-get`).then((res) =>
          res.json()
        );

        setProducts(bags);
        setGlasses(glasses);
        setWatches(watches);

        console.log(bags);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Function to scroll to the Crossbody Bags section
  const scrollToCrossbodyBags = () => {
    if (crossbodyBagsRef.current) {
      crossbodyBagsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {loading ? (
        <>
          <Anloader />
        </>
      ) : (
        <>
          {/* Pass the scroll function to the Hero component */}
          <Hero onShopNowClick={scrollToCrossbodyBags} />

          {/* Add ref to the Crossbody Bags section */}
          <div ref={crossbodyBagsRef} className="container mx-auto px-4 py-6">
            <Link href="/bags">
              <div className="block">
                <h2 className="text-2xl font-bold text-center bg-gray-100 w-fit mx-auto px-4 py-2 rounded-md text-gray-900">
                  Crossbody Bags
                </h2>
                <div className="flex flex-wrap justify-center mt-6 gap-6">
                  {products.slice(-3).map((product, index) => (
                    <Detailcards key={index} product={product} />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <button className="btn bg-slate-700 text-white rounded hover:bg-slate-800 transition-colors px-6 py-2">
                    View All
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* Glasses */}
          <div className="px-4 py-8">
            <div className="container mx-auto">
              <Link href="/glasses">
                <div className="block">
                  <h2 className="text-2xl font-bold text-center bg-gray-100 w-fit mx-auto px-4 py-2 rounded-md text-gray-900">
                    Glasses
                  </h2>
                  <div className="flex flex-wrap justify-center mt-6 gap-6">
                    {glasses.slice(-3).map((product, index) => (
                      <Detailcards key={index} product={product} />
                    ))}
                  </div>
                  <div className="text-center mt-4">
                    <button className="btn bg-slate-700 text-white rounded hover:bg-slate-800 transition-colors px-6 py-2">
                      View All
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Watches */}
          <div className="container mx-auto px-4 py-6">
            <Link href="/watches">
              <div className="block">
                <h2 className="text-2xl font-bold text-center bg-gray-100 w-fit mx-auto px-4 py-2 rounded-md text-gray-900">
                  Watches
                </h2>
                <div className="flex flex-wrap justify-center mt-6 gap-6">
                  {watches.slice(-3).map((product, index) => (
                    <Detailcards key={index} product={product} />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <button className="btn bg-slate-700 text-white rounded hover:bg-slate-800 transition-colors px-6 py-2">
                    View All
                  </button>
                </div>
              </div>
            </Link>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;