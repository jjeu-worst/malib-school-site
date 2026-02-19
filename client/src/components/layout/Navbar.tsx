import { Link, useLocation } from "wouter";
import { Menu, X, BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Akademik", href: "/akademik" },
  { label: "Berita", href: "/berita" },
  { label: "Guru & Staf", href: "/guru" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white group-hover:bg-primary/90 transition-colors">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-heading font-bold text-lg leading-tight text-slate-900">
              MA AL-IBROHIMY
            </h1>
            <p className="text-[0.65rem] text-slate-500 font-medium tracking-wide uppercase">
              Unggul & Berakhlak
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                data-testid={`link-nav-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/ppdb" data-testid="link-nav-ppdb">
            <Button className="bg-secondary hover:bg-secondary/90 text-white shadow-sm font-semibold rounded-full px-6">
              Daftar PPDB
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          data-testid="button-mobile-menu"
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-2 animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-slate-100">
            <Link href="/ppdb" data-testid="link-mobile-ppdb">
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-sm font-semibold rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Daftar PPDB
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}