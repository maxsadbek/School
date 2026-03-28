import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { schoolInfo, sidebarLinks, cards, news } from "../data/school";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* ───────── HERO + SIDEBAR ───────── */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0a3d7c] to-[#1565c0] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#f0a500] blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Hero content */}
            <div className="flex-1 text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {schoolInfo.founded}-yildan buyon xizmatda
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                <span className="text-white">{schoolInfo.shortName}</span>
                <br />
                <span className="text-[#f0a500]">{schoolInfo.slogan}</span>
              </h1>

              <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-8">
                Zamonaviy ta'lim, tajribali o'qituvchilar va qulay muhit bilan
                farzandingizni kelajakka tayyorlaymiz. Har bir o'quvchi bizning
                g'ururimiz!
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#f0a500] text-white font-semibold hover:bg-[#e67e00] transition-all shadow-lg shadow-orange-900/30 text-sm md:text-base"
                >
                  <i className="ri-information-line" />
                  Maktab haqida
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all backdrop-blur-sm text-sm md:text-base"
                >
                  <i className="ri-phone-line" />
                  Bog'lanish
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    val: schoolInfo.stats.students,
                    label: "O'quvchi",
                    icon: "ri-user-3-line",
                  },
                  {
                    val: schoolInfo.stats.teachers,
                    label: "O'qituvchi",
                    icon: "ri-user-star-line",
                  },
                  {
                    val: schoolInfo.stats.classes,
                    label: "Sinf",
                    icon: "ri-building-4-line",
                  },
                  {
                    val: `${schoolInfo.stats.years}+`,
                    label: "Yil tajriba",
                    icon: "ri-medal-line",
                  },
                ].map(({ val, label, icon }) => (
                  <div
                    key={label}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 md:p-4 text-center hover:bg-white/15 transition-all"
                  >
                    <i
                      className={`${icon} text-[#f0a500] text-lg mb-1 block`}
                    />
                    <p className="text-xl md:text-2xl font-bold text-white">
                      {val}
                    </p>
                    <p className="text-xs text-white/60">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <i className="ri-apps-2-line text-[#f0a500]" />
                  Tezkor havolalar
                </h3>
                <div className="space-y-2">
                  {sidebarLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#f0a500]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f0a500]/40 transition-colors">
                        <i className={`${link.icon} text-[#f0a500] text-sm`} />
                      </div>
                      <span className="text-sm text-white/80 group-hover:text-white transition-colors font-medium">
                        {link.label}
                      </span>
                      <i className="ri-arrow-right-s-line text-white/30 ml-auto group-hover:text-white/60 transition-colors" />
                    </a>
                  ))}
                </div>

                {/* E'lon bloki */}
                <div className="mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="ri-megaphone-line text-emerald-400 text-sm" />
                    <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wide">
                      E'lon
                    </span>
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed">
                    2025-2026 o'quv yili uchun qabul hujjatlar qabuli boshlandi.
                    Muddati: 1 May gacha.
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-2 text-xs text-emerald-300 hover:text-emerald-200 font-medium"
                  >
                    Batafsil →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── ABOUT ───────── */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold text-[#0a3d7c] uppercase tracking-widest mb-3 bg-blue-50 px-3 py-1 rounded-full">
                Maktab haqida
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                Biz bilan <span className="text-[#0a3d7c]">kelajakni</span>{" "}
                birga quramiz
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {schoolInfo.name} — {schoolInfo.founded}-yildan buyon Toshkent
                shahrida sifatli ta'lim berib kelayotgan yetakchi maktablardan
                biri. Bizning asosiy maqsadimiz har bir o'quvchini intellektual,
                jismoniy va ma'naviy jihatdan barkamol shaxs sifatida
                tarbiyalashdir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tajribali pedagoglar jamoasi, zamonaviy o'quv qurollar va qulay
                ta'lim muhiti bilan o'quvchilarimiz respublika va xalqaro
                olimpiadalarda yuqori natijalarga erishib kelmoqda.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Akkreditatsiyadan o'tgan",
                  "ISO 9001 sertifikati",
                  "Davlat mukofoti laureati",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0a3d7c] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full"
                  >
                    <i className="ri-checkbox-circle-fill text-emerald-500" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                {
                  icon: "ri-award-fill",
                  val: "150+",
                  label: "Olimpiada medallari",
                  color: "bg-yellow-50 text-yellow-600 border-yellow-100",
                },
                {
                  icon: "ri-heart-fill",
                  val: "98%",
                  label: "Ota-onalar mamnuniyati",
                  color: "bg-red-50 text-red-500 border-red-100",
                },
                {
                  icon: "ri-star-fill",
                  val: "Top 10",
                  label: "Toshkent reytingida",
                  color: "bg-purple-50 text-purple-600 border-purple-100",
                },
                {
                  icon: "ri-global-line",
                  val: "12+",
                  label: "Xalqaro hamkorlar",
                  color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                },
              ].map(({ icon, val, label, color }) => (
                <div
                  key={label}
                  className={`border rounded-2xl p-5 ${color} hover:shadow-md transition-shadow`}
                >
                  <i className={`${icon} text-2xl mb-2 block`} />
                  <p className="text-2xl font-extrabold text-gray-900">{val}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CARDS (Xizmatlar) ───────── */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-[#0a3d7c] uppercase tracking-widest mb-3 bg-blue-50 px-3 py-1 rounded-full">
              Imkoniyatlar
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Maktabimiz <span className="text-[#0a3d7c]">xizmatlari</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Zamonaviy infratuzilma va keng qamrovli ta'lim dasturlari bilan
              o'quvchilarimizga eng yaxshi sharoitni yaratamiz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <i className={`${card.icon} text-white text-xl`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[#0a3d7c] hover:gap-2 transition-all"
                >
                  Batafsil <i className="ri-arrow-right-line" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── NEWS ───────── */}
      <section id="news" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block text-xs font-semibold text-[#0a3d7c] uppercase tracking-widest mb-3 bg-blue-50 px-3 py-1 rounded-full">
                So'nggi yangiliklar
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Maktab <span className="text-[#0a3d7c]">hayoti</span>
              </h2>
            </div>
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a3d7c] hover:underline"
            >
              Barcha yangiliklar <i className="ri-arrow-right-line" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {news.map((item, i) => (
              <article
                key={i}
                className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image placeholder */}
                <div className="h-44 bg-gradient-to-br from-[#0a3d7c]/10 to-[#1565c0]/20 flex items-center justify-center relative overflow-hidden">
                  <i className="ri-newspaper-line text-5xl text-[#0a3d7c]/20" />
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                      item.tag === "Yutuq"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.tag === "Tadbir"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                    <i className="ri-calendar-line" /> {item.date}
                  </p>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0a3d7c] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[#0a3d7c] hover:gap-2 transition-all"
                  >
                    O'qish <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── GALLERY ───────── */}
      <section id="gallery" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold text-[#0a3d7c] uppercase tracking-widest mb-3 bg-blue-50 px-3 py-1 rounded-full">
              Galereya
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Maktab <span className="text-[#0a3d7c]">hayotidan</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              {
                span: "col-span-2 row-span-2",
                icon: "ri-school-line",
                label: "Maktab binosi",
              },
              { span: "", icon: "ri-group-line", label: "O'quvchilar" },
              { span: "", icon: "ri-football-line", label: "Sport" },
              { span: "", icon: "ri-flask-line", label: "Laboratoriya" },
              { span: "", icon: "ri-music-2-line", label: "San'at" },
              {
                span: "col-span-2",
                icon: "ri-trophy-line",
                label: "Olimpiada g'oliblari",
              },
              { span: "", icon: "ri-computer-line", label: "IT darslar" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.span} relative bg-gradient-to-br from-[#0a3d7c]/10 to-[#1565c0]/20 rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer group hover:from-[#0a3d7c]/20 hover:to-[#1565c0]/30 transition-all min-h-32`}
              >
                <div className="text-center">
                  <i
                    className={`${item.icon} text-4xl text-[#0a3d7c]/30 group-hover:text-[#0a3d7c]/50 transition-colors`}
                  />
                  <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-700 transition-colors">
                    {item.label}
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#0a3d7c] opacity-0 group-hover:opacity-5 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section
        id="contact"
        className="py-16 md:py-20 bg-gradient-to-br from-[#0a1628] to-[#0a3d7c]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 text-white">
              <span className="inline-block text-xs font-semibold text-[#f0a500] uppercase tracking-widest mb-3 bg-white/10 px-3 py-1 rounded-full">
                Bog'lanish
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Biz bilan <span className="text-[#f0a500]">aloqa</span> qiling
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Savollaringiz bormi? Qabul haqida ma'lumot olmoqchimisiz? Biz
                sizga yordam berishga doimo tayyormiz.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "ri-map-pin-2-fill", text: schoolInfo.address },
                  { icon: "ri-phone-fill", text: schoolInfo.phone },
                  { icon: "ri-mail-fill", text: schoolInfo.email },
                  {
                    icon: "ri-time-fill",
                    text: "Dushanba – Shanba: 8:00 – 17:00",
                  },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f0a500] transition-colors">
                      <i
                        className={`${icon} text-[#f0a500] group-hover:text-white transition-colors`}
                      />
                    </div>
                    <span className="text-sm text-white/70">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="w-full lg:w-[420px] bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                Xabar yuborish
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">
                      Ism
                    </label>
                    <input
                      type="text"
                      placeholder="Ismingiz"
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0a3d7c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">
                      Familiya
                    </label>
                    <input
                      type="text"
                      placeholder="Familiyangiz"
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0a3d7c] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1.5 block">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="+998 __ ___ __ __"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0a3d7c] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1.5 block">
                    Mavzu
                  </label>
                  <select className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-[#0a3d7c] transition-colors">
                    <option>Qabul haqida</option>
                    <option>Ta'lim dasturi</option>
                    <option>To'lov masalalari</option>
                    <option>Boshqa</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1.5 block">
                    Xabar
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Xabaringizni yozing..."
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0a3d7c] transition-colors resize-none"
                  />
                </div>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0a3d7c] to-[#1565c0] text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2">
                  <i className="ri-send-plane-fill" />
                  Yuborish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
