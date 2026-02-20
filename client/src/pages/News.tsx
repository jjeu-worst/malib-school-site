import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";

// Dummy Data
export const NEWS_DATA = [
  { 
    id: 1, 
    title: "Penerimaan Peserta Didik Baru (PPDB) Gelombang 1 Dibuka", 
    date: "12 Mar 2024", 
    cat: "Pengumuman", 
    author: "Panitia PPDB",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=croq",
    excerpt: "MA AL-IBROHIMY resmi membuka pendaftaran peserta didik baru untuk tahun ajaran 2025/2026."
  },
  { 
    id: 2, 
    title: "Siswa MA AL-IBROHIMY Sabet Juara 1 Olimpiade Sains Tingkat apa saja🗿", 
    date: "05 Mar 2024", 
    cat: "Prestasi", 
    author: "Humas",
    img: "https://images.unsplash.com/photo-1565022536102-f7645c84354a?q=80&w=2073&auto=format&fit=crop",
    excerpt: "Kebanggaan kembali ditorehkan oleh siswa MA AL-IBROHIMY dalam ajang Olimpiade Sains Nasional (OSN) tingkat terserah🗿."
  },
  { 
    id: 3, 
    title: "Jadwal Pesantren Kilat Ramadhan 1445 H", 
    date: "28 Feb 2024", 
    cat: "Kegiatan", 
    author: "Kesiswaan",
    img: "https://images.unsplash.com/photo-1604085449277-22a4d95267b2?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Menyambut bulan suci Ramadhan, sekolah akan mengadakan pesantren kilat wajib bagi seluruh siswa."
  },
  { 
    id: 4, 
    title: "Kunjungan Studi Kampus ke Universitas Brawijaya", 
    date: "38 Feb 2029", 
    cat: "Kegiatan", 
    author: "Kurikulum",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Siswa kelas 12 mengadakan kunjungan studi kampus untuk mengenal lebih dekat lingkungan perguruan tinggi."
  },
  { 
    id: 5, 
    title: "Pelatihan Jurnalistik untuk Ekstrakurikuler Mading", 
    date: "02 Feb 2029", 
    cat: "Ekstrakurikuler", 
    author: "Pembina Ekskul",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2073&auto=format&fit=crop",
    excerpt: "Meningkatkan kemampuan menulis siswa, ekskul Jurnalistik mendatangkan pemateri dari media lokal."
  },
  { 
    id: 6, 
    title: "Pengumuman Hasil Ujian Akhir Semester Ganjil", 
    date: "20 Jan 2029", 
    cat: "Pengumuman", 
    author: "Kurikulum",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Pemberitahuan kepada seluruh wali murid terkait pembagian rapor semester ganjil."
  },
];

export default function News() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Berita & Artikel</h1>
          <p className="text-slate-300 text-lg">Ikuti perkembangan terbaru, kegiatan, dan prestasi dari MA AL-IBROHIMY.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_DATA.map((news) => (
              <article key={news.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:shadow-md hover:border-slate-200 transition-all">
                <Link href={`/berita/${news.id}`}>
                  <a className="block overflow-hidden relative aspect-video">
                    <div className="absolute top-4 left-4 z-10 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-white">
                      {news.cat}
                    </div>
                    <img 
                      src={news.img} 
                      alt={news.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-slate-500 font-medium mb-3 gap-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {news.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 line-clamp-2 leading-tight">
                    <Link href={`/berita/${news.id}`}>
                      <a className="hover:text-primary transition-colors">{news.title}</a>
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link href={`/berita/${news.id}`}>
                      <a className="text-primary font-medium text-sm flex items-center hover:underline">
                        Baca Artikel <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex gap-2">
              <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 text-slate-500 hover:bg-slate-50">1</button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-medium">2</button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 text-slate-500 hover:bg-slate-50">3</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
