import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "What we build", href: "/#work" },
  { label: "Principles", href: "/#principles" },
  { label: "Legal", to: "/legal" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-stone-900"
          aria-label="PPKA.AI — home"
        >
          <img src="/logo.svg" alt="" aria-hidden className="h-6 w-6" />
          <span className="font-serif text-base font-semibold">PPKA.AI</span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-5 text-sm text-stone-600"
        >
          {navItems.map((item) =>
            item.to ? (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `transition hover:text-stone-900 ${
                    isActive ? "text-stone-900" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-stone-900"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
