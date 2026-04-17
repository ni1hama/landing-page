import { Link, Outlet, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Your Brand" className="w-8 h-8" />
          <span className="text-lg font-semibold tracking-tight text-white">
            Your Brand
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            to="/support"
            className={`transition-colors ${pathname === "/support" ? "text-white" : "text-white/60 hover:text-white"}`}
          >
            Support
          </Link>
          <Link
            to="/privacy"
            className={`transition-colors ${pathname === "/privacy" ? "text-white" : "text-white/60 hover:text-white"}`}
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className={`transition-colors ${pathname === "/terms" ? "text-white" : "text-white/60 hover:text-white"}`}
          >
            Terms
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.svg" alt="Your Brand" className="w-7 h-7" />
              <span className="text-base font-semibold text-white">
                Your Brand
              </span>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              TODO: tagline goes here.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/support"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@example.com"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  hello@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Nav />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
