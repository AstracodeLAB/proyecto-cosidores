import Header from "../components/Header";
import Hero from "../components/Hero";
import Manifest from "../components/Manifest";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import logoBlack from "../assets/images/logoBlack.png";

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        logo={logoBlack}
        text={`FET\nA\nSALT`}
        alt="Logo de la página Cosidores"
      />
      <Manifest />
      <Contact />
      <Footer />
    </>
  );
}