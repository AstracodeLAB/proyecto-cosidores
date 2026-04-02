import { Helmet } from 'react-helmet-async';
import Hero from "../components/Hero";
import Manifest from "../components/Manifest";
import Contact from "../components/Contact";
import logoBlack from "../assets/images/logoBlack.png";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Cosidores de Salt</title>
        <meta name="description" content="Cosidores de Salt és una associació dedicada a la costura i el tèxtil. Descobreix els nostres tallers, projectes i comunitat." />
        <meta property="og:title" content="Inici | Cosidores de Salt" />
        <meta property="og:description" content="Cosidores de Salt és una associació dedicada a la costura i el tèxtil." />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="visually-hidden">Associació de costura de Salt</h1>
      
      <Hero
        logo={logoBlack}
        text={`FET\nA\nSALT`}
        alt="Logo de la página Cosidores"
      />
      <Manifest />
      <Contact />
    </>
  );
}