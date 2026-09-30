import React from "react";
import { ArrowRight, BookOpen, Info, MapPin } from "lucide-react";

interface HeroProps {
  onExploreArticles: () => void;
  onAboutKerala: () => void;
  onExploreDestinations: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreArticles,
  onAboutKerala,
  onExploreDestinations,
}) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Container with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_kerala_backwaters_1790745390707.jpg"
          alt="Tranquil Kerala backwaters with traditional houseboat at golden sunrise"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-[#072E23]/25 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        {/* Curatorial subtle kicker without pill box */}
        <div className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>God's Own Country · Authentic Travel Journal</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        </div>

        {/* Mandatory Heading */}
        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl mx-auto drop-shadow-sm text-balance">
          Discover the Beauty of Kerala
        </h1>

        {/* Mandatory Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          Explore Kerala's mountains, backwaters, beaches, culture and unforgettable experiences.
        </p>

        {/* Mandatory Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onExploreArticles}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0B4635] hover:bg-[#072E23] rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-emerald-600/40 focus-visible:outline-2 focus-visible:outline-amber-400 group cursor-pointer whitespace-nowrap"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>Explore Articles</span>
            <ArrowRight className="w-4 h-4 text-stone-300 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onAboutKerala}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-stone-100 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-lg border border-white/30 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white cursor-pointer whitespace-nowrap"
          >
            <Info className="w-4 h-4 text-amber-200" />
            <span>About Kerala</span>
          </button>
        </div>

        {/* Quick Location Anchor Ribbon */}
        <div className="mt-14 pt-8 border-t border-white/15 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-left text-xs sm:text-sm text-stone-300">
          <button
            onClick={onExploreDestinations}
            className="hover:text-amber-300 transition-colors flex items-center gap-2 group text-left cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-white group-hover:text-amber-300">Munnar & Hills</p>
              <p className="text-xs text-stone-400">1,600m Altitudes</p>
            </div>
          </button>
          <button
            onClick={onExploreDestinations}
            className="hover:text-amber-300 transition-colors flex items-center gap-2 group text-left cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-white group-hover:text-amber-300">Alleppey Canals</p>
              <p className="text-xs text-stone-400">900km Waterways</p>
            </div>
          </button>
          <button
            onClick={onExploreDestinations}
            className="hover:text-amber-300 transition-colors flex items-center gap-2 group text-left cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-white group-hover:text-amber-300">Fort Kochi</p>
              <p className="text-xs text-stone-400">600 Yrs Heritage</p>
            </div>
          </button>
          <button
            onClick={onExploreDestinations}
            className="hover:text-amber-300 transition-colors flex items-center gap-2 group text-left cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-white group-hover:text-amber-300">Varkala Cliffs</p>
              <p className="text-xs text-stone-400">Arabian Sea Sunset</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
