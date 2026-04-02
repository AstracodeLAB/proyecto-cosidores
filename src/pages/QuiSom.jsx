import { Helmet } from 'react-helmet-async';

export default function QuiSom() {
  return (
    <>
      <Helmet>
        <title>Qui Som | Cosidores de Salt</title>
        <meta name="description" content="Coneix qui som les Cosidores de Salt. Una associació de dones que cosim, creem i compartim valors a través del tèxtil." />
        <meta property="og:title" content="Qui Som | Cosidores de Salt" />
        <meta property="og:description" content="Coneix qui som les Cosidores de Salt. Una associació de dones que cosim, creem i compartim valors a través del tèxtil." />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="visually-hidden">Qui som les Cosidores de Salt</h1>
      
      <section className="qui-som">
        <p>Contenido estático aquí.</p>
      </section>
    </>
  );
}