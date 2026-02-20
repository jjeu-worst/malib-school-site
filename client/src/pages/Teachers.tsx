import teacher1 from "@/assets/images/teacher_p.jpg";
import teacher2 from "@/assets/images/teacher_p.jpg";
import teacher3 from "@/assets/images/teacher_p.jpg";

export default function Teachers() {
  const TEACHERS = [
    { name: "K.H. kepala sekolah.", role: "Kepala Sekolah", subject: "Ilmu Tafsir", img: teacher1 },
    { name: "Ust. waka, S.Pd.", role: "Waka Kurikulum", subject: "Matematika", img: teacher2 },
    { name: "guru", role: "Guru", subject: "Biologi & Kimia", img: teacher3 },
    { name: "waka", role: "Waka Kesiswaan", subject: "Aqidah Akhlaq", img: teacher1 },
    { name: "guru", role: "Guru / Pembina IT", subject: "TIK", img: teacher2 },
    { name: "guru", role: "Guru", subject: "Bahasa Inggris", img: teacher3 },
    { name: "guru", role: "Guru / Pembina Olahraga", subject: "Penjaskes", img: teacher1 },
    { name: "guru", role: "Guru", subject: "Sosiologi", img: teacher2 },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Guru & Staf</h1>
          <p className="text-green-100 text-lg">Pendidik profesional yang berdedikasi membimbing generasi bangsa.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {TEACHERS.map((teacher, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[3/4] overflow-hidden relative bg-slate-100">
                  <img 
                    src={teacher.img} 
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-slate-900 leading-tight mb-1">{teacher.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{teacher.role}</p>
                  <p className="text-slate-500 text-xs bg-slate-50 rounded-full py-1 px-3 inline-block">Mapel: {teacher.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
