import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, schoolInfo } from "../../data/school";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0a1628] text-white/70 text-xs py-2 px-6 hidden md:flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <i className="ri-map-pin-2-fill text-[#f0a500]" />
            {schoolInfo.address}
          </span>
          <span className="flex items-center gap-1.5">
            <i className="ri-phone-fill text-[#f0a500]" />
            {schoolInfo.phone}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">
            <i className="ri-facebook-fill" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="ri-instagram-fill" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="ri-youtube-fill" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="ri-telegram-fill" />
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#0a3d7c] to-[#1565c0] flex items-center justify-center shadow-lg group-hover:shadow-blue-200 transition-shadow">
                <i className="ri-school-fill text-white text-lg md:text-xl" />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-[#0a3d7c] text-sm md:text-base leading-tight">
                  {schoolInfo.shortName}
                </p>
                <p className="text-[10px] md:text-xs text-gray-500 leading-tight">
                  {schoolInfo.slogan}
                </p>
              </div>
            </Link>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-[#0a3d7c] ${
                    location.pathname === link.href
                      ? "text-[#0a3d7c] bg-blue-50"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Search */}
              <button className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-all">
                <i className="ri-search-line text-base" />
              </button>

              {/* Login */}
              <Link
                to="/login"
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#0a3d7c] text-[#0a3d7c] text-sm font-medium hover:bg-blue-50 transition-all"
              >
                <i className="ri-login-box-line text-base" />
                <span>Kirish</span>
              </Link>

              {/* SignIn */}
              <Link
                to="/signin"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-[#0a3d7c] to-[#1565c0] text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-200 transition-all"
              >
                <i className="ri-user-add-line text-base" />
                <span className="hidden sm:inline">Ro'yxat</span>
              </Link>

              {/* Burger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
              >
                <i
                  className={
                    menuOpen ? "ri-close-line text-lg" : "ri-menu-line text-lg"
                  }
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0a3d7c] transition-all"
              >
                <i className="ri-arrow-right-s-line text-[#f0a500]" />
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-2 rounded-lg border border-[#0a3d7c] text-[#0a3d7c] text-sm font-medium"
              >
                Kirish
              </Link>
              <Link
                to="/signin"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-2 rounded-lg bg-[#0a3d7c] text-white text-sm font-medium"
              >
                Ro'yxatdan o'tish
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
