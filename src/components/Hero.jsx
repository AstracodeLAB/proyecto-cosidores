import threadHero from "../assets/images/threadTop.svg";

export default function Hero({ logo, text, alt }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <img src={logo} alt={alt} className="hero__logo" />
        <h1 className="hero__text">{text}</h1>
        <img className="hero__thread" src={threadHero} alt="" />
      </div>
    </section>
  );
}