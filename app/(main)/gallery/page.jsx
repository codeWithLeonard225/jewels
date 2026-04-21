"use client";

import { useState } from "react";
import Image from "next/image";

// Updated content to reflect Jewels Model Academy events
const galleryItems = [
  {
    type: "image",
    src: "/images/sports1.jpg",
    alt: "Jewels Athletics",
    category: "Sports",
    title: "Annual Inter-House Sports",
    description: "Witnessing the competitive spirit and athletic brilliance of our young jewels."
  },
  {
    type: "image",
    src: "/images/thanksgiving1.jpg",
    alt: "Cultural Day",
    category: "Culture",
    title: "Cultural Heritage Day",
    description: "Celebrating the rich diversity and traditions of Sierra Leone within our academy."
  },
  {
    type: "video",
    src: "/videos/fieldtrip.mp4",
    alt: "Excursion Video",
    category: "Excursions",
    title: "Museum & Heritage Tour",
    description: "Taking learning beyond the classroom to explore our nation's history."
  },
  {
    type: "image",
    src: "/images/debate1.jpg",
    alt: "Academic Debate",
    category: "Academics",
    title: "Inter-School Debate Championship",
    description: "Our scholars articulating brilliant ideas with confidence and eloquence."
  },
  {
    type: "video",
    src: "/videos/debate.mp4",
    alt: "Lab Work Video",
    category: "Academics",
    title: "STEM Innovation Lab",
    description: "A glimpse into our hands-on approach to science and technology."
  },
];

const categories = ["All", "Academics", "Sports", "Culture", "Excursions"];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalItem, setModalItem] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Visual Journey</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mt-2">
            Life at <span className="text-amber-500">JMA</span>
          </h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        {/* Pill-style Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 uppercase text-xs tracking-widest ${
                activeCategory === cat
                  ? "bg-slate-900 text-amber-400 shadow-xl scale-105"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid with Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setModalItem(item)}
            >
              <div className="relative overflow-hidden">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={350}
                    className="object-cover w-full h-72 group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="relative h-72">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      loop
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white text-2xl">▶</span>
                    </div>
                  </div>
                )}
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-slate-900 text-[10px] font-black uppercase px-3 py-1 rounded-md shadow-lg">
                        {item.category}
                    </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Backdrop Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setModalItem(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
                onClick={() => setModalItem(null)}
                className="absolute top-4 right-4 z-10 bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
            >
                ✕
            </button>

            <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 bg-black">
                    {modalItem.type === "image" ? (
                    <Image
                        src={modalItem.src}
                        alt={modalItem.alt}
                        width={1200}
                        height={800}
                        className="object-contain w-full h-[300px] md:h-[600px]"
                    />
                    ) : (
                    <video
                        src={modalItem.src}
                        className="w-full h-[300px] md:h-[600px] object-cover"
                        controls
                        autoPlay
                    />
                    )}
                </div>
                <div className="md:w-1/3 p-8 flex flex-col justify-center">
                    <span className="text-amber-600 font-bold text-xs uppercase tracking-tighter mb-2">{modalItem.category}</span>
                    <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">{modalItem.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg mb-8">{modalItem.description}</p>
                    <button
                        onClick={() => setModalItem(null)}
                        className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition"
                    >
                        Return to Gallery
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}