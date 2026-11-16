import logo from "../assets/logo.jpg";

function Section() {
  return (
    <section className="mt-10 grid grid-cols-[2fr_1fr] gap-7">
      <article>
        <img
          src={logo}
          alt="Rangli geometrik shakllar"
          className="aspect-[2.4/1] w-full object-cover"
        />

        <div className="mt-6 grid grid-cols-2 gap-5">
          <h1 className="text-6xl leading-none font-extrabold text-[#00001a]">
            The Bright Future of Web 3.0?
          </h1>

          <div className="flex flex-col items-start justify-between gap-5">
            <p className="text-sm leading-6 text-[#5d5f79]">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <button
              type="button"
              className="bg-[#f15e50] px-7 py-3 text-xs font-bold tracking-[0.25em] text-white uppercase"
            >
              Read More
            </button>
          </div>
        </div>
      </article>

      <aside id="new" className="bg-[#00001a] p-6 text-white">
        <h2 className="text-4xl font-bold text-[#e9ab53]">New</h2>

        <article className="border-b border-white/25 py-6">
          <h3 className="text-lg font-bold">Hydrogen VS Electric Cars</h3>
          <p className="mt-1 text-sm leading-6 text-[#c5c6ce]">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </article>

        <article className="border-b border-white/25 py-6">
          <h3 className="text-lg font-bold">The Downsides of AI Artistry</h3>
          <p className="mt-1 text-sm leading-6 text-[#c5c6ce]">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </article>

        <article className="pt-6">
          <h3 className="text-lg font-bold">Is VC Funding Drying Up?</h3>
          <p className="mt-1 text-sm leading-6 text-[#c5c6ce]">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </article>
      </aside>
    </section>
  );
}

export default Section;
