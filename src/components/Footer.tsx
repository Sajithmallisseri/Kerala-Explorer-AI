import React from "react";
import { Compass, ArrowUp, Heart, Mail, MapPin } from "lucide-react";
import { ARTICLES, Article } from "../data/articles";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectArticle: (article: Article) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectArticle,
  onOpenPrivacy,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const flagshipArticle = ARTICLES.find((a) => a.isFlagship) || ARTICLES[0];
  const featuredArticles = ARTICLES.slice(0, 4);

  return (
    <footer className="bg-[#072E23] text-stone-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          {/* Col 1: Brand & About Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#0B4635] text-amber-300 flex items-center justify-center font-editorial font-bold text-lg">
                <Compass className="w-4 h-4 text-[#C69214]" />
              </span>
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                Kerala Explorer
              </span>
            </div>

            <p className="text-sm text-stone-300/90 leading-relaxed">
              Discover Beautiful Kerala. An independent digital journal exploring the mountains, backwaters, pristine beaches, and living cultural heritage of God's Own Country.
            </p>

            <div className="pt-2 text-xs text-emerald-200/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C69214]" />
                <span>Fort Kochi Heritage Quarter, Ernakulam, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C69214]" />
                <span>editorial@keralaexplorer.org</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-editorial font-bold text-white text-base tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("articles")}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("destinations")}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("support")}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Selected Articles (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-editorial font-bold text-white text-base tracking-wide">
              Articles
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {featuredArticles.map((art) => (
                <li key={art.id}>
                  <button
                    onClick={() => onSelectArticle(art)}
                    className="hover:text-amber-300 text-left line-clamp-2 transition-colors cursor-pointer"
                  >
                    {art.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: About Kerala Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-editorial font-bold text-white text-base tracking-wide">
              About Kerala
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Nestled between the emerald Arabian Sea and the Western Ghats, Kerala is characterized by its 44 rivers, tranquil backwater lagoons, aromatic spice plantations, and historic trading ports that have welcomed travelers for millennia.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenPrivacy}
                className="text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4 cursor-pointer"
              >
                Read Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap items-center gap-3">
            <p>Copyright © 2026 Kerala Explorer. All rights reserved.</p>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-stone-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-300 hover:text-amber-300 transition-colors cursor-pointer py-1"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
