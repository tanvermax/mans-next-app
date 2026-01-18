"use client"
import Banner from "./Componet/MainLayout/Banner/Banner";
import Section1 from "./Componet/MainLayout/Section1.jsx/Section1";
import Ourservice from "./Componet/MainLayout/OurService/Ourservice";
import HomePortfolio from "./Componet/MainLayout/HomePortfolio/HomePortfolio";
import Newspart from "./Componet/MainLayout/NewsPart/Newspart";
import Amessage from "./Componet/MainLayout/Amessage/Amessage";
import StatsSection from "./Componet/MainLayout/StatsSection/StatsSection.";
import Ourclient from "./Componet/MainLayout/Ourclinet/Ourclient";
import Mansphoto from "./Componet/MainLayout/Mansphoto/Mansphoto";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
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
