import React from "react";
import { Search, Compass, BookOpen, Clock, Tag, X, Flame } from "lucide-react";
import { Article, CategoryType, CATEGORIES } from "../data/articles";

interface ArticleSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (cat: CategoryType) => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  currentArticleId: string;
}

export const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  articles,
  onSelectArticle,
  currentArticleId,
}) => {
  // Popular articles (curated top reads)
  const popularArticles = articles.slice(0, 3);
  // Recent articles
  const recentArticles = [...articles].reverse().slice(0, 3);

  // Category counts
  const getCategoryCount = (cat: CategoryType) => {
    if (cat === "All") return articles.length;
    return articles.filter((a) => a.category === cat).length;
  };

  return (
    <aside className="space-y-8">
      {/* 1. Search Articles Widget */}
      <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs">
        <h3 className="font-editorial text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
          <Search className="w-4 h-4 text-[#0B4635]" />
          <span>Search Articles</span>
        </h3>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search places, food, culture..."
            className="w-full pl-9 pr-8 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B4635] text-stone-800 placeholder-stone-400 transition-colors"
          />
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-700 p-0.5 rounded-full"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="text-xs text-stone-500 mt-2">
            Filtering articles containing "{searchQuery}"
          </p>
        )}
      </div>

      {/* 2. Categories Filter */}
      <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs">
        <h3 className="font-editorial text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
          <Tag className="w-4 h-4 text-[#0B4635]" />
          <span>Categories</span>
        </h3>
        <div className="space-y-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer text-left ${
                  isSelected
                    ? "bg-[#0B4635] text-white font-medium"
                    : "text-stone-700 hover:bg-stone-50 hover:text-[#0B4635]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Popular Articles */}
      <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs">
        <h3 className="font-editorial text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
          <Flame className="w-4 h-4 text-[#C69214]" />
          <span>Popular Articles</span>
        </h3>
        <div className="space-y-4">
          {popularArticles.map((article, idx) => {
            const isCurrent = currentArticleId === article.id;
            return (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className={`group cursor-pointer pb-3 border-b border-stone-100 last:border-0 last:pb-0 ${
                  isCurrent ? "opacity-75" : ""
                }`}
              >
                <div className="flex gap-3 items-start">
                  <span className="font-editorial font-bold text-stone-300 text-lg group-hover:text-[#C69214] transition-colors">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 group-hover:text-[#0B4635] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Recent Articles */}
      <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs">
        <h3 className="font-editorial text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#0B4635]" />
          <span>Recent Articles</span>
        </h3>
        <div className="space-y-4">
          {recentArticles.map((article) => {
            const isCurrent = currentArticleId === article.id;
            return (
              <div
                key={`recent-${article.id}`}
                onClick={() => onSelectArticle(article)}
                className={`group cursor-pointer pb-3 border-b border-stone-100 last:border-0 last:pb-0 ${
                  isCurrent ? "opacity-75" : ""
                }`}
              >
                <h4 className="text-sm font-semibold text-stone-900 group-hover:text-[#0B4635] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                  <span>{article.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Kerala Quick Travel Tip Callout */}
      <div className="bg-[#0B4635]/5 border border-[#0B4635]/20 p-5 rounded-xl">
        <div className="flex items-center gap-2 text-[#0B4635] font-semibold text-xs uppercase tracking-wider mb-1.5">
          <Compass className="w-4 h-4 text-[#C69214]" />
          <span>Traveler Note</span>
        </div>
        <p className="text-xs text-stone-700 leading-relaxed">
          Kerala observes strict monsoon rhythm and temple dress codes. Check local festival calendars for Thrissur Pooram and Onam boat races when finalizing dates.
        </p>
      </div>
    </aside>
  );
};
