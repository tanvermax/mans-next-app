

import Banner from "./Componet/MainLayout/Banner/Banner";
import Section1 from "./Componet/MainLayout/Section1.jsx/Section1";
import Ourservice from "./Componet/MainLayout/OurService/Ourservice";
import HomePortfolio from "./Componet/MainLayout/HomePortfolio/HomePortfolio";
import Newspart from "./Componet/MainLayout/Blog/Newspart";
import Amessage from "./Componet/MainLayout/Amessage/Amessage";
import StatsSection from "./Componet/MainLayout/StatsSection/StatsSection.";
import Ourclient from "./Componet/MainLayout/Ourclinet/Ourclient";
import Mansphoto from "./Componet/MainLayout/Mansphoto/Mansphoto";
import { Suspense } from "react";

export const metadata = {
  title: "Custom Packaging Boxes Wholesale in Bangladesh | MANS Packaging",
  description: "Get high-quality, custom-designed packaging boxes in bulk. We offer eco-friendly cardboard boxes, competitive pricing, and fast delivery in Dhaka.",
  openGraph: {
    title: "MANS Packaging | Custom Shipping & Carton Boxes",
    description: "Wholesale & Bulk Orders for E-commerce, Food, and Industrial packaging.",
    images: ['/og-image-packaging.jpg'], // Make sure to put an image in your public folder
  },
};



export default function Home() {
  return (
    <div className="">
      <div className="min-h-[400px] md:min-h-[500px] lg:min-h-[700px]">
      <Banner/>
    </div>
      <Section1 />
      <Mansphoto />
      <Ourservice />
      <HomePortfolio />
      <Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse" />}>
        <Newspart />
      </Suspense>
      <Amessage />
      <StatsSection />
      <Ourclient />
    </div>
  );
}
