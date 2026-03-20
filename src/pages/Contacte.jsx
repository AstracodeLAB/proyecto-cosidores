
import Contact from "../components/Contact";
import logoBlack from "../assets/images/logoBlack.png";
import Hero from "../components/Hero";

export default function Contacte() {
  return (
    <>
  
      <Hero
        logo={logoBlack}
        // text={`CONTACTA\nA\nSALT`}
        alt="Logo de la página Cosidores"
      />
       <Contact />

    </>
  );
}