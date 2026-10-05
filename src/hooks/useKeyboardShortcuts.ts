import { useEffect } from "react";

interface KeyboardActions {
  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
  onToggleToc: () => void;
  onToggleOverview: () => void;
  onToggleDarkMode: () => void;
  onToggleFullscreen: () => void;
  onToggleHelp: () => void;
}

export function useKeyboardShortcuts(
  actions: KeyboardActions,
  enabled: boolean = true,
  isOverviewOpen: boolean = false,
) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Abaikan jika user sedang mengetik di input/textarea
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // Di overview mode, hanya Esc (O) yang bekerja untuk keluar
      if (isOverviewOpen) {
        if (e.key === "Escape" || e.key === "o" || e.key === "O") {
          e.preventDefault();
          actions.onToggleOverview();
        }
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          actions.onNext();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          actions.onPrev();
          break;
        case "Home":
          e.preventDefault();
          actions.onFirst();
          break;
        case "End":
          e.preventDefault();
          actions.onLast();
          break;
        case "t":
        case "T":
          actions.onToggleToc();
          break;
        case "o":
        case "O":
          actions.onToggleOverview();
          break;
        case "d":
        case "D":
          actions.onToggleDarkMode();
          break;
        case "f":
        case "F":
          actions.onToggleFullscreen();
          break;
        case "?":
          actions.onToggleHelp();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [actions, enabled, isOverviewOpen]);
}
