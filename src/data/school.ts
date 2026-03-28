export const schoolInfo = {
  name: "1-sonli Umumiy O'rta Ta'lim Maktabi",
  shortName: "1-UOTM",
  slogan: "Bilim — Kelajak Poydevori",
  address: "Toshkent sh., Yunusobod tumani, 7-mavze",
  phone: "+998 71 123 45 67",
  email: "info@maktab1.uz",
  founded: 1957,
  stats: {
    students: 1240,
    teachers: 68,
    classes: 42,
    years: new Date().getFullYear() - 1957,
  },
};

export const navLinks = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Maktab haqida", href: "#about" },
  { label: "O'qituvchilar", href: "#teachers" },
  { label: "Yangiliklar", href: "#news" },
  { label: "Galereya", href: "#gallery" },
  { label: "Bog'lanish", href: "#contact" },
];

export const sidebarLinks = [
  { icon: "ri-calendar-line", label: "Dars jadvali", href: "#" },
  { icon: "ri-file-list-3-line", label: "Ta'lim dasturi", href: "#" },
  { icon: "ri-trophy-line", label: "Olimpiadalar", href: "#" },
  { icon: "ri-team-line", label: "To'garak va seksiyalar", href: "#" },
  { icon: "ri-book-open-line", label: "Kutubxona", href: "#" },
  { icon: "ri-parent-line", label: "Ota-onalar uchun", href: "#" },
];

export const cards = [
  {
    icon: "ri-graduation-cap-line",
    title: "Sifatli Ta'lim",
    desc: "Zamonaviy o'quv dasturlari va tajribali o'qituvchilar bilan yuqori sifatli bilim.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: "ri-flask-line",
    title: "Laboratoriyalar",
    desc: "Fizika, kimyo va biologiya fanlarini amalda o'rganish uchun jihozlangan laboratoriyalar.",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: "ri-football-line",
    title: "Sport Majmua",
    desc: "Futbol maydoni, sport zali va suzish havzasi — sog'lom avlod uchun.",
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: "ri-computer-line",
    title: "IT Markaz",
    desc: "Zamonaviy kompyuter sinflari va tezkor internet bilan raqamli kelajakka tayyorlik.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: "ri-music-2-line",
    title: "San'at va Musiqa",
    desc: "Ijodiy iste'dodlarni rivojlantirish uchun musiqa, rasm va teatr to'garaklari.",
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: "ri-shield-star-line",
    title: "Xavfsiz Muhit",
    desc: "CCTV kuzatuv tizimi va 24/7 qo'riqlash — farzandingiz xavfsizligi biz uchun muhim.",
    color: "from-red-500 to-red-700",
  },
];

export const news = [
  {
    date: "25 Mart, 2026",
    title: "Respublika matematika olimpiadasi g'oliblari",
    desc: "Maktabimiz o'quvchilari respublika matematika olimpiadasida 3 ta oltin medal qo'lga kiritdi.",
    tag: "Yutuq",
  },
  {
    date: "18 Mart, 2026",
    title: "Bahor madaniy tadbirlari boshlanadi",
    desc: "Navro'z munosabati bilan maktabimizda bir haftalik madaniy-ma'rifiy tadbirlar o'tkaziladi.",
    tag: "Tadbir",
  },
  {
    date: "10 Mart, 2026",
    title: "Yangi IT laboratoriyasi ochildi",
    desc: "50 ta zamonaviy kompyuter va tezkor internet bilan jihozlangan yangi IT laboratoriyamiz foydalanishga topshirildi.",
    tag: "Yangilik",
  },
];
