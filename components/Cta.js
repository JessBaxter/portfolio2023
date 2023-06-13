import Link from "next/link";

export default function Cta() {
  return (
    <section id="cta" className="m-auto py-20 bg-primary">
      <section className="flex flex-col justify-center">
        <p className="font-bold text-center text-white text-1xl md:text-4xl py-10 px-2">
          I'm actively looking for new opportunities.
          <br />
          Why not drop me a line today!
        </p>
        <div className="flex w-full justify-center">
          <button className="btn btn-secondary drop-shadow-md">
            <a
              href="https://www.linkedin.com/in/jess-baxter-dev/"
              alt="Contact me via LinkedIn"
              aria-label="My LinkedIn profile"
              target="_blank"
              className="text-primary">
              LinkedIn
            </a>
          </button>
        </div>
      </section>
    </section>
  );
}
