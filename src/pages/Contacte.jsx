
import { Helmet } from 'react-helmet-async';
import Contact from "../components/Contact";
import logoBlack from "../assets/images/logoBlack.png";
import Hero from "../components/Hero";

export default function Contacte() {
  return (
    <>
      <Helmet>
        <title>Contacte | Cosidores de Salt</title>
        <meta name="description" content="Contacta amb l'associació Cosidores de Salt. Estem encantades de rebre les teves consultes, col·laboracions i propostes." />
        <meta property="og:title" content="Contacte | Cosidores de Salt" />
        <meta property="og:description" content="Contacta amb l'associació Cosidores de Salt." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero
        logo={logoBlack}
        // text={`CONTACTA\nA\nSALT`}
        alt="Logo de la página Cosidores"
      />
       <Contact />

    </>
  );
}