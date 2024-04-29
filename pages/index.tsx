import { useEffect, useState } from "react";
import About from "../components/About";
import Category from "../components/category/Category";
import Discount from "../components/Discount";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Loader from "../components/Loader";
import Navbar from ".././components/navbar/Navbar";
import NewArrival from "../components/newArrivals/NewArrival";
import NewLetter from "../components/NewLetter";
import TrickOrTreat from "../components/trickOrtreat/TrickOrTreat";
import "animate.css";
import BackToTop from "../components/BackToTop";

export default function Index() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-gradient-to-r from-body-start to-body-end w-full h-full min-h-screen flex justify-center items-center ">
          <Loader />
        </div>
      ) : (
        <div className="bg-gradient-to-r from-body-start to-body-end w-full h-full min-h-screen">
          <Navbar />
          <div className="pt-20 ">
            <Home />
            <Category />
            <About />
            <TrickOrTreat />
            <Discount />
            <NewArrival />
            <NewLetter />
            <Footer />
          </div>
          <BackToTop />
        </div>
      )}
    </>
  );
}
