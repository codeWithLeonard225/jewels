// app/(main)/services/page.js

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Academic Excellence & Services | Jewels Model Academy",
  description:
    "Explore the comprehensive academic pathways and elite student support services at Jewels Model Academy, from early years to WASSCE excellence.",
};

const serviceCategories = [
  { 
    name: "Premier Academic Pathways", 
    description: "Our curriculum is a blend of national standards and global best practices, designed to polish every mind for peak performance.", 
    icon: "💎",
    details: [
      "Early Years (Nursery): Stimulating curiosity through play-based and cognitive learning.",
      "Primary Foundation: Developing core literacy, numeracy, and critical thinking.",
      "Junior Academy (BECE): Targeted preparation for the Basic Education Certificate Examination.",
      "Senior Academy (WASSCE): Specialized streams in Sciences, Arts, and Commerce for WASSCE success."
    ],
    image: "/images/service-academics.jpg" 
  },
  {
    name: "Holistic Student Development",
    description:
      "Education at JMA extends beyond the classroom. We focus on the social, psychological, and moral refinement of our students.",
    icon: "🌟",
    details: [
      "Mentorship & Counseling: Personalized academic and emotional guidance.",
      "Leadership Programs: Cultivating the next generation of Sierra Leonean leaders.",
      "Elite Co-curriculars: Competitive sports, debating, and creative arts clubs.",
      "Moral Integrity: A disciplined environment rooted in strong ethical values.",
    ],
    image: "/images/service-support.jpg",
  },
  {
    name: "Advanced Learning Environment",
    description:
      "We invest in a campus that inspires. Our facilities are designed to be safe, modern, and conducive to 21st-century learning.",
    icon: "🏛️",
    details: [
      "Modern Classrooms: Spacious, ventilated, and tech-ready learning spaces.",
      "Digital Innovation Hub: Hands-on ICT training and computer literacy programs.",
      "Resource Center: A well-stocked library with physical and digital research tools.",
      "Secure Campus: 24/7 security and a clean, organized school ecosystem.",
    ],
    image: "/images/service-facilities.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-slate-900 py-24 px-6 text-white text-center relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Educational <span className="text-amber-500">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Providing a comprehensive academic journey from foundational years to secondary mastery, tailored for the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {serviceCategories.map((service, index) => (
          <div
            key={service.name}
            className={`flex flex-col lg:flex-row items-center gap-16 mb-32 last:mb-0 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image with Decorative Border */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 border-2 border-slate-100 rounded-2xl group-hover:border-amber-200 transition-colors -z-10"></div>
              <div className="relative h-80 md:h-[450px] w-full rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{service.icon}</span>
                <div className="h-px flex-1 bg-amber-500/30"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                {service.name}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed italic">
                {service.description}
              </p>

              <ul className="grid grid-cols-1 gap-4 mb-10">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span className="text-slate-700 font-medium">{detail}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-slate-900 bg-amber-500 hover:bg-amber-600 font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-amber-500/20"
              >
                Inquire About {service.name.split(' ')[0]} →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-slate-900 mb-6">
            Begin Your <span className="text-amber-600 underline decoration-amber-200 underline-offset-8">Jewel’s</span> Journey
          </h2>
          <p className="text-slate-600 text-lg mb-10">
            Admissions for the 2026 academic session are currently open for all levels. 
            Join an academy where excellence is a standard, not an option.
          </p>
          <Link
            href="/admissions"
            className="bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold px-12 py-4 rounded-full shadow-2xl transition inline-block"
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </div>
  );
}