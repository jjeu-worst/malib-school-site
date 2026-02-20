import { Link } from "wouter";
import { BookOpen, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl leading-tight">MA AL-IBROHIMY</h2>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Membangun generasi muda yang cerdas secara intelektual, berakhlak mulia, 
              dan siap menghadapi tantangan global dengan berlandaskan nilai-nilai agama.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              {[
                { label: "Profil Sekolah", href: "/profil" },
                { label: "Program Akademik", href: "/akademik" },
                { label: "Berita & Artikel", href: "/berita" },
                { label: "Galeri Kegiatan", href: "/galeri" },
                { label: "Informasi PPDB", href: "/ppdb" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-slate-400 hover:text-white hover:underline transition-colors text-sm">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">Galis, Kabupaten Bangkalan<br/>Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>08820068484077</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>malibgalisy@yahoo.com</span>
              </li>
            </ul>
          </div>

          {/* Maps (Small embed placeholder) */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Lokasi</h3>
            <div className="w-full h-32 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d126620.30141673891!2d113.0645!3d-7.143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd83842c525fde5%3A0x6b432a5de348bd6f!2sGalis%2C%20Bangkalan%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Lokasi Sekolah"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} MA AL-IBROHIMY. Hak Cipta Dilindungi.</p>
          <p className="mt-2 md:mt-0">Desain Modern & Responsif</p>
        </div>
      </div>
    </footer>
  );
}
