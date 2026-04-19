import { Link } from "react-router-dom";

const work = [
  { year: "2026", title: "Project alpha", note: "TODO: one-line description." },
  { year: "2026", title: "Project beta", note: "TODO: one-line description." },
  { year: "2025", title: "Project gamma", note: "TODO: one-line description." },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-20">
        <span className="chip">Your Company</span>
        <h1 className="mt-6 max-w-measure font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-stone-900 md:text-6xl">
          Headline goes here, on a single considered line.
        </h1>
        <p className="mt-6 max-w-measure text-lg text-stone-600">
          TODO: short subheadline explaining what you do and for whom.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="btn-primary">
            See the work
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </div>
      </section>

      <div className="rule mx-auto max-w-5xl" />

      <section id="work" className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-semibold text-stone-900">
            Selected work
          </h2>
          <span className="text-xs uppercase tracking-widest text-stone-500">
            TODO
          </span>
        </div>
        <ul className="divide-y divide-stone-200 border-y border-stone-200">
          {work.map((w) => (
            <li
              key={w.title}
              className="flex items-baseline justify-between gap-6 py-5"
            >
              <div>
                <p className="font-medium text-stone-900">{w.title}</p>
                <p className="text-sm text-stone-500">{w.note}</p>
              </div>
              <span className="font-mono text-xs text-stone-400">{w.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="rule mx-auto max-w-5xl" />

      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900">
          Get in touch
        </h2>
        <p className="mt-4 max-w-measure text-stone-600">
          TODO: a short sentence about how you prefer to be contacted.
        </p>
        <p className="mt-6 text-sm text-stone-500">
          Email{" "}
          <a
            href="mailto:hello@example.com"
            className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            hello@example.com
          </a>
          {" · "}
          <Link
            to="/legal"
            className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Legal
          </Link>
        </p>
      </section>
    </>
  );
}
