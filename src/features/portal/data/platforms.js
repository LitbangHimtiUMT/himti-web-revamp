// Daftar platform di Portal HIMTI.
//
// Portal ini HANYA mengarahkan: portal tidak menyimpan katalog, stok,
// materi, atau data voting. Data tetap tinggal di masing-masing platform.
//
// Status tautan 2026-10-26:
// - cms.himtiumt.org, lms.himtiumt.org, election.himtiumt.org SUDAH AKTIF
//   (dikonfirmasi Wisnu; dicek juga dari container: HTTP 200 dengan title
//   "HIMTI CMS", "HIMTI LMS", dan "HIMTI Election — E-Voting HIMTI UMT").
// - danus.himtiumt.org BELUM final: masih perlu QA dan audit, jadi
//   aplikasinya belum tayang (dicek dari container: DNS + TLS jalan, tapi
//   server membalas kosong / empty reply). Tautan Danus di bawah ini
//   adalah target yang sudah disepakati, BUKAN tautan yang sudah bisa
//   dibuka hari ini. JANGAN publish portal ke produksi sebelum aplikasi
//   Danus di-deploy dan lolos QA/audit, atau ubah dulu kartu Danus jadi
//   status "Segera hadir" tanpa tautan hidup.

export const platforms = [
  {
    id: "danus",
    name: "Dana Usaha",
    shortName: "Danus",
    url: "https://danus.himtiumt.org/",
    audience: "Publik",
    badgeVariant: "success",
    description:
      "Merchandise resmi HIMTI, Klinik Teknologi, dan jasa pembuatan aplikasi, web, desktop, dan mobile.",
    accessNote: "Terbuka untuk umum, tanpa perlu akun.",
    featured: true,
  },
  {
    id: "lms",
    name: "Learning Management System",
    shortName: "LMS",
    url: "https://lms.himtiumt.org/",
    audience: "Anggota",
    badgeVariant: "primary",
    description: "Materi dan pembelajaran untuk anggota HIMTI.",
    accessNote: "Login dengan akun anggota HIMTI.",
    featured: false,
  },
  {
    id: "election",
    name: "Election",
    shortName: "Election",
    url: "https://election.himtiumt.org/",
    audience: "Undangan Admin",
    badgeVariant: "secondary",
    description: "Platform e-voting HIMTI. Halaman awalnya landing page.",
    accessNote: "Hanya bisa masuk kalau sudah di-invite admin.",
    featured: false,
  },
  {
    id: "cms",
    name: "Content Management System",
    shortName: "CMS",
    url: "https://cms.himtiumt.org/",
    audience: "Pengurus",
    badgeVariant: "default",
    description: "Kelola konten dan data organisasi HIMTI.",
    accessNote: "Khusus pengurus, login dengan akun pengurus.",
    featured: false,
  },
];

export const mainPlatforms = platforms.filter((item) => item.id !== "cms");
export const internalPlatforms = platforms.filter((item) => item.id === "cms");
