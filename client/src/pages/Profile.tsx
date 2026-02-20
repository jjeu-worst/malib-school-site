import { Award, Clock, Users, BookOpen } from "lucide-react";
import principalImg from "@/assets/images/principal.jpg";

export default function Profile() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Profil Sekolah</h1>
          <p className="text-slate-300 text-lg">Mengenal lebih dekat sejarah, visi, misi, dan struktur organisasi MA AL-IBROHIMY Galis Bangkalan.</p>
        </div>
      </section>

      {/* SEJARAH SECTION */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-heading font-bold text-slate-900">Sejarah Singkat</h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
              <p>
                Madrasah Aliyah (MA) AL-IBROHIMY didirikan atas gagasan para tokoh ulama dan masyarakat Galis, Kabupaten Bangkalan yang menyadari akan pentingnya pendidikan menengah tingkat atas yang memadukan kurikulum pendidikan nasional dengan pendidikan agama Islam berhaluan Ahlussunnah wal Jama'ah.
              </p>
              <p>
                Sejak berdirinya, MA AL-IBROHIMY terus berkembang dan melakukan pembenahan, baik di bidang sarana prasarana maupun peningkatan kualitas tenaga pendidik. Komitmen kami adalah mencetak generasi muslim yang tidak hanya cerdas secara intelektual, tetapi juga tangguh secara spiritual dan sosial.
              </p>
              <p>
                Kini, MA AL-IBROHIMY telah meluluskan ribuan alumni yang tersebar di berbagai perguruan tinggi negeri maupun swasta terkemuka, serta berkiprah di berbagai bidang profesional di masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISI & MISI DETAIL */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6 text-primary">
                <Award className="w-8 h-8" />
                <h2 className="text-3xl font-heading font-bold text-slate-900">Visi Sekolah</h2>
              </div>
              <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 h-full">
                <p className="text-xl lg:text-2xl font-heading font-medium text-slate-800 leading-relaxed italic text-center">
                  "Terwujudnya Generasi Muslim yang Cerdas, Terampil, Mandiri, dan Berakhlakul Karimah serta Berwawasan Lingkungan."
                </p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6 text-secondary">
                <BookOpen className="w-8 h-8" />
                <h2 className="text-3xl font-heading font-bold text-slate-900">Misi Sekolah</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Menyelenggarakan pendidikan yang memadukan IPTEK dan IMTAQ.",
                  "Mengembangkan bakat, minat, dan potensi siswa secara optimal melalui kegiatan intrakurikuler dan ekstrakurikuler.",
                  "Membiasakan perilaku Islami dalam kehidupan sehari-hari berlandaskan Ahlussunnah wal Jama'ah.",
                  "Menciptakan lingkungan sekolah yang bersih, sehat, asri, dan nyaman untuk kegiatan belajar mengajar.",
                  "Meningkatkan profesionalisme tenaga pendidik dan kependidikan."
                ].map((misi, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-slate-600 leading-relaxed pt-1">{misi}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STRUKTUR ORGANISASI */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-5xl">
          <div className="inline-flex items-center justify-center gap-2 mb-4 text-primary">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12">Struktur Organisasi</h2>
          
          {/* Mock Org Chart representation */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <div className="flex flex-col items-center">
              {/* Kepala Sekolah */}
              <div className="mb-8 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-4 border-white shadow-md">
                   <img src={principalImg} alt="Kepala Sekolah" className="w-full h-full object-cover" />
                </div>
                <div className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold">
                  K.H. kepala sekolah.
                </div>
                <div className="text-sm text-slate-500 font-medium mt-1">Kepala Sekolah</div>
              </div>
              
              <div className="w-0.5 h-8 bg-slate-300"></div>
              <div className="w-full max-w-3xl h-0.5 bg-slate-300"></div>
              
              <div className="flex w-full max-w-3xl justify-between pt-8 relative">
                {/* Waka */}
                {[
                  { title: "Waka Kurikulum", name: "waka" },
                  { title: "Waka Kesiswaan", name: "waka 2" },
                  { title: "Waka Sarpras", name: "waka 3" }
                ].map((waka, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1 relative">
                    <div className="absolute -top-8 w-0.5 h-8 bg-slate-300"></div>
                    <div className="bg-white border border-slate-200 px-4 py-3 rounded-lg shadow-sm text-center w-40">
                      <div className="font-bold text-slate-800 text-sm">{waka.name}</div>
                      <div className="text-xs text-primary font-medium mt-1">{waka.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
