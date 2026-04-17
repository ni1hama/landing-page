import { Link } from "react-router-dom";

const capabilities = [
  { title: "Feature One", description: "TODO: describe this feature." },
  { title: "Feature Two", description: "TODO: describe this feature." },
  { title: "Feature Three", description: "TODO: describe this feature." },
  { title: "Feature Four", description: "TODO: describe this feature." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-brand-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-purple/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="text-brand-400 text-sm font-mono mb-5 tracking-wide">
            Your Company
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-6 text-white max-w-4xl">
            Headline goes
            <br />
            here.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            TODO: short subheadline explaining what you do.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="px-7 py-3.5 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-semibold transition-colors shadow-glow"
            >
              About Us
            </a>
            <Link
              to="/support"
              className="px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold transition-colors border border-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What we build
          </h2>
          <p className="text-white/50 text-lg mb-14 max-w-xl">
            TODO: section intro.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {c.title}
                </h3>
                <p className="text-white/50 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            About us
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              TODO: describe the team and mission.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              TODO: location / legal entity.
            </p>
            <div className="text-sm text-white/40 space-y-1">
              <p>
                <a
                  href="mailto:hello@example.com"
                  className="hover:text-white transition-colors"
                >
                  hello@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
