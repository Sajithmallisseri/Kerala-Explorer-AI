import React, { useState, useMemo } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ExploreSection } from "./components/ExploreSection";
import { ArticleView } from "./components/ArticleView";
import { ArticleSidebar } from "./components/ArticleSidebar";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { SupportSection } from "./components/SupportSection";
import { Footer } from "./components/Footer";
import { PrivacyModal } from "./components/PrivacyModal";
import { ARTICLES, Article, CategoryType } from "./data/articles";
import { EXPLORE_SIX, Destination } from "./data/destinations";
import { BookOpen, Sparkles, Filter, X } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [currentArticle, setCurrentArticle] = useState<Article>(ARTICLES[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // When user clicks "Read Article" on a destination card
  const handleSelectDestination = (dest: Destination) => {
    // Ensure the flagship 10 places article is loaded
    const flagship = ARTICLES.find((a) => a.isFlagship) || ARTICLES[0];
    setCurrentArticle(flagship);
    setActiveTab("articles");

    // Scroll to articles section first, then to the destination
    setTimeout(() => {
      const el = document.getElementById(`dest-${dest.id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Flash subtle highlight
        el.classList.add("bg-amber-50/40");
        setTimeout(() => {
          el.classList.remove("bg-amber-50/40");
        }, 2000);
      } else {
        scrollToSection("articles");
      }
    }, 150);
  };

  // Filtered articles based on search & category
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesTitle = article.title.toLowerCase().includes(query);
      const matchesSubtitle = article.subtitle.toLowerCase().includes(query);
      const matchesTags = article.tags.some((t) => t.toLowerCase().includes(query));
      const matchesCategoryName = article.category.toLowerCase().includes(query);
      const matchesDest =
        article.destinations?.some(
          (d) =>
            d.name.toLowerCase().includes(query) ||
            d.district.toLowerCase().includes(query) ||
            d.shortDesc.toLowerCase().includes(query)
        ) || false;

      return (
        matchesCategory &&
        (matchesTitle || matchesSubtitle || matchesTags || matchesCategoryName || matchesDest)
      );
    });
  }, [searchQuery, selectedCategory]);

  const handleSelectArticle = (article: Article) => {
    setCurrentArticle(article);
    setActiveTab("articles");
    const el = document.getElementById("articles");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenSearch = () => {
    scrollToSection("articles");
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#0B4635] selection:text-amber-200">
      {/* 1. Header / Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigate={scrollToSection}
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <section id="home">
          <Hero
            onExploreArticles={() => scrollToSection("articles")}
            onAboutKerala={() => scrollToSection("about")}
            onExploreDestinations={() => scrollToSection("destinations")}
          />
        </section>

        {/* 3. Explore Kerala 6-Destination Cards Section */}
        <ExploreSection
          destinations={EXPLORE_SIX}
          onSelectDestination={handleSelectDestination}
          onViewAllDestinations={() => {
            const flagship = ARTICLES.find((a) => a.isFlagship) || ARTICLES[0];
            setCurrentArticle(flagship);
            scrollToSection("articles");
          }}
        />

        {/* 4. Article & Magazine Hub Section */}
        <section id="articles" className="py-20 bg-stone-100/60 border-t border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Editorial Lead In */}
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B4635] tracking-widest uppercase mb-2">
                <BookOpen className="w-3.5 h-3.5 text-[#C69214]" />
                <span>Kerala Travel Library</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight text-balance">
                Articles & Field Guides
              </h2>
              <p className="mt-2 text-stone-600 text-sm sm:text-base text-balance">
                In-depth destination profiles, cultural narratives, culinary histories, and practical itineraries for the discerning traveler.
              </p>
            </div>

            {/* Active Filters / Search Notification Banner */}
            {(searchQuery || selectedCategory !== "All") && (
              <div className="mb-8 p-4 bg-white rounded-xl border border-stone-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm text-stone-700">
                  <Filter className="w-4 h-4 text-[#0B4635]" />
                  <span>
                    Showing {filteredArticles.length} article
                    {filteredArticles.length === 1 ? "" : "s"}
                    {selectedCategory !== "All" && (
                      <> in <strong>"{selectedCategory}"</strong></>
                    )}
                    {searchQuery && (
                      <> matching <strong>"{searchQuery}"</strong></>
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {filteredArticles.map((art) => (
                    <button
                      key={art.id}
                      onClick={() => handleSelectArticle(art)}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        currentArticle.id === art.id
                          ? "bg-[#0B4635] text-white font-medium"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {art.title.length > 28 ? art.title.slice(0, 28) + "..." : art.title}
                    </button>
                  ))}

                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-800 ml-2 font-medium cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                    <span>Reset filter</span>
                  </button>
                </div>
              </div>
            )}

            {/* 2-Column Responsive Layout: 70% Main Article / 30% Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Main Article Canvas (8 cols on lg) */}
              <div className="lg:col-span-8">
                <ArticleView
                  article={currentArticle}
                  onSelectFlagship={() => {
                    const flagship = ARTICLES.find((a) => a.isFlagship) || ARTICLES[0];
                    setCurrentArticle(flagship);
                  }}
                  onDestinationClick={handleSelectDestination}
                />
              </div>

              {/* Sidebar (4 cols on lg) */}
              <div className="lg:col-span-4 sticky top-24">
                <ArticleSidebar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={(cat) => {
                    setSelectedCategory(cat);
                    // If filtering by a category that has an article, preview it
                    const match = ARTICLES.find((a) => cat === "All" || a.category === cat);
                    if (match && currentArticle.category !== cat && cat !== "All") {
                      setCurrentArticle(match);
                    }
                  }}
                  articles={ARTICLES}
                  onSelectArticle={handleSelectArticle}
                  currentArticleId={currentArticle.id}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Support Kerala Explorer Section */}
        <SupportSection />

        {/* 6. About Section */}
        <AboutSection />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectArticle={handleSelectArticle}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
