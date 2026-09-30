import React from "react";
import { Compass, Leaf, HeartHandshake, Waves, Sparkles, ShieldCheck } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F5F2EB] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#0B4635] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C69214]" />
              <span>Our Curatorial Mission</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight text-balance">
              About Kerala Explorer
            </h2>

            <div className="prose prose-stone text-stone-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                <strong>Kerala Explorer</strong> is a dedicated travel publication and digital field guide created to celebrate the breathtaking geography, centuries-old traditions, and authentic experiences of Kerala—widely celebrated around the world as <em>God’s Own Country</em>.
              </p>
              <p>
                Our mission is to provide independent, reliable, and deeply informative travel guides. Whether you are charting an unforgettable journey through the mist-shrouded tea gardens of the Western Ghats, searching for secluded backwater canals untouched by mass tourism, or yearning to savor the fragrant spices of centuries-old harbor towns, Kerala Explorer offers field-tested insights without commercial noise.
              </p>
              <p>
                We believe in conscious, respectful travel that honors local communities, supports responsible eco-tourism initiatives, and protects the fragile riparian and high-altitude shola ecosystems that make Kerala one of the world's 36 global biodiversity hotspots.
              </p>
            </div>

            {/* Curated Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#0B4635]/10 text-[#0B4635] flex items-center justify-center mb-2.5">
                  <Compass className="w-4 h-4 text-[#0B4635]" />
                </div>
                <h3 className="font-editorial font-bold text-stone-900 text-base mb-1">
                  Honest Traveler Field Guides
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Real transit routes, seasonal climate nuances, and authentic homestay experiences tested on the ground.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#C69214]/10 text-[#C69214] flex items-center justify-center mb-2.5">
                  <HeartHandshake className="w-4 h-4 text-[#C69214]" />
                </div>
                <h3 className="font-editorial font-bold text-stone-900 text-base mb-1">
                  Cultural Stewardship
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Deep respect for classical performing arts, sacred rituals, and the living heritage of Kerala's diverse communities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Infographic Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B4635]/5 rounded-bl-full pointer-events-none" />

              <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-4">
                Kerala at a Glance
              </h3>

              <dl className="space-y-4 text-sm">
                <div className="flex justify-between items-baseline border-b border-stone-100 pb-2.5">
                  <dt className="text-stone-500 font-medium">State Capital</dt>
                  <dd className="font-semibold text-stone-900">Thiruvananthapuram</dd>
                </div>
                <div className="flex justify-between items-baseline border-b border-stone-100 pb-2.5">
                  <dt className="text-stone-500 font-medium">Arabian Sea Coastline</dt>
                  <dd className="font-semibold text-stone-900 tabular-nums">590 Kilometers</dd>
                </div>
                <div className="flex justify-between items-baseline border-b border-stone-100 pb-2.5">
                  <dt className="text-stone-500 font-medium">Interconnected Waterways</dt>
                  <dd className="font-semibold text-stone-900 tabular-nums">900+ Kilometers</dd>
                </div>
                <div className="flex justify-between items-baseline border-b border-stone-100 pb-2.5">
                  <dt className="text-stone-500 font-medium">Rivers & Lakes</dt>
                  <dd className="font-semibold text-stone-900 tabular-nums">44 Rivers & 34 Lakes</dd>
                </div>
                <div className="flex justify-between items-baseline border-b border-stone-100 pb-2.5">
                  <dt className="text-stone-500 font-medium">Highest Elevation</dt>
                  <dd className="font-semibold text-stone-900 tabular-nums">Anamudi (2,695 m)</dd>
                </div>
                <div className="flex justify-between items-baseline pb-1">
                  <dt className="text-stone-500 font-medium">Primary Languages</dt>
                  <dd className="font-semibold text-stone-900">Malayalam & English</dd>
                </div>
              </dl>

              <div className="mt-8 pt-5 border-t border-stone-200/80 bg-[#0B4635]/5 -mx-8 -mb-8 p-6 text-center">
                <p className="text-xs text-[#0B4635] font-medium">
                  "Where the Western Ghats meet the Arabian Sea, every sunrise brings a story."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
