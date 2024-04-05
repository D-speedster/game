import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import Features from "@/components/Features";
import Trending from "@/components/Trending";
import Most_played from "@/components/Most_played";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
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
