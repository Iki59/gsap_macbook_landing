import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playBackRate = 2;
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="Macbook Title" />

        <video src="/videos/hero.mp4" autoPlay muted playsInline />

        <button>Buy</button>

        <p>From $1599 or $133/mo for 12 months</p>
      </div>
    </section>
  );
};

export default Hero;
