import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <section className="bg-slate-900 text-white py-20 relative">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Hubungi Kami</h1>
          <p className="text-slate-300 text-lg">Jangan ragu untuk bertanya, memberikan saran, atau mengunjungi sekolah kami secara langsung.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Alamat</h3>
              <p className="text-slate-600 leading-relaxed">
                Galis, Kabupaten Bangkalan<br/>
                Jawa Timur, Indonesia
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Telepon / WhatsApp</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                0882-0068-48407<br/>
                <span className="text-sm font-normal text-slate-500">(Senin-Sabtu: 07.00 - 15.00)</span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                malibgalisy@yahoo.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
              <div className="aspect-square lg:aspect-auto lg:h-[600px] w-full bg-slate-100 rounded-2xl overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d126620.30141673891!2d113.0645!3d-7.143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd83842c525fde5%3A0x6b432a5de348bd6f!2sGalis%2C%20Bangkalan%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-2">Kirim Pesan</h2>
              <p className="text-slate-600 mb-8">Silakan isi formulir di bawah ini, kami akan segera merespons pesan Anda.</p>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Pesan terkirim (Mode Mockup)"); }}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                  <Input required placeholder="Masukkan nama Anda" className="bg-slate-50 border-slate-200" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email atau No. Telepon</label>
                  <Input required placeholder="Untuk balasan dari kami" className="bg-slate-50 border-slate-200" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Pesan / Pertanyaan</label>
                  <Textarea required placeholder="Tuliskan pesan Anda di sini..." className="bg-slate-50 border-slate-200 min-h-[150px]" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                  <Send className="w-4 h-4 mr-2" /> Kirim Pesan Sekarang
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}