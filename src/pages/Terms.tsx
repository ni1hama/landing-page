import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Use</h1>
        <p className="text-sm text-white/40 mb-12">
          Effective Date: TODO | Last Updated: TODO
        </p>

        <div className="prose-legal">
          <p>
            TODO: full terms of use. This is a placeholder — replace before
            launch. See{" "}
            <Link to="/privacy" className="text-brand-400 hover:text-brand-300">
              Privacy Policy
            </Link>
            .
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>TODO</p>

          <h2>2. Description of Services</h2>
          <p>TODO</p>

          <h2>3. Acceptable Use</h2>
          <p>TODO</p>

          <h2>4. Disclaimers</h2>
          <p>TODO</p>

          <h2>5. Limitation of Liability</h2>
          <p>TODO</p>

          <h2>6. Governing Law</h2>
          <p>TODO</p>

          <h2>7. Contact Us</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@example.com">hello@example.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
