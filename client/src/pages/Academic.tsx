import { BookOpen, Code, FlaskConical, Users, Music, Activity, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Academic() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary mix-blend-multiply" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Akademik</h1>
          <p className="text-blue-100 text-lg">Program belajar, kurikulum, dan kegiatan ekstrakurikuler pembentuk karakter siswa.</p>
        </div>
      </section>

      {/* JURUSAN SECTION */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Program Belajar / Jurusan</h2>
            <p className="text-slate-600">MA AL-IBROHIMY memfasilitasi minat dan bakat siswa melalui program peminatan yang sesuai dengan perkembangan ilmu pengetahuan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IPA */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FlaskConical className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Matematika & Ilmu Alam (MIA)</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Fokus pada ilmu pasti dan eksperimen. Cocok untuk siswa yang ingin melanjutkan ke kedokteran, teknik, atau sains.
              </p>
              <ul className="text-sm font-medium text-slate-700 space-y-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Biologi, Fisika, Kimia</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Matematika Peminatan</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Praktikum Laboratorium</li>
              </ul>
            </div>

            {/* IPS */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-green-200 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Ilmu Sosial & Keagamaan (IIS)</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Fokus pada interaksi sosial, ekonomi, dan telaah agama. Tepat bagi calon sosiolog, ekonom, atau agamawan.
              </p>
              <ul className="text-sm font-medium text-slate-700 space-y-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Ekonomi, Sosiologi, Geografi</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Ilmu Hadis, Tafsir</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Sejarah Kebudayaan Islam</li>
              </ul>
            </div>

            {/* IT */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Program Plus Keterampilan IT</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Program tambahan untuk membekali siswa dengan keahlian komputer, desain, dan pemrograman dasar.
              </p>
              <ul className="text-sm font-medium text-slate-700 space-y-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Desain Grafis</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Dasar Pemrograman Web</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Jaringan Komputer Dasar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KURIKULUM SECTION */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-heading font-bold text-slate-900">Sistem Kurikulum</h2>
              <p className="text-slate-600 leading-relaxed">
                MA AL-IBROHIMY menggunakan <strong>Kurikulum Merdeka</strong> yang diintegrasikan dengan muatan lokal kepesantrenan. Pendekatan ini memastikan keseimbangan antara kompetensi umum secara nasional dan kekayaan literasi Islam khas pesantren.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Kurikulum Nasional</h4>
                    <p className="text-sm text-slate-500 mt-1">Mengikuti standar Kemdikbudristek & Kemenag RI, mendukung asesmen kompetensi minimum.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Muatan Lokal Pesantren</h4>
                    <p className="text-sm text-slate-500 mt-1">Kajian kitab kuning (Nahwu, Shorof, Fiqih, Akhlaq), Tahfidz Al-Qur'an, dan pembiasaan ibadah sunnah.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <img 
                 src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                 alt="Siswa Belajar" 
                 className="rounded-2xl shadow-lg w-full h-auto object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* EKSTRAKURIKULER */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Kegiatan Ekstrakurikuler</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Kami menyediakan berbagai wadah bagi siswa untuk mengekspresikan diri, melatih kepemimpinan, dan mengembangkan bakat.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Pramuka", icon: Users, color: "bg-amber-100 text-amber-700" },
              { name: "PMR / PMI", icon: Activity, color: "bg-red-100 text-red-700" },
              { name: "Karya Ilmiah Remaja", icon: FlaskConical, color: "bg-blue-100 text-blue-700" },
              { name: "Pencak Silat", icon: Activity, color: "bg-slate-100 text-slate-700" },
              { name: "Seni Al-Banjari", icon: Music, color: "bg-emerald-100 text-emerald-700" },
              { name: "Jurnalistik", icon: BookOpen, color: "bg-indigo-100 text-indigo-700" },
              { name: "Tahfidz Quran", icon: BookOpen, color: "bg-primary/20 text-primary" },
              { name: "Futsal / Voli", icon: Activity, color: "bg-orange-100 text-orange-700" }
            ].map((ekskul, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${ekskul.color}`}>
                  <ekskul.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{ekskul.name}</h4>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white flex flex-col items-center">
            <h3 className="text-2xl font-heading font-bold mb-4">Siap Menjadi Bagian dari Kami?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Mari bergabung dan kembangkan potensimu bersama MA AL-IBROHIMY.</p>
            <Link href="/ppdb">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8">
                Informasi Pendaftaran <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}