import Banner from "./Componet/MainLayout/Banner";
import Section1 from "./Componet/MainLayout/Section1.jsx/Section1";
import Mansphoto from "./Componet/MainLayout/Mansphoto/Mansphoto";
import Ourservice from "./Componet/MainLayout/OurService/Ourservice";
import HomePortfolio from "./Componet/MainLayout/HomePortfolio/HomePortfolio";
import Newspart from "./Componet/MainLayout/NewsPart/Newspart";
import Amessage from "./Componet/MainLayout/Amessage/Amessage";
import StatsSection from "./Componet/MainLayout/StatsSection/StatsSection.";
import Ourclient from "./Componet/MainLayout/Ourclinet/Ourclient";

export default function Home() {
  return (
   <div>
    <Banner/>
    <Section1/>
    <Mansphoto/>
    <Ourservice/>
    <HomePortfolio/>
    <Newspart/>
    <Amessage />
    <StatsSection/>
    <Ourclient/>
   </div>
  );
}
