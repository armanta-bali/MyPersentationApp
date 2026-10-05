import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "javascript",
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden my-4">
      <div className="flex justify-between items-center bg-gray-800 px-4 py-2 text-sm">
        <span className="text-gray-300">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-gray-300 hover:text-white transition"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers={showLineNumbers}
        customStyle={{ margin: 0, borderRadius: "0 0 0.5rem 0.5rem" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
