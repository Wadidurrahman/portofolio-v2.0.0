import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">404 - Halaman Tidak Ditemukan</h2>
      <p className="text-slate-500 mb-6">Maaf, halaman yang Anda cari tidak tersedia.</p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        Kembali ke Beranda
      </Link>
    </div>
  );
}