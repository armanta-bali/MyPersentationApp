import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  maxHeight?: string; // 👈 TAMBAHAN: Optional max height
}

export default function CodeBlock({
  code,
  language = "javascript",
  showLineNumbers = true,
  maxHeight = "500px", // 👈 Default max height
}: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
      // Fallback untuk browser lama
      const textArea = document.createElement("textarea");
      textArea.value = code;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Fallback copy failed:", err);
        alert("Gagal menyalin kode. Silakan copy manual.");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden my-4 border border-slate-700 dark:border-slate-600">
      {/* Header */}
      <div className="flex justify-between items-center bg-slate-800 dark:bg-slate-900 px-4 py-2 text-sm border-b border-slate-700 dark:border-slate-600">
        <span className="text-slate-300 font-mono text-xs uppercase tracking-wide">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
          aria-label={
            copied ? "Kode berhasil disalin" : "Salin kode ke clipboard"
          }
          title={copied ? "Disalin!" : "Salin kode"}
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" />
              <span className="text-xs font-medium text-green-400">
                Copied!
              </span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span className="text-xs font-medium">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content dengan Overflow & Max Height */}
      <div className="overflow-x-auto" style={{ maxHeight }}>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            borderRadius: "0 0 0.5rem 0.5rem",
            fontSize: "0.875rem", // 14px - lebih kecil untuk mobile
            lineHeight: "1.6",
          }}
          lineNumberStyle={{
            minWidth: "2.5em",
            paddingRight: "1em",
            color: "#6b7280", // gray-500
            backgroundColor: "#1e293b", // slate-800
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
