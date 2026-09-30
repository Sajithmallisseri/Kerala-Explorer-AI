import React from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Destination } from "../data/destinations";

interface ExploreSectionProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
  onViewAllDestinations: () => void;
}

export const ExploreSection: React.FC<ExploreSectionProps> = ({
  destinations,
  onSelectDestination,
  onViewAllDestinations,
}) => {
  return (
    <section id="destinations" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200/80 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#0B4635] text-xs font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C69214]" />
              <span>Curated Destinations</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight text-balance">
              Explore Kerala
            </h2>
            <p className="mt-2 text-stone-600 text-base sm:text-lg max-w-xl text-balance">
              From misty mountain tea gardens to tranquil lagoons and ancient coastal fortresses, discover Kerala's six most iconic regions.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={onViewAllDestinations}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B4635] hover:text-[#072E23] group transition-colors cursor-pointer"
            >
              <span>View all 10 destinations in the master article</span>
              <ArrowRight className="w-4 h-4 text-[#C69214] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 6 Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <article
              key={dest.id}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200/80 hover:border-[#C69214]/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={dest.image}
                  alt={`${dest.name} in ${dest.district}, Kerala`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    // Styled fallback if image fails
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Fallback pattern underneath */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-900 to-stone-800 flex items-center justify-center p-4 text-center">
                  <span className="font-editorial text-xl text-amber-200">{dest.name}</span>
                </div>

                {/* Subtle gradient vignette at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* District metadata without pill badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/90 font-medium drop-shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>{dest.district}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Number and Name */}
                <div className="mb-2">
                  <span className="text-xs font-semibold text-[#0B4635]/80 uppercase tracking-wider">
                    Destination 0{dest.number}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-stone-900 group-hover:text-[#0B4635] transition-colors mt-0.5">
                    {dest.name}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {dest.shortDesc}
                </p>

                {/* Best Time & Read Article Button */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                  <span className="text-xs text-stone-500">
                    <strong className="text-stone-700">Duration:</strong> {dest.idealDuration}
                  </span>

                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0B4635] bg-[#0B4635]/5 hover:bg-[#0B4635] hover:text-white rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B4635]"
                    aria-label={`Read article about ${dest.name}`}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
