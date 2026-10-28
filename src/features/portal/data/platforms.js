// Daftar platform di Portal HIMTI.
//
// Portal ini HANYA mengarahkan: portal tidak menyimpan katalog, stok,
// materi, atau data voting. Data tetap tinggal di masing-masing platform.
//
// Status tautan:
// - cms.himtiumt.org, lms.himtiumt.org, election.himtiumt.org SUDAH AKTIF
//   (dikonfirmasi Wisnu 2026-10-26; dicek juga dari container: HTTP 200
//   dengan title "HIMTI CMS", "HIMTI LMS", dan
//   "HIMTI Election — E-Voting HIMTI UMT").
// - danus.himtiumt.org LIVE PROD 2026-10-28 (main 75d5e90, database
//   himti-danus). Catatan: datanya BELUM diupload karena belum
//   disosialisasikan ke Departemen Danus, jadi katalognya masih kosong
//   saat kartu ini diklik. Portal sendiri masih lokal/belum merge,
//   jadi perubahan copy di sini belum tayang ke produksi.

export const platforms = [
  {
    id: "danus",
    name: "Store",
    shortName: "Store",
    url: "https://danus.himtiumt.org/",
    audience: "Publik",
    badgeVariant: "success",
    description:
      "Toko resmi HIMTI yang dikelola Dana Usaha (Danus): merchandise resmi, Klinik Teknologi, dan jasa pembuatan aplikasi, web, desktop, dan mobile.",
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
