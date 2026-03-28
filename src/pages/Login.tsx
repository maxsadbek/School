import { useState } from "react";
import { Link } from "react-router-dom";
import { schoolInfo } from "../data/school";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ id: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API integration keyinroq
    alert("Tizimga kirish...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0a3d7c] to-[#1565c0] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
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
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Top decoration */}
          <div className="bg-gradient-to-r from-[#0a3d7c] to-[#1565c0] px-6 pt-8 pb-6 text-white text-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm mb-3 hover:bg-white/30 transition-colors"
            >
              <i className="ri-school-fill text-2xl text-white" />
            </Link>
            <h1 className="text-xl font-bold">{schoolInfo.shortName}</h1>
            <p className="text-white/70 text-sm mt-0.5">O'quvchi kabineti</p>
          </div>

          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              Tizimga kirish
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              O'quvchi ID va parolingizni kiriting
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">
                  O'quvchi ID
                </label>
                <div className="relative">
                  <i className="ri-user-3-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Masalan: STU-2024-001"
                    value={form.id}
                    onChange={(e) => setForm({ ...form, id: e.target.value })}
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
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0a3d7c] focus:ring-2 focus:ring-[#0a3d7c]/10 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <i
                      className={showPass ? "ri-eye-off-line" : "ri-eye-line"}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded accent-[#0a3d7c]"
                  />
                  <span className="text-xs text-gray-600">Eslab qolish</span>
                </label>
                <a
                  href="#"
                  className="text-xs text-[#0a3d7c] font-medium hover:underline"
                >
                  Parolni unutdim?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0a3d7c] to-[#1565c0] text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2"
              >
                <i className="ri-login-box-line" />
                Kirish
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">
                Hisob yo'qmi?{" "}
                <Link
                  to="/signin"
                  className="text-[#0a3d7c] font-semibold hover:underline"
                >
                  Ro'yxatdan o'tish
                </Link>
              </p>
            </div>

            <Link
              to="/"
              className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i className="ri-arrow-left-line" />
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
