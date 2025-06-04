"use client";

import React, { useState, useEffect } from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
// Using specific language imports for PrismAsyncLight to keep bundle size down
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
// Styles - consider one that works well for both light/dark or two distinct ones
import { vscDarkPlus, coy } from "react-syntax-highlighter/dist/esm/styles/prism"; // coy is a light theme
import { useTheme } from "next-themes";
import { Clipboard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// Registering languages
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);

interface CodeSnippetProps {
  codeString: string;
  language: string;
  title?: string;
  className?: string;
}

export function CodeSnippet({ codeString, language, title, className }: CodeSnippetProps) {
  const { theme } = useTheme();
  const [isCopied, setIsCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentStyle = mounted && theme === "dark" ? vscDarkPlus : coy;
  const bgColor = mounted && theme === "dark" ? "hsl(var(--card))" : "hsl(var(--card))"; // Or specific for code block

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString.trim()).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  if (!mounted) {
    // Prevent SSR mismatch by rendering a placeholder or null until mounted
    // Or render with a default style (e.g., light)
    return <div className={`relative rounded-lg shadow-md bg-card p-4 ${className}`}><p>Loading code...</p></div>;
  }

  return (
    <div className={`relative rounded-lg border bg-card shadow-sm dark:shadow-md ${className}`}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-border">
        <span className="text-xs font-semibold text-muted-foreground tracking-wide">{title || language.toUpperCase()}</span>
        <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copy code" className="h-7 w-7">
          {isCopied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Clipboard className="w-3.5 h-3.5" />}
        </Button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={currentStyle}
        customStyle={{
          margin: "0",
          padding: "0.75rem 1rem", // Consistent padding
          borderRadius: "0 0 0.4rem 0.4rem", // Adjusted for container's rounded-lg
          backgroundColor: bgColor,
          fontSize: "0.875rem", // text-sm
          lineHeight: "1.6", // leading-relaxed
        }}
        showLineNumbers={false} // Turned off for cleaner look, can be prop
        wrapLines={true}
        codeTagProps={{
            style: {
                fontFamily: "var(--font-mono)", // Ensure monospace font if not default by style
            }
        }}
      >
        {codeString.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
