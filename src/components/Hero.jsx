import "@/styles/hero.scss";

export function Hero() {
  return (
    <main>
      <div className="about">
        <img src="/alihanayaz.png" alt="alihan ayaz"></img>
        <h1>
          frontend developer <br />
          <span>based in Istanbul.</span>
        </h1>
      </div>
      <div className="contact">
        <h2>Lorem ipsum dolor</h2>
        <a href="#">Resume</a>
      </div>
    </main>
  );
}
