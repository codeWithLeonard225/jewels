// app/(main)/page.js

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Jewels Model Academy | Shaping Future Leaders",
  description: "A premier academic institution dedicated to nurturing talent, character, and innovation.",
};

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      
      {/* 1. MODERN HERO SECTION (Offset Design) */}
      <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <Image
            src="/images/schoolbg1.jpg"
            alt="Jewels Model Academy"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-2xl">
            <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block">Welcome to a New Era of Learning</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-6">
              Nurturing Every <span className="text-amber-400 italic">Jewel</span> to Shine.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              At Jewels Model Academy, we don't just teach; we ignite curiosity and build the foundation for global leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/admissions" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-md transition-all">
                Enroll Your Child
              </Link>
              <Link href="/about" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-md transition-all">
                Explore Our Campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK STATS (Separates the design from the old site) */}
      <section className="bg-white py-12 shadow-sm relative z-20 -mt-10 mx-6 md:mx-20 rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-slate-800">100%</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Exam Pass Rate</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-slate-800">15:1</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Student-Teacher Ratio</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-slate-800">20+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Extracurriculars</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-slate-800">Modern</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">IT Labs</p>
          </div>
        </div>
      </section>

      {/* 3. THE "JEWELS" EXPERIENCE (Grid Layout) */}
      <section className="py-24 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif text-slate-900 mb-4">Why Jewels Model Academy?</h2>
            <p className="text-gray-600">We provide a balanced environment where academic rigor meets creative freedom.</p>
          </div>
          <Link href="/curriculum" className="text-amber-600 font-bold hover:underline">View Curriculum &rarr;</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Holistic Growth", desc: "Beyond books, we focus on emotional intelligence and moral integrity.", icon: "💎" },
            { title: "Digital Literacy", desc: "Our students are trained in 21st-century tech skills from an early age.", icon: "💻" },
            { title: "Global Vision", desc: "Preparing students for international opportunities and standard exams.", icon: "🌍" }
          ].map((item, index) => (
            <div key={index} className="group p-10 bg-white border-b-4 border-transparent hover:border-amber-500 transition-all shadow-sm">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOUNDER'S VISION (Text-Focused, High Contrast) */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
           <div className="w-full md:w-1/2">
              <div className="relative p-4 border border-amber-500/30">
                 <Image 
                   src="/images/proprietor.png" 
                   alt="Proprietor" 
                   width={500} 
                   height={600} 
                   className="grayscale hover:grayscale-0 transition duration-500"
                 />
              </div>
           </div>
           <div className="w-full md:w-1/2 text-white">
              <h4 className="text-amber-500 font-bold mb-4 tracking-widest">THE VISIONARY</h4>
              <h2 className="text-4xl font-serif mb-8 leading-tight">Leading with Integrity and Purpose.</h2>
              <p className="text-gray-400 text-lg mb-6 italic">
                "Our mission is to polish every student into a jewel that can stand the test of time, academically and morally."
              </p>
              <p className="text-gray-400 mb-8">
                At JMA, we prioritize a student-centered approach, ensuring that our facilities and staff are dedicated to the unique journey of every child.
              </p>
              <div>
                <p className="text-xl font-bold">[PROPRIETOR NAME]</p>
                <p className="text-amber-500">Founder & Proprietor</p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. PORTAL PREVIEW */}
      <section className="py-20 text-center px-6">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-100 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Seamless Parent-School Connectivity</h2>
          <p className="text-slate-600 mb-8">Access real-time grades, attendance, and school announcements through our custom-built digital portal.</p>
          <Link href="/login" className="inline-block bg-slate-900 text-white font-bold px-10 py-4 rounded-full hover:bg-slate-800 transition">
            Access JMA Portal
          </Link>
        </div>
      </section>

    </div>
  );
}