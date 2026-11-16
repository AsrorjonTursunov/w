import retro from "../assets/Bitmap.jpg";
import laptops from "../assets/keyboard.jpg";
import gaming from "../assets/console.jpg";
import "./Popular.css";

function Popular() {
  return (
    <section
      id="popular"
      className="popular-grid"
      aria-label="Popular articles"
    >
      <article className="popular-card">
        <img src={retro} alt="Eski kompyuterlar" />
        <div>
          <span className="popular-number">01</span>
          <h2>Reviving Retro PCs</h2>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </article>

      <article className="popular-card">
        <img src={laptops} alt="Noutbuklar" />
        <div>
          <span className="popular-number">02</span>
          <h2>Top 10 Laptops of 2022</h2>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </article>

      <article className="popular-card">
        <img src={gaming} alt="O‘yin boshqaruvchisi" />
        <div>
          <span className="popular-number">03</span>
          <h2>The Growth of Gaming</h2>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </article>
    </section>
  );
}
export default Popular;
