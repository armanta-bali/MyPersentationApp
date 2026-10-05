import { useTheme } from "../../context/ThemeContext";
import {
  Moon,
  Sun,
  Menu,
  Maximize2,
  Minimize2,
  HelpCircle,
  Grid3X3,
} from "lucide-react";

interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
  onOpenToc: () => void;
  onToggleFullscreen: () => void;
  onOpenHelp: () => void;
  onToggleOverview: () => void;
}

export default function Header({
  currentSlide,
  totalSlides,
  isFullscreen,
  onOpenToc,
  onToggleFullscreen,
  onOpenHelp,
  onToggleOverview,
}: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span className="font-bold text-lg">
            armanta<span className="text-blue-600">.dev95</span>
          </span>
          <span className="ml-3 px-2 py-0.5 text-xs bg-slate-200 dark:bg-slate-700 rounded font-mono">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={onToggleOverview}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Overview mode"
            title="Overview Mode (O)"
          >
            <Grid3X3 size={20} />
          </button>
          <button
            onClick={onOpenHelp}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Keyboard shortcuts"
            title="Keyboard Shortcuts (?)"
          >
            <HelpCircle size={20} />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
            title="Toggle Dark Mode (D)"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle fullscreen"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
          <button
            onClick={onOpenToc}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Table of contents"
            title="Table of Contents (T)"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
