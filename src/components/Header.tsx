import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-stone-900"
        >
          <img src="/logo.svg" alt="" aria-hidden className="h-6 w-6" />
          Your Brand
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-600">
          <a href="/#work" className="hover:text-stone-900">
            Work
          </a>
          <a href="/#contact" className="hover:text-stone-900">
            Contact
          </a>
          <Link to="/legal" className="hover:text-stone-900">
            Legal
          </Link>
        </nav>
      </div>
    </header>
  );
}
