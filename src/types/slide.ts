import type { ReactNode } from "react";

export type SlideType =
  | "intro" // Slide pembuka dengan CTA
  | "content" // Slide materi standar (title + text + code)
  | "features" // Slide dengan grid fitur (3-4 kolom)
  | "conclusion" // Slide kesimpulan dengan list
  | "closing"; // Slide penutup dengan kontak

export interface CodeExample {
  language: string;
  code: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface Slide {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string;
  emoji?: string;
  code?: CodeExample;
  tip?: string;
  features?: FeatureItem[];
  listItems?: string[];
  component?: ReactNode; // Untuk slide yang butuh custom layout
}
