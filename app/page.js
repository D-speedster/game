import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import MainBanner from "@/components/Home/MainBanner";
import Features from "@/components/Home/Features";
import Trending from "@/components/Home/Trending";
import Most_played from "@/components/Home/Most_played";
import Categories from "@/components/Home/Categories";
import Footer from "@/components/Footer";
import Cta from "@/components/Home/Cta";
export default function Home() {
  return (
    <>
      <Header></Header>
      <MainBanner></MainBanner>
      <Features></Features>
      <Trending></Trending>
      <Most_played></Most_played>
      <Categories></Categories>
      <Cta></Cta>
      <Footer></Footer>
    </>
  );
}
