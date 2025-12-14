import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

const CodeBlock = ({ code }: { code: any }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="relative border-t-1 border-zinc-200 bg-zinc-50 overflow-hidden">
            <div className="absolute top-2 right-2">
                <button
                    onClick={handleCopy}
                    className="text-xs px-2 py-1 rounded bg-zinc-200 hover:bg-zinc-300 transition"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <SyntaxHighlighter
                language="tsx"
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    borderRadius: "0.5rem",
                    background: "transparent",
                    padding: "1rem",
                    fontSize: "14px",
                }}
                showLineNumbers
            >
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;