import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { NEWS_DATA } from "./News";

export default function NewsDetail() {
  const { id } = useParams();
  const newsItem = NEWS_DATA.find(n => n.id === Number(id));

  if (!newsItem) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-heading font-bold mb-4">Berita Tidak Ditemukan</h1>
        <p className="text-slate-600 mb-8">Maaf, artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
        <Link href="/berita">
          <a className="inline-flex items-center text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Daftar Berita
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Link href="/berita">
          <a className="inline-flex items-center text-slate-500 hover:text-primary transition-colors font-medium text-sm mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
          </a>
        </Link>

        <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          <div className="w-full aspect-[21/9] bg-slate-200 overflow-hidden">
            <img 
              src={newsItem.img} 
              alt={newsItem.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-4 items-center text-sm font-medium text-slate-500 mb-6">
              <span className="flex items-center gap-1.5 text-primary bg-primary/10 px-3 py-1 rounded-full">
                <Tag className="w-4 h-4" /> {newsItem.cat}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {newsItem.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> Oleh: {newsItem.author}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 leading-tight mb-8">
              {newsItem.title}
            </h1>

            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-a:text-primary">
              <p className="lead text-xl text-slate-600 mb-6 font-medium">
                {newsItem.excerpt}
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <h3>Tujuan dan Harapan</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>

              <blockquote>
                "Kegiatan ini merupakan salah satu upaya nyata MA AL-IBROHIMY dalam mewujudkan visi sekolah mencetak generasi unggul." - Kepala Sekolah
              </blockquote>

              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}