import Modal from "./Modal";

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Shortcut {
  keys: string[];
  description: string;
}

const shortcuts: Shortcut[] = [
  { keys: ["←"], description: "Slide sebelumnya" },
  { keys: ["→"], description: "Slide berikutnya" },
  { keys: ["Home"], description: "Ke slide pertama" },
  { keys: ["End"], description: "Ke slide terakhir" },
  { keys: ["T"], description: "Buka daftar isi" },
  { keys: ["O"], description: "Mode Overview" },
  { keys: ["D"], description: "Toggle Dark Mode" },
  { keys: ["F"], description: "Toggle Fullscreen" },
  { keys: ["?"], description: "Tampilkan bantuan" },
  { keys: ["Esc"], description: "Tutup modal / keluar" },
];

export default function KeyboardShortcutsModal({
  isOpen,
  onClose,
}: KeyboardShortcutsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="⌨️ Keyboard Shortcuts">
      <div className="space-y-2">
        {shortcuts.map((shortcut, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <span className="text-slate-700 dark:text-slate-300">
              {shortcut.description}
            </span>
            <div className="flex gap-1">
              {shortcut.keys.map((key, keyIdx) => (
                <kbd
                  key={keyIdx}
                  className="px-3 py-1 text-sm font-mono bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded shadow-sm"
                >
                  {key}
                </kbd>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          💡 <strong>Tip:</strong> Tekan{" "}
          <kbd className="px-2 py-0.5 bg-blue-200 dark:bg-blue-800 rounded text-xs">
            ?
          </kbd>{" "}
          kapan saja untuk membuka bantuan ini.
        </p>
      </div>
    </Modal>
  );
}
