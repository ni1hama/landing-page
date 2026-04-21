import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold text-stone-900">
              PPKA.AI
            </p>
            <p className="mt-2 max-w-xs text-sm text-stone-600">
              An AI-native team engineering software and LLM agents for
              everyone.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
              Headquartered in Singapore
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
              Site
            </p>
            <ul className="mt-3 space-y-2 text-sm text-stone-700">
              <li>
                <a href="/#work" className="hover:text-stone-900">
                  What we build
                </a>
              </li>
              <li>
                <a href="/#principles" className="hover:text-stone-900">
                  Principles
                </a>
              </li>
              <li>
                <a href="/#company" className="hover:text-stone-900">
                  Company
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm text-stone-700">
              <li>
                <Link to="/legal#privacy" className="hover:text-stone-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal#terms" className="hover:text-stone-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-stone-200 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} PPKA.AI. All rights reserved.</p>
          <p className="font-mono tracking-wider">Singapore · Est. 2025</p>
        </div>
      </div>
    </footer>
  );
}
