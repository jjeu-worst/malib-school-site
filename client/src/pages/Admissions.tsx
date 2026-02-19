import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Info, Download, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Admissions() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Pendaftaran Berhasil Dikirim!",
      description: "Tim panitia PPDB kami akan segera menghubungi Anda.",
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6 font-medium text-sm">
            Tahun Ajaran 2024/2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4">PPDB Online</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Bergabunglah bersama MA AL-IBROHIMY dan wujudkan masa depan yang gemilang.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            
            {/* Informasi */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Informasi Pendaftaran</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Penerimaan Peserta Didik Baru (PPDB) MA AL-IBROHIMY dilaksanakan secara online maupun offline. Silakan lengkapi formulir di samping atau unduh brosur untuk informasi lebih lengkap.
                </p>
                <Button variant="outline" className="w-full justify-center">
                  <Download className="w-4 h-4 mr-2" /> Unduh Brosur PPDB
                </Button>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="font-heading font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" /> Syarat Pendaftaran
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    Fotokopi Ijazah / SKHUN SMP/MTs yang dilegalisir (2 lembar)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    Fotokopi Kartu Keluarga (KK) & Akta Kelahiran (2 lembar)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    Pas foto ukuran 3x4 (4 lembar, latar biru/merah)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    Mengisi formulir pendaftaran secara lengkap
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl text-white">
                <h3 className="font-heading font-bold mb-2">Jadwal Gelombang 1</h3>
                <div className="flex justify-between items-center text-sm text-slate-300 border-b border-slate-700 pb-2 mb-2">
                  <span>Pendaftaran</span>
                  <span className="font-medium text-white">01 Jan - 30 Mar</span>
                </div>
                <div className="flex justify-between items-center text-sm text-slate-300 border-b border-slate-700 pb-2 mb-2">
                  <span>Tes Seleksi</span>
                  <span className="font-medium text-white">05 April</span>
                </div>
                <div className="flex justify-between items-center text-sm text-slate-300">
                  <span>Pengumuman</span>
                  <span className="font-medium text-white">10 April</span>
                </div>
              </div>
            </div>

            {/* Formulir */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Formulir Pra-Pendaftaran</h2>
                
                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Terima Kasih!</h3>
                    <p className="text-slate-600 max-w-sm mb-8">
                      Data Anda telah kami terima. Panitia PPDB akan segera menghubungi Anda melalui WhatsApp atau telepon.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">Kirim Data Baru</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Nama Lengkap Siswa *</label>
                        <Input required placeholder="Masukkan nama lengkap" className="bg-slate-50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">NISN (Opsional)</label>
                        <Input placeholder="Nomor Induk Siswa Nasional" className="bg-slate-50" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Asal Sekolah (SMP/MTs) *</label>
                      <Input required placeholder="Contoh: SMPN 1 Bangkalan" className="bg-slate-50" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Nama Orang Tua/Wali *</label>
                        <Input required placeholder="Nama ayah / ibu" className="bg-slate-50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">No. WhatsApp/HP *</label>
                        <Input required type="tel" placeholder="08..." className="bg-slate-50" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Alamat Lengkap *</label>
                      <Textarea required placeholder="Masukkan alamat domisili" className="bg-slate-50 min-h-[100px]" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Peminatan Jurusan</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">-- Pilih Jurusan --</option>
                        <option value="mia">Matematika & Ilmu Alam (MIA)</option>
                        <option value="iis">Ilmu Sosial & Keagamaan (IIS)</option>
                      </select>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12">
                      Kirim Formulir Pendaftaran
                    </Button>
                    <p className="text-xs text-slate-500 text-center mt-4">
                      Dengan menekan tombol di atas, Anda setuju untuk dihubungi oleh panitia PPDB MA AL-IBROHIMY.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}