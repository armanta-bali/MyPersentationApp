import { useState, useCallback, useMemo } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { slidesData } from "./data/slidesData";
import SlideWrapper from "./components/Slides/SlideWrapper";
import IntroSlide from "./components/Slides/IntroSlide";
import ContentSlide from "./components/Slides/ContentSlide";
import FeaturesSlide from "./components/Slides/FeaturesSlide";
import ConclusionSlide from "./components/Slides/ConclusionSlide";
import ClosingSlide from "./components/Slides/ClosingSlide";
import Header from "./components/Layout/Header";
import Navigation from "./components/Layout/Navigation";
import Modal from "./components/UI/Modal";
import TableOfContents from "./components/Layout/TableOfContents";
import KeyboardShortcutsModal from "./components/UI/KeyboardShortcutsModal";
import OverviewMode from "./components/Layout/OverviewMode";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";
import { useFullscreen } from "./hooks/useFullscreen";

function PresentationApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const { toggleTheme } = useTheme();
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentSlide ? "next" : "prev");
      setCurrentSlide(index);
    },
    [currentSlide],
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < slidesData.length - 1) {
      setDirection("next");
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection("prev");
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const firstSlide = useCallback(() => goToSlide(0), [goToSlide]);
  const lastSlide = useCallback(
    () => goToSlide(slidesData.length - 1),
    [goToSlide],
  );

  const toggleToc = useCallback(() => setIsTocOpen((prev) => !prev), []);
  const toggleHelp = useCallback(() => setIsHelpOpen((prev) => !prev), []);
  const toggleOverview = useCallback(
    () => setIsOverviewOpen((prev) => !prev),
    [],
  );

  const keyboardActions = useMemo(
    () => ({
      onNext: nextSlide,
      onPrev: prevSlide,
      onFirst: firstSlide,
      onLast: lastSlide,
      onToggleToc: toggleToc,
      onToggleOverview: toggleOverview,
      onToggleDarkMode: toggleTheme,
      onToggleFullscreen: toggleFullscreen,
      onToggleHelp: toggleHelp,
    }),
    [
      nextSlide,
      prevSlide,
      firstSlide,
      lastSlide,
      toggleToc,
      toggleOverview,
      toggleTheme,
      toggleFullscreen,
      toggleHelp,
    ],
  );

  const shortcutsEnabled = !isTocOpen && !isHelpOpen;

  useKeyboardShortcuts(keyboardActions, shortcutsEnabled, isOverviewOpen);

  const renderSlide = () => {
    const slide = slidesData[currentSlide];

    switch (slide.type) {
      case "intro":
        return (
          <IntroSlide
            slide={slide}
            onOpenToc={() => setIsTocOpen(true)}
            onNavigate={goToSlide}
          />
        );
      case "content":
        return <ContentSlide slide={slide} />;
      case "features":
        return <FeaturesSlide slide={slide} />;
      case "conclusion":
        return <ConclusionSlide slide={slide} />;
      case "closing":
        return <ClosingSlide slide={slide} />;
      default:
        return <ContentSlide slide={slide} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header
        currentSlide={currentSlide}
        totalSlides={slidesData.length}
        isFullscreen={isFullscreen}
        onOpenToc={() => setIsTocOpen(true)}
        onToggleFullscreen={toggleFullscreen}
        onOpenHelp={() => setIsHelpOpen(true)}
        onToggleOverview={toggleOverview}
      />

      <main className="pt-20 pb-24">
        <SlideWrapper
          slideKey={slidesData[currentSlide].id}
          direction={direction}
        >
          {renderSlide()}
        </SlideWrapper>
      </main>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slidesData.length}
        onPrev={prevSlide}
        onNext={nextSlide}
      />

      <Modal
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        title="📑 Daftar Isi"
      >
        <TableOfContents
          currentSlide={currentSlide}
          onSlideClick={goToSlide}
          onClose={() => setIsTocOpen(false)}
        />
      </Modal>

      <KeyboardShortcutsModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      {isOverviewOpen && (
        <OverviewMode
          currentSlide={currentSlide}
          onSlideClick={goToSlide}
          onClose={() => setIsOverviewOpen(false)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PresentationApp />
    </ThemeProvider>
  );
}
