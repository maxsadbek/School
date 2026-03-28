import { useState } from "react";
import { Link } from "react-router-dom";
import { schoolInfo } from "../data/school";

export default function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    classNum: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    alert("Ro'yxatdan o'tildi!");
  };

  const update = (field: string, val: string) =>
    setForm({ ...form, [field]: val });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0a3d7c] to-[#1565c0] flex items-center justify-center p-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#f0a500]/20 blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative w-full max-w-sm">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0a3d7c] to-[#1565c0] px-6 pt-8 pb-6 text-white text-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm mb-3 hover:bg-white/30 transition-colors"
            >
              <i className="ri-school-fill text-2xl text-white" />
            </Link>
            <h1 className="text-xl font-bold">{schoolInfo.shortName}</h1>
            <p className="text-white/70 text-sm mt-0.5">Yangi hisob yaratish</p>

            {/* Step indicator */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      s <= step
                        ? "bg-[#f0a500] text-white"
                        : "bg-white/20 text-white/50"
                    }`}
                  >
                    {s < step ? <i className="ri-check-line text-xs" /> : s}
                  </div>
                  {s < 2 && (
                    <div
                      className={`w-8 h-0.5 rounded-full transition-all ${step > 1 ? "bg-[#f0a500]" : "bg-white/20"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              {step === 1 ? "Shaxsiy ma'lumotlar" : "Kirish ma'lumotlari"}
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              {step === 1
                ? "Ism, familiya va sinf raqamingizni kiriting"
                : "Elektron pochta va parol o'rnating"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">
                        Ism
                      </label>
                      <input
                        type="text"
                        placeholder="Ism"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0a3d7c] focus:ring-2 focus:ring-[#0a3d7c]/10 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">
                        Familiya
                      </label>
                      <input
                        type="text"
                        placeholder="Familiya"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0a3d7c] focus:ring-2 focus:ring-[#0a3d7c]/10 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">
                      Sinf
                    </label>
                    <div className="relative">
                      <i className="ri-building-4-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        value={form.classNum}
                        onChange={(e) => update("classNum", e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-[#0a3d7c] focus:ring-2 focus:ring-[#0a3d7c]/10 transition-all"
                        required
                      >
                        <option value="">Sinfni tanlang</option>
                        {Array.from({ length: 11 }, (_, i) => i + 1)
                          .map((n) =>
                            ["A", "B", "V"].map((l) => (
                              <option key={`${n}${l}`} value={`${n}${l}`}>
                                {n}-{l}
                              </option>
                            )),
                          )
                          .flat()}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">
                      Telefon
                    </label>
                    <div className="relative">
                      <i className="ri-phone-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="+998 __ ___ __ __"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0a3d7c] focus:ring-2 focus:ring-[#0a3d7c]/10 transition-all"
                        required
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">
                      Email
                    </label>
                    <div className="relative">
                      <i className="ri-mail-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        placeholder="email@maktab.uz"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0a3d7c] focus:ring-2 focus:ring-[#0a3d7c]/10 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">
                      Parol
                    </label>
                    <div className="relative">
                      <i className="ri-lock-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="••••••••"
                        value={form.password}
                        onChange={(e) => update("password", e.target.value)}
                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0a3d7c] focus:ring-2 focus:ring-[#0a3d7c]/10 transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <i
                          className={
                            showPass ? "ri-eye-off-line" : "ri-eye-line"
                          }
                        />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">
                      Parolni tasdiqlang
                    </label>
                    <div className="relative">
                      <i className="ri-lock-password-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="••••••••"
                        value={form.confirm}
                        onChange={(e) => update("confirm", e.target.value)}
                        className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                          form.confirm && form.confirm !== form.password
                            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                            : "border-gray-200 focus:border-[#0a3d7c] focus:ring-[#0a3d7c]/10"
                        }`}
                        required
                      />
                    </div>
                    {form.confirm && form.confirm !== form.password && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <i className="ri-error-warning-line" /> Parollar mos
                        emas
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className="flex gap-2 pt-1">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-1"
                  >
                    <i className="ri-arrow-left-line" /> Orqaga
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#0a3d7c] to-[#1565c0] text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2"
                >
                  {step === 1 ? (
                    <>
                      <span>Keyingisi</span>
                      <i className="ri-arrow-right-line" />
                    </>
                  ) : (
                    <>
                      <i className="ri-user-add-line" />
                      <span>Ro'yxatdan o'tish</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-5 pt-4 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">
                Hisob bormi?{" "}
                <Link
                  to="/login"
                  className="text-[#0a3d7c] font-semibold hover:underline"
                >
                  Tizimga kirish
                </Link>
              </p>
            </div>

            <Link
              to="/"
              className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i className="ri-arrow-left-line" /> Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
