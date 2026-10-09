import Modal from "./Modal";
import { ArrowLeftRight, Layout, HelpCircle } from "lucide-react";

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Shortcut {
  keys: string[];
  description: string;
}

interface ShortcutGroup {
  category: string;
  icon: React.ReactNode;
  shortcuts: Shortcut[];
}

const shortcutGroups: ShortcutGroup[] = [
  {
    category: "Navigasi",
    icon: <ArrowLeftRight size={16} className="text-blue-500" />,
    shortcuts: [
      { keys: ["←"], description: "Slide sebelumnya" },
      { keys: ["→"], description: "Slide berikutnya" },
      { keys: ["Home"], description: "Ke slide pertama" },
      { keys: ["End"], description: "Ke slide terakhir" },
    ],
  },
  {
    category: "UI & Tampilan",
    icon: <Layout size={16} className="text-purple-500" />,
    shortcuts: [
      { keys: ["T"], description: "Buka daftar isi" },
      { keys: ["O"], description: "Mode Overview" },
      { keys: ["D"], description: "Toggle Dark Mode" },
      { keys: ["F"], description: "Toggle Fullscreen" },
    ],
  },
  {
    category: "Bantuan",
    icon: <HelpCircle size={16} className="text-green-500" />,
    shortcuts: [
      { keys: ["?"], description: "Tampilkan bantuan" },
      { keys: ["Esc"], description: "Tutup modal / keluar" },
    ],
  },
];

export default function KeyboardShortcutsModal({
  isOpen,
  onClose,
}: KeyboardShortcutsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="⌨️ Keyboard Shortcuts">
      <div className="space-y-6" role="list">
        {shortcutGroups.map((group, groupIdx) => (
          <div key={groupIdx}>
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">
              {group.icon}
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wide">
                {group.category}
              </h3>
            </div>

            {/* Shortcuts List */}
            <div className="space-y-1">
              {group.shortcuts.map((shortcut, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  role="listitem"
                >
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {shortcut.description}
                  </span>
                  <div className="flex gap-1 shrink-0 ml-4">
                    {shortcut.keys.map((key, keyIdx) => (
                      <kbd
                        key={keyIdx}
                        className="px-3 py-1 text-xs font-mono bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded shadow-sm min-w-8 text-center"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tip Box */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
          💡 <strong>Tip:</strong> Tekan{" "}
          <kbd className="px-2 py-0.5 bg-blue-200 dark:bg-blue-800 rounded text-xs font-mono border border-blue-300 dark:border-blue-700">
            ?
          </kbd>{" "}
          kapan saja untuk membuka bantuan ini.
        </p>
      </div>
    </Modal>
  );
}
