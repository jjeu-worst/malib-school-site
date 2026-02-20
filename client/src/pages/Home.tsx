import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award, Users, ChevronRight } from "lucide-react";
import heroImg from "@/assets/images/hero-bg.jpg";
import principalImg from "@/assets/images/IMG_3840.jpeg";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Gedung Sekolah MA AL-IBROHIMY" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-white">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Pendaftaran Siswa Baru 2024/2025 Dibuka
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-tight">
              Membangun Generasi <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Unggul & Berakhlak
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-light">
              MA AL-IBROHIMY Galis Bangkalan berkomitmen mencetak siswa yang cerdas secara akademik 
              sekaligus teguh dalam nilai-nilai spiritual dan moral.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/ppdb" data-testid="button-hero-ppdb">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-primary/25">
                  Daftar Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/profil" data-testid="button-hero-profil">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 h-14 text-base font-semibold backdrop-blur-sm">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* QUICK STATS / FEATURES */}
      <section className="py-12 bg-slate-50 relative -mt-8 z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Kurikulum Modern", desc: "Perpaduan kurikulum nasional dan nilai pesantren.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Users, title: "Tenaga Pendidik", desc: "Guru profesional, berdedikasi, dan berpengalaman.", color: "text-green-500", bg: "bg-green-50" },
              { icon: Award, title: "Fasilitas Lengkap", desc: "Mendukung pengembangan bakat dan potensi siswa.", color: "text-amber-500", bg: "bg-amber-50" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bg}`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAL WELCOME */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-5/12 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={principalImg} 
                  alt="Kepala Sekolah MA AL-IBROHIMY" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative block behind image */}
              <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-secondary rounded-3xl -z-0" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-slate-100 rounded-full -z-0" />
            </div>
            
            <div className="w-full lg:w-7/12 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-2">
                Sambutan Kepala Sekolah
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-tight">
                Selamat Datang di <br/> MA AL-IBROHIMY
              </h2>
              
              <blockquote className="border-l-4 border-primary pl-4 text-slate-600 italic text-lg leading-relaxed bg-slate-50 py-3 pr-4 rounded-r-lg">
                "Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia. Kami berkomitmen memberikan yang terbaik untuk masa depan putra-putri Anda."
              </blockquote>
              
              <p className="text-slate-600 leading-relaxed">
                Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur ke hadirat Allah SWT, website MA AL-IBROHIMY dapat hadir sebagai media informasi dan komunikasi bagi seluruh civitas akademika, orang tua siswa, dan masyarakat luas. Kami berharap website ini dapat menjadi jembatan yang mendekatkan sekolah dengan masyarakat.
              </p>
              
              <div className="pt-4">
                <p className="font-heading font-bold text-lg text-slate-900">K.H. Ahmad Fulan, M.Pd.</p>
                <p className="text-slate-500 text-sm">Kepala Sekolah MA AL-IBROHIMY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION PREVIEW */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Visi & Misi</h2>
            <p className="text-slate-400">Kompas yang menuntun kami dalam mendidik dan membimbing siswa.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Visi Kami</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                "Terwujudnya Generasi Muslim yang Cerdas, Terampil, Mandiri, dan Berakhlakul Karimah serta Berwawasan Lingkungan."
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <div className="w-14 h-14 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Misi Utama</h3>
              <ul className="space-y-3 text-slate-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">1</span>
                  Menyelenggarakan pendidikan yang memadukan IPTEK dan IMTAQ.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">2</span>
                  Mengembangkan bakat, minat, dan potensi siswa secara optimal.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">3</span>
                  Membiasakan perilaku Islami dalam kehidupan sehari-hari.
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/profil">
                  <a className="text-secondary hover:text-white inline-flex items-center gap-1 font-medium transition-colors">
                    Selengkapnya <ChevronRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS PREVIEW */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-2">
                Informasi Terkini
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                Berita & Pengumuman
              </h2>
            </div>
            <Link href="/berita">
              <Button variant="outline" className="rounded-full bg-white">
                Lihat Semua Berita
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dummy News Cards */}
            {[
              { id: 1, title: "Penerimaan Peserta Didik Baru Gelombang 1", date: "12 Mar 2024", cat: "Pengumuman", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" },
              { id: 2, title: "Prestasi Siswa di Ajang Olimpiade Sains Nasional", date: "05 Mar 2024", cat: "Prestasi", img: "https://images.unsplash.com/photo-1565022536102-f7645c84354a?q=80&w=2073&auto=format&fit=crop" },
              { id: 3, title: "Kegiatan Pesantren Kilat Ramadhan 1445 H", date: "28 Feb 2024", cat: "Kegiatan", img: "https://images.unsplash.com/photo-1604085449277-22a4d95267b2?q=80&w=2070&auto=format&fit=crop" },
            ].map((news) => (
              <Link key={news.id} href={`/berita/${news.id}`}>
                <a className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-primary">
                      {news.cat}
                    </div>
                    <img 
                      src={news.img} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-slate-400 text-xs font-medium mb-2">{news.date}</p>
                    <h3 className="font-heading font-bold text-lg text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <div className="flex items-center text-sm font-medium text-slate-600 group-hover:text-primary">
                      Baca selengkapnya <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
