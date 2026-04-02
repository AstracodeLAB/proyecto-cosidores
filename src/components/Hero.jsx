import threadHero from "../assets/images/threadTopRed.svg";

export default function Hero({ logo, text, alt }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <img src={logo} alt={alt} className="hero__logo" />
        <p className="hero__text">{text}</p>
      </div>
      <img className="hero__thread" src={threadHero} alt="" />
    </section>
  );
}