import { Link } from "react-router-dom";

const capabilities = [
  {
    id: "01",
    title: "Agent runtimes",
    body: "Production-grade orchestration for multi-step LLM workflows: planning, tool use, memory, recovery, and evaluation — wired into real software systems.",
  },
  {
    id: "02",
    title: "Developer tooling",
    body: "Libraries and CLIs that let small teams build, test, and ship agents the same way they ship software. Typed, reproducible, deployable.",
  },
  {
    id: "03",
    title: "Applied products",
    body: "End-user applications where an LLM agent is the interface — native apps and web clients backed by our own infrastructure.",
  },
  {
    id: "04",
    title: "Deployment infrastructure",
    body: "Hosted runtimes, observability, and cost controls that make agent systems safe to operate at scale, on third-party models and our own inference.",
  },
];

const principles = [
  {
    k: "Engineering first",
    v: "Agents are software. We design for testability, observability, and blast-radius control before cleverness.",
  },
  {
    k: "Accessible by default",
    v: "The goal is not an agent for specialists. It is an agent anyone on a laptop or a phone can use to get real work done.",
  },
  {
    k: "Model-agnostic",
    v: "We build on the frontier but tie ourselves to no single provider. Our systems are portable across the major model families.",
  },
  {
    k: "Honest about limits",
    v: "We ship what works now, document what doesn't, and measure regressions. No demo-ware.",
  },
];

const facts = [
  { k: "Company", v: "PPKA.AI" },
  { k: "Headquarters", v: "Singapore" },
  { k: "Founded", v: "2025" },
  { k: "Focus", v: "Agent engineering · LLM systems" },
  { k: "Stage", v: "Building in production" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]"
        />
        <div className="flex items-center gap-3">
          <span className="chip">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            />
            PPKA.AI · Singapore
          </span>
          <span className="section-label hidden sm:inline">
            Est. 2025 / Agent engineering
          </span>
        </div>
        <h1 className="mt-8 max-w-[22ch] font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-stone-900 md:text-6xl">
          Software and LLM agents,
          <br className="hidden md:block" />
          engineered for{" "}
          <span className="italic text-emerald-700">everyone</span>.
        </h1>
        <p className="mt-8 max-w-measure text-lg leading-relaxed text-stone-600">
          PPKA.AI is an AI-native team in Singapore. We bring world-class agent
          engineering to the systems people actually use — shipping reliable
          runtimes, developer tooling, and applied products where an LLM agent
          is the interface.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="btn-primary">
            See what we build
          </a>
          <a href="#company" className="btn-ghost">
            About the company
          </a>
        </div>
      </section>

      <div className="rule mx-auto max-w-5xl" />

      {/* What we build */}
      <section id="work" className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">§ 01 — What we build</p>
            <h2 className="mt-3 max-w-measure font-serif text-3xl font-semibold leading-tight text-stone-900 md:text-4xl">
              Four surfaces, one stack.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-stone-600">
            Each surface is a product in its own right. Together they form the
            complete path from model to end-user.
          </p>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2">
          {capabilities.map((c) => (
            <li key={c.id} className="bg-white p-7">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-xl font-semibold text-stone-900">
                  {c.title}
                </h3>
                <span className="font-mono text-xs text-stone-400">{c.id}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="rule mx-auto max-w-5xl" />

      {/* Principles */}
      <section id="principles" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="section-label">§ 02 — Principles</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-stone-900 md:text-4xl">
              How we work.
            </h2>
            <p className="mt-5 max-w-sm text-sm text-stone-600">
              Four commitments that shape every decision, from architecture to
              API surface to release cadence.
            </p>
          </div>
          <dl className="divide-y divide-stone-200 border-y border-stone-200">
            {principles.map((p) => (
              <div key={p.k} className="grid grid-cols-[140px_1fr] gap-6 py-5">
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500">
                  {p.k}
                </dt>
                <dd className="text-sm leading-relaxed text-stone-700">
                  {p.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="rule mx-auto max-w-5xl" />

      {/* Mission */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="section-label">§ 03 — Mission</p>
        <blockquote className="mt-5 max-w-3xl font-serif text-2xl leading-snug text-stone-900 md:text-3xl">
          <span className="text-emerald-700">“</span>
          We believe agent engineering should not be a privilege of frontier
          labs. Our work is to make the best of it — the runtimes, the tooling,
          the finished products — available to anyone who wants to build or use
          software that thinks.
          <span className="text-emerald-700">”</span>
        </blockquote>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
          — The PPKA.AI team
        </p>
      </section>

      <div className="rule mx-auto max-w-5xl" />

      {/* Company */}
      <section id="company" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="section-label">§ 04 — Company</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-stone-900 md:text-4xl">
              PPKA.AI at a glance.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-600">
              PPKA.AI is an independent engineering team headquartered in
              Singapore. We are a registered operating business focused on
              applied AI — not a research lab, not a consultancy.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white">
            <dl>
              {facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`grid grid-cols-[140px_1fr] gap-6 px-6 py-4 ${
                    i !== facts.length - 1 ? "border-b border-stone-200" : ""
                  }`}
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500">
                    {f.k}
                  </dt>
                  <dd className="text-sm text-stone-900">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-stone-600">
          <Link
            to="/legal#privacy"
            className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Privacy Policy
          </Link>
          <span className="text-stone-300">·</span>
          <Link
            to="/legal#terms"
            className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Terms of Service
          </Link>
        </div>
      </section>
    </>
  );
}
