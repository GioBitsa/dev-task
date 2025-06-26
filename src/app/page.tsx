import AboutCasino from "@/components/AboutCasino";
import ScrollableList from "@/components/common/ScrollableList";
import CryptoAdvert from "@/components/CryptoAdvert";
import HeroPhotoGrid from "@/components/HeroPhotoGrid";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <HeroPhotoGrid />
      <ScrollableList
        title="Featured Games"
        icon="/icons/featured-games.svg"
        imagesList={["/images/demo-single-game.png"]}
      />
      <CryptoAdvert />
      <AboutCasino />
    </>
  );
}
