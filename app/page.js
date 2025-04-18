import Image from "next/image";
import Header from "./Components/Header";
import IntroSection from "./Components/IntroSection";
import FeaturesSection from "./Components/FeatureSection";
import ActionSection from "./Components/ActionSection";
import Footer from "./Components/Footer";


export default function Home() {
  return (

    <>
    <Header />
    <IntroSection />
    <FeaturesSection />
    <ActionSection />
    <Footer />

    </>
  );
}
