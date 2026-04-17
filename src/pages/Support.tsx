import { Link } from "react-router-dom";

const contactChannels = [
  {
    title: "Email Support",
    description: "TODO: describe the support channel.",
    link: "mailto:hello@example.com",
    linkText: "hello@example.com",
  },
];

const faqs = [
  { q: "TODO: question 1?", a: "TODO: answer 1." },
  { q: "TODO: question 2?", a: "TODO: answer 2." },
  { q: "TODO: question 3?", a: "TODO: answer 3." },
];

export default function Support() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <img
            src="/logo.svg"
            alt="Your Brand"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold tracking-tight mb-3">Support</h1>
          <p className="text-white/50 text-lg">TODO: support tagline.</p>
        </div>

        {/* Contact channels */}
        <div className="grid gap-4 mb-16">
          {contactChannels.map((c) => (
            <a
              key={c.title}
              href={c.link}
              target={c.link.startsWith("http") ? "_blank" : undefined}
              rel={
                c.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-sm text-white/40 mb-2">{c.description}</p>
                <span className="text-sm text-brand-400">{c.linkText}</span>
              </div>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Common Questions
        </h2>
        <div className="space-y-3 mb-16">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden"
            >
              <summary className="px-6 py-4 cursor-pointer text-white font-medium select-none hover:bg-white/[0.02] transition-colors">
                {faq.q}
              </summary>
              <div className="px-6 pb-5 text-sm text-white/50 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* Still need help */}
        <div className="text-center py-10 rounded-2xl bg-white/[0.02] border border-white/5">
          <h3 className="text-lg font-semibold mb-2">Still need help?</h3>
          <p className="text-sm text-white/40 mb-5">
            TODO: response-time note.
          </p>
          <a
            href="mailto:hello@example.com?subject=Support%20Request"
            className="inline-block px-6 py-2.5 rounded-full bg-brand-500 hover:bg-brand-400 text-white text-sm font-medium transition-colors"
          >
            Contact Support
          </a>
        </div>

        {/* Legal links */}
        <div className="mt-10 flex justify-center gap-6 text-sm text-white/30">
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
    </section>
  );
}
