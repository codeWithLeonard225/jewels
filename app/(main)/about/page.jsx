// app/about/page.js

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* 1. SOPHISTICATED HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <Image 
          src="/images/school-hero.jpg" 
          alt="Jewels Model Academy Campus" 
          fill 
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900"></div>
        
        <div className="relative z-10 text-center px-6">
          <span className="text-amber-500 font-bold tracking-[0.3em] uppercase mb-4 block">Our Heritage</span>
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6">
            Defining <span className="text-amber-400">Brilliance</span> Since Day One
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </section>

      {/* 2. THE IDENTITY SECTION (Overlap Layout) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/classroom.jpg" alt="Learning at JMA" className="w-full h-[500px] object-cover" />
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-amber-100 rounded-2xl -z-10 hidden lg:block"></div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-4">Who We Are</h2>
              <h3 className="text-4xl font-serif text-slate-900 mb-6 leading-tight">
                A Sanctuary for Intellectual and Moral Growth.
              </h3>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  <strong>Jewels Model Academy (JMA)</strong> was founded on the principle that every child is a rough diamond, waiting to be polished into a jewel of immense value to society. 
                </p>
                <p>
                  Located in the heart of Sierra Leone, we provide a rigorous academic framework infused with 21st-century digital competencies. Our approach isn't just about grades; it’s about the holistic refinement of the human spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION (Iconic Cards) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          <div className="flex gap-6 items-start p-8 bg-white shadow-sm rounded-2xl">
            <div className="bg-amber-100 p-4 rounded-xl text-3xl">👁️</div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">The Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To create a global community of learners where every stakeholder—students, parents, and staff—feels recognized as a vital, brilliant facet of our collective success.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start p-8 bg-white shadow-sm rounded-2xl">
            <div className="bg-slate-100 p-4 rounded-xl text-3xl">🚀</div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">The Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower pupils to master knowledge and cultivate the personal integrity required to lead productive, morally upright lives in an ever-evolving world.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES (Alternating Design) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16 px-6">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">Our Foundational Pillars</h2>
          <p className="text-slate-500">The values that define the JMA experience.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 px-6">
          
          <div className="p-12 bg-slate-900 text-white flex flex-col items-center text-center group hover:bg-amber-600 transition-colors duration-500">
            <span className="text-4xl mb-6 group-hover:scale-110 transition-transform">⚖️</span>
            <h3 className="text-2xl font-bold mb-4">Discipline</h3>
            <p className="text-slate-400 group-hover:text-white transition-colors">Moral character is the bedrock of all achievements at Jewels Model Academy.</p>
          </div>

          <div className="p-12 bg-amber-500 text-slate-900 flex flex-col items-center text-center">
            <span className="text-4xl mb-6">🏆</span>
            <h3 className="text-2xl font-bold mb-4 text-white">Excellence</h3>
            <p className="font-medium">We do not settle for average; we push the boundaries of what our students can achieve.</p>
          </div>

          <div className="p-12 bg-slate-900 text-white flex flex-col items-center text-center group hover:bg-amber-600 transition-colors duration-500">
            <span className="text-4xl mb-6 group-hover:scale-110 transition-transform">💡</span>
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p className="text-slate-400 group-hover:text-white transition-colors">Embracing the future through digital literacy and modern pedagogical tools.</p>
          </div>

        </div>
      </section>

      {/* 5. THE ADVANTAGE (Checklist with Style) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif text-slate-900 mb-8">The JMA Advantage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Highly Trained Faculty",
                "Digital-First Classrooms",
                "Safe & Secure Campus",
                "Character Coaching",
                "Flexible Tuition Plans",
                "Global Standards",
                "Active Parent Portal",
                "Modern Facilities"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-amber-500">✦</span> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-12 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-6">Ready to join the JMA family?</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We are currently accepting applications for the new academic term. Experience the difference of an education designed for the future.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-4 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20"
            >
              Start Admission Process
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}