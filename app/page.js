import Header from "@/components/Header";
import MainBanner from "@/components/Home/MainBanner";
import Features from "@/components/Home/Features";
import Trending from "@/components/Home/Trending";
import Most_played from "@/components/Home/Most_played";
import Categories from "@/components/Home/Categories";
import Footer from "@/components/Footer";
import Cta from "@/components/Home/Cta";
import Offer from "@/components/Home/Offer";


export default function Home() {
  

  return (
    <div>
      <Header></Header>
      <MainBanner></MainBanner>
      <Features></Features>
      <Trending title1='پرفروش ترین ها' title2='پرفروش ترین بازی ها'></Trending>
      <Offer></Offer>
      <Trending title1='جدیدترین ها' title2='جدیدترین ترین بازی ها'></Trending>

      <Most_played></Most_played>
      <Categories></Categories>
      <Cta></Cta>
      <Footer></Footer>


    </div>
  )
}
