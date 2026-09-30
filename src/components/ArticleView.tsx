import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Compass,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Bookmark,
  Share2,
  ChevronRight,
  Sun,
  CloudRain,
  Luggage,
} from "lucide-react";
import { Article } from "../data/articles";
import { Destination } from "../data/destinations";

interface ArticleViewProps {
  article: Article;
  onSelectFlagship: () => void;
  onDestinationClick?: (dest: Destination) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onSelectFlagship,
}) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToDestination = (id: string) => {
    const el = document.getElementById(`dest-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isFlagship = article.isFlagship;

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden">
      {/* Article Header & Featured Image */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
        <img
          src={article.featuredImage}
          alt={`${article.title} - Kerala travel guide featured editorial image`}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="eager"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.triedFallback) {
              target.dataset.triedFallback = "true";
              target.src = `.${article.featuredImage}`;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 text-white max-w-4xl">
          {/* Metadata without pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-amber-300 font-medium mb-2.5">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-editorial text-2xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm text-balance">
            {article.title}
          </h1>

          <p className="mt-2 text-sm sm:text-base text-stone-200 line-clamp-2 sm:line-clamp-none font-light">
            {article.subtitle}
          </p>
        </div>
      </div>

      {/* Author Byline & Social Actions Bar */}
      <div className="px-6 sm:px-10 py-5 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4 bg-stone-50/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0B4635] text-amber-300 font-bold flex items-center justify-center text-sm shadow-xs">
            {article.author.avatarInitials}
          </div>
          <div>
            <div className="text-sm font-semibold text-stone-900">
              {article.author.name}
            </div>
            <div className="text-xs text-stone-500">{article.author.role}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              bookmarked
                ? "bg-[#0B4635] text-white border-[#0B4635]"
                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
            }`}
            title="Save reading progress"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>{bookmarked ? "Saved" : "Save Article"}</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
            title="Copy article link"
          >
            <Share2 className="w-3.5 h-3.5 text-stone-500" />
            <span>{copied ? "Link Copied!" : "Share"}</span>
          </button>
        </div>
      </div>

      {/* Back button if viewing non-flagship article */}
      {!isFlagship && (
        <div className="px-6 sm:px-10 pt-6">
          <button
            onClick={onSelectFlagship}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B4635] hover:text-[#072E23] transition-colors cursor-pointer"
          >
            <span>← Return to "10 Beautiful Places to Visit in Kerala"</span>
          </button>
        </div>
      )}

      {/* Article Body */}
      <div className="p-6 sm:p-10 lg:p-12 max-w-4xl mx-auto">
        {/* Editorial Introduction with Drop Cap */}
        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed mb-12 space-y-4">
          {article.introParagraphs.map((para, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? "first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:text-[#0B4635] leading-relaxed"
                  : "leading-relaxed"
              }
            >
              {para}
            </p>
          ))}
        </div>

        {/* Flagship Article Specifics: Table of Contents & 10 Destinations */}
        {isFlagship && article.destinations && (
          <>
            {/* Table of Contents Box */}
            <nav
              aria-label="Table of contents"
              className="my-10 p-6 sm:p-8 bg-[#FAF8F5] border border-stone-200 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4 border-b border-stone-200/80 pb-3">
                <h2 className="font-editorial text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#0B4635]" />
                  <span>Table of Contents</span>
                </h2>
                <span className="text-xs text-stone-500">10 Top Destinations</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {article.destinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => scrollToDestination(dest.id)}
                    className="flex items-center justify-between text-left py-1 text-sm text-stone-700 hover:text-[#0B4635] group transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-editorial font-bold text-[#C69214] text-xs">
                        {dest.number < 10 ? `0${dest.number}` : dest.number}.
                      </span>
                      <span className="font-medium group-hover:underline">
                        {dest.name}
                      </span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#0B4635] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/80 text-xs text-stone-600 flex items-center justify-between">
                <button
                  onClick={() => {
                    const el = document.getElementById("plan-trip-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-semibold text-[#0B4635] hover:underline cursor-pointer"
                >
                  Jump directly to "Plan Your Kerala Trip" Guide ↓
                </button>
              </div>
            </nav>

            {/* The 10 Destinations Numbered Sections */}
            <div className="space-y-16 mt-14">
              {article.destinations.map((dest) => (
                <section
                  key={dest.id}
                  id={`dest-${dest.id}`}
                  className="pt-4 scroll-mt-24 border-b border-stone-200/80 pb-14 last:border-b-0"
                >
                  {/* Numbered Section Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0B4635] tracking-widest uppercase mb-1">
                      <span>Destination {dest.number < 10 ? `0${dest.number}` : dest.number} of 10</span>
                      <span aria-hidden="true">·</span>
                      <span>{dest.district}</span>
                    </div>

                    <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
                      {dest.number}. {dest.name}
                    </h2>

                    <p className="font-editorial italic text-base sm:text-lg text-[#C69214] mt-1">
                      {dest.tagline}
                    </p>
                  </div>

                  {/* Destination Photo */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden my-6 bg-stone-100 border border-stone-200 shadow-xs">
                    <img
                      src={dest.image}
                      alt={`Scenic landscape of ${dest.name}, ${dest.tagline} in ${dest.district}, Kerala`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.triedFallback) {
                          target.dataset.triedFallback = "true";
                          target.src = `.${dest.image}`;
                        }
                      }}
                    />
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md font-sans">
                      {dest.district}
                    </div>
                  </div>

                  {/* Full Description Prose */}
                  <div className="space-y-3 text-stone-700 text-base leading-relaxed mb-6">
                    <p className="font-medium text-stone-900">{dest.shortDesc}</p>
                    <p>{dest.fullDescription}</p>
                  </div>

                  {/* Highlights Bulleted List */}
                  <div className="my-6 p-5 bg-stone-50 rounded-xl border border-stone-200/70">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C69214]" />
                      <span>Signature Highlights</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-stone-700">
                      {dest.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0B4635] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Travel Tips & Best Time Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    {/* Best Time to Visit */}
                    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1.5 flex items-center gap-1.5">
                        <Sun className="w-4 h-4 text-amber-600" />
                        <span>Best Time to Visit</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                        {dest.bestTimeToVisit}
                      </p>
                    </div>

                    {/* How to Reach & Duration */}
                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#0B4635]" />
                        <span>Logistics & Duration</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed mb-1">
                        <strong>Ideal Stay:</strong> {dest.idealDuration}
                      </p>
                      <p className="text-xs text-emerald-900/80 leading-relaxed">
                        {dest.howToReach}
                      </p>
                    </div>
                  </div>

                  {/* Essential Travel Tips */}
                  <div className="p-4 bg-white rounded-xl border border-stone-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2 flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-[#0B4635]" />
                      <span>Insider Travel Tips</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600">
                      {dest.travelTips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-[#C69214] font-bold">›</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              ))}
            </div>

            {/* "Plan Your Kerala Trip" Master Section */}
            {article.tripPlanner && (
              <section
                id="plan-trip-section"
                className="mt-16 pt-10 border-t-2 border-[#0B4635]/20 scroll-mt-24"
              >
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0B4635] mb-2">
                    <Luggage className="w-4 h-4 text-[#C69214]" />
                    <span>Travel Blueprint</span>
                  </div>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
                    Plan Your Kerala Trip
                  </h2>
                  <p className="text-stone-600 text-sm sm:text-base mt-2">
                    {article.tripPlanner.overview}
                  </p>
                </div>

                {/* Itineraries */}
                <div className="space-y-6 mb-12">
                  <h3 className="font-editorial text-xl font-bold text-stone-900">
                    Recommended Itinerary Templates
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {article.tripPlanner.itineraries.map((itin, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-5 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-[#C69214] mb-1">
                            {itin.duration}
                          </div>
                          <h4 className="font-editorial text-lg font-bold text-stone-900 mb-2">
                            {itin.title}
                          </h4>
                          <div className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2 py-1 rounded-md mb-3">
                            {itin.route}
                          </div>
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                            {itin.summary}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Season Breakdown */}
                <div className="my-10 p-6 bg-[#FAF8F5] border border-stone-200 rounded-xl">
                  <h3 className="font-editorial text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <Sun className="w-5 h-5 text-amber-500" />
                    <span>Kerala Climate & Season Guide</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {article.tripPlanner.bestSeasons.map((season, sIdx) => (
                      <div key={sIdx} className="bg-white p-4 rounded-lg border border-stone-200/80">
                        <span className="text-xs font-semibold text-[#0B4635] block">
                          {season.months}
                        </span>
                        <h4 className="text-sm font-bold text-stone-900 mt-0.5 mb-1.5">
                          {season.season}
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {season.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packing Checklist */}
                <div className="p-6 bg-white border border-stone-200 rounded-xl">
                  <h3 className="font-editorial text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Luggage className="w-4 h-4 text-[#0B4635]" />
                    <span>Essential Kerala Packing Checklist</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {article.tripPlanner.packingChecklist.map((item, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#C69214] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {/* Other Regular Article Sections (e.g. Food Guide, Houseboat Guide) */}
        {!isFlagship && article.sections && (
          <div className="space-y-10 mt-8">
            {article.sections.map((sec, secIdx) => (
              <section key={secIdx} className="border-b border-stone-200/70 pb-8 last:border-0">
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  {sec.heading}
                </h2>
                <div className="space-y-3 text-stone-700 text-base leading-relaxed">
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
                {sec.tips && sec.tips.length > 0 && (
                  <div className="mt-4 p-3.5 bg-amber-50/60 rounded-lg border border-amber-200/60 text-xs sm:text-sm text-amber-950">
                    <strong>Insider Note: </strong>
                    {sec.tips.join(" ")}
                  </div>
                )}
              </section>
            ))}

            <div className="pt-6 border-t border-stone-200 text-center">
              <button
                onClick={onSelectFlagship}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#0B4635] hover:bg-[#072E23] transition-colors shadow-xs"
              >
                <span>Read Master Article: 10 Beautiful Places to Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
