import { schoolInfo, navLinks } from "../../data/school";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f0a500] to-[#e67e00] flex items-center justify-center">
                <i className="ri-school-fill text-white text-lg" />
              </div>
              <div>
                <p className="font-bold text-white">{schoolInfo.shortName}</p>
                <p className="text-xs text-white/50">{schoolInfo.slogan}</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              {schoolInfo.founded}-yildan buyon sifatli ta'lim va barkamol
              avlodni tarbiyalash maktabimizning asosiy maqsadi hisoblanadi.
            </p>
            <div className="flex gap-2">
              {[
                "ri-facebook-fill",
                "ri-instagram-fill",
                "ri-youtube-fill",
                "ri-telegram-fill",
              ].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#f0a500] hover:text-white transition-all"
                >
                  <i className={`${icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Sahifalar
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#f0a500] transition-colors flex items-center gap-2"
                  >
                    <i className="ri-arrow-right-s-line text-[#f0a500] text-xs" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Bog'lanish
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-2-fill text-[#f0a500] mt-0.5 text-sm flex-shrink-0" />
                <span className="text-sm text-white/60">
                  {schoolInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-fill text-[#f0a500] text-sm flex-shrink-0" />
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {schoolInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-fill text-[#f0a500] text-sm flex-shrink-0" />
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {schoolInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-time-fill text-[#f0a500] mt-0.5 text-sm flex-shrink-0" />
                <span className="text-sm text-white/60">
                  Du-Sha: 8:00 – 17:00
                  <br />
                  Yak-Dam: yopiq
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Yangiliklar
            </h4>
            <p className="text-sm text-white/60 mb-4">
              Maktabimiz yangiliklari va e'lonlaridan xabardor bo'ling.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#f0a500] transition-colors"
              />
              <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#f0a500] to-[#e67e00] text-white text-sm font-medium hover:shadow-lg hover:shadow-orange-900/30 transition-all">
                Obuna bo'lish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {schoolInfo.name}. Barcha huquqlar
            himoyalangan.
          </p>
          <p className="text-xs text-white/40">
            Maxfiylik siyosati · Foydalanish shartlari
          </p>
        </div>
      </div>
    </footer>
  );
}
