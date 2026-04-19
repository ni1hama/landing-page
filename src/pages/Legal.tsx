import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Legal() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
          Legal
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-stone-900">
          Privacy &amp; Terms
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          Effective: TODO · Last updated: TODO
        </p>
        <nav className="mt-6 flex gap-4 text-sm">
          <a
            href="#privacy"
            className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Privacy
          </a>
          <a
            href="#terms"
            className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Terms
          </a>
        </nav>
      </header>

      <article id="privacy" className="legal">
        <h2>Privacy</h2>
        <p>
          TODO: full privacy policy text. This is a placeholder — replace before
          launch.
        </p>
        <h3>Who we are</h3>
        <p>
          Your Company ·{" "}
          <a href="mailto:hello@example.com">hello@example.com</a>
        </p>
        <h3>What we collect</h3>
        <p>TODO</p>
        <h3>How we use it</h3>
        <p>TODO</p>
        <h3>Retention</h3>
        <p>TODO</p>
        <h3>Your rights</h3>
        <p>TODO</p>
      </article>

      <div className="my-16 h-px w-full bg-stone-200" />

      <article id="terms" className="legal">
        <h2>Terms</h2>
        <p>
          TODO: full terms of use. This is a placeholder — replace before
          launch.
        </p>
        <h3>Acceptance</h3>
        <p>TODO</p>
        <h3>Acceptable use</h3>
        <p>TODO</p>
        <h3>Disclaimers</h3>
        <p>TODO</p>
        <h3>Limitation of liability</h3>
        <p>TODO</p>
        <h3>Governing law</h3>
        <p>TODO</p>
        <h3>Contact</h3>
        <p>
          <a href="mailto:hello@example.com">hello@example.com</a>
        </p>
      </article>
    </section>
  );
}
