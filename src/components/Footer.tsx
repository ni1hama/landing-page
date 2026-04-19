import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-stone-500">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Your Company.</p>
          <div className="flex items-center gap-5">
            <Link to="/legal#privacy" className="hover:text-stone-800">
              Privacy
            </Link>
            <Link to="/legal#terms" className="hover:text-stone-800">
              Terms
            </Link>
            <a href="mailto:hello@example.com" className="hover:text-stone-800">
              hello@example.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
