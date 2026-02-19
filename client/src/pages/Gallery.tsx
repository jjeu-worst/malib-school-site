import { useState } from "react";
import gal1 from "@/assets/images/gallery_1.jpg";
import gal2 from "@/assets/images/gallery_2.jpg";
import gal3 from "@/assets/images/gallery_3.jpg";
import gal4 from "@/assets/images/gallery_4.jpg";
import heroImg from "@/assets/images/hero-bg.jpg";
import studentsImg from "@/assets/images/students.jpg";

export default function Gallery() {
  const [filter, setFilter] = useState("Semua");
  
  const GALLERY_ITEMS = [
    { img: gal1, title: "Lomba Pramuka", cat: "Kegiatan" },
    { img: studentsImg, title: "Proses KBM di Kelas", cat: "Fasilitas" },
    { img: gal2, title: "Porseni Antar Kelas", cat: "Kegiatan" },
    { img: heroImg, title: "Gedung Sekolah Utama", cat: "Fasilitas" },
    { img: gal3, title: "Upacara Bendera", cat: "Kegiatan" },
    { img: gal4, title: "Praktikum Lab", cat: "Prestasi" },
  ];

  const categories = ["Semua", "Kegiatan", "Fasilitas", "Prestasi"];

  const filteredItems = filter === "Semua" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.cat === filter);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Galeri</h1>
          <p className="text-slate-300 text-lg">Dokumentasi kegiatan dan fasilitas di lingkungan MA AL-IBROHIMY.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? "bg-primary text-white" 
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-200 shadow-sm border border-slate-100">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full mb-2">
                    {item.cat}
                  </div>
                  <h3 className="text-white font-heading font-bold text-lg leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}