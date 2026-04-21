// app/components/MainFooter.js

import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Curriculum', href: '/curriculum' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Contact Us', href: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/policy' },
  { name: 'Terms of Service', href: '/terms' },
];

export default function MainFooter() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Identity (4 Spans) */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/jewels.jpg" // Update with your actual logo path
                  alt="Jewels Model Academy Logo"
                  fill
                  className="object-contain filter brightness-110"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="block text-xl font-bold text-white tracking-tight uppercase">
                  Jewels Model
                </span>
                <span className="block text-xs text-amber-500 font-semibold tracking-[0.2em] uppercase">
                  Academy
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Nurturing character, academic excellence, and 21st-century skills 
              to shape the global leaders of tomorrow in Sierra Leone.
            </p>
            <div className="flex space-x-4">
               {/* Simplified Social Icons */}
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                 <span className="text-sm">FB</span>
               </a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                 <span className="text-sm">IG</span>
               </a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                 <span className="text-sm">LI</span>
               </a>
            </div>
          </div>
          
          {/* Column 2: Navigation (2 Spans) */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Explore</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact Details (3 Spans) */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Get In Touch</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-amber-500">📍</span>
                <span>Freetown, Sierra Leone</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-500">📞</span>
                <span>(+232) 00 000 000</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-500">📧</span>
                <span className="break-all">admissions@jewelsmodel.edu</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter/Motto (3 Spans) */}
          <div className="md:col-span-3">
             <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Our Motto</h3>
             <div className="p-4 bg-slate-800/50 rounded-lg border-l-2 border-amber-500">
                <p className="text-sm italic text-slate-300">
                  "Polishing every mind to shine like a jewel."
                </p>
             </div>
             <p className="mt-4 text-xs text-slate-500 leading-relaxed">
               Registered and accredited educational institution providing primary and secondary learning.
             </p>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs font-medium text-slate-500 uppercase tracking-widest">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Jewels Model Academy. 
          </p>
          <ul className="flex space-x-6">
             {legalLinks.map((link) => (
                <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition">
                        {link.name}
                    </Link>
                </li>
             ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}