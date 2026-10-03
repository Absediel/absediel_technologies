"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaCode, FaCheck, FaCopy } from "react-icons/fa";

const codeSnippets = [
  {
    lang: "typescript",
    filename: "architecture.config.ts",
    code: `import { AbsedielEngine } from "@absediel/core";

export const project = new AbsedielEngine({
  architecture: "Full-Stack Microservices",
  frontend: ["React 19", "Tailwind CSS", "Framer Motion"],
  backend: ["Django REST", "Python", "PostgreSQL"],
  performance: { lighthouse: 100, seo: "A+", uptime: "99.99%" },
  status: "READY_TO_DEPLOY 🚀"
});`,
  },
  {
    lang: "python",
    filename: "api_service.py",
    code: `# Absediel High-Speed API Pipeline
from rest_framework import views, response

class GrowthEngine(views.APIView):
    def post(self, request):
        solution = absediel.architect_solution(
            client=request.data["client"],
            scale="Enterprise Ready",
            security="Bank-Grade Encryption"
        )
        return response.Response({"status": "SUCCESS", "roi": "MAXIMIZED"})`,
  },
  {
    lang: "json",
    filename: "lighthouse-audit.json",
    code: `{
  "target": "absediel.com/production",
  "metrics": {
    "performance": 100,
    "accessibility": 100,
    "bestPractices": 100,
    "seo": 100
  },
  "deployment": "Instant Global CDN Edge",
  "verified": true
}`,
  },
];

const DeveloperTerminal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeSnippet = codeSnippets[currentIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl border border-white/15 bg-[#080B11]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.1)] overflow-hidden font-mono text-xs sm:text-sm"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
        <div className="flex items-center gap-2">
          {/* macOS window controls */}
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shadow-sm" />
          <span className="ml-2 text-gray-400 text-xs font-mono hidden sm:inline flex items-center gap-1.5">
            <FaTerminal className="text-[10px] text-[#D4AF37]" />
            <span>bash ~ absediel-core</span>
          </span>
        </div>

        {/* Tab/Filename + Actions */}
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded-md bg-white/[0.06] text-gray-300 text-xs font-mono border border-white/10 flex items-center gap-1.5">
            <FaCode className="text-[10px] text-[#D4AF37]" />
            <span>{activeSnippet.filename}</span>
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition-colors p-1"
            title="Copy code"
            aria-label="Copy code snippet"
          >
            {copied ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
          </button>
        </div>
      </div>

      {/* Code Body with line numbers and syntax highlighting */}
      <div className="p-4 sm:p-5 overflow-x-auto min-h-[170px] sm:min-h-[190px] flex items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSnippet.filename}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="w-full"
          >
            <pre className="text-gray-300 leading-relaxed font-mono">
              <code>
                {activeSnippet.code.split("\n").map((line, i) => (
                  <div key={i} className="table-row">
                    <span className="table-cell select-none pr-4 text-gray-600 text-right text-xs">
                      {i + 1}
                    </span>
                    <span className="table-cell whitespace-pre">
                      {line.includes("//") || line.includes("#") ? (
                        <span className="text-gray-500 italic">{line}</span>
                      ) : line.includes("import") || line.includes("export") || line.includes("const") || line.includes("class") || line.includes("def") || line.includes("return") ? (
                        <span>
                          <span className="text-purple-400 font-semibold">{line.split(" ")[0]} </span>
                          <span className="text-blue-300">{line.slice(line.indexOf(" ") + 1)}</span>
                        </span>
                      ) : line.includes(":") ? (
                        <span>
                          <span className="text-[#D4AF37]">{line.split(":")[0]}:</span>
                          <span className="text-emerald-300">{line.slice(line.indexOf(":") + 1)}</span>
                        </span>
                      ) : (
                        <span className="text-gray-300">{line}</span>
                      )}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Terminal Footer / Status */}
      <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span className="text-emerald-400 font-semibold">Engine Live</span>
          <span className="text-gray-600">|</span>
          <span className="hidden sm:inline">TypeScript / Python v3.14</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span>UTF-8</span>
          <span>Tab: 2</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperTerminal;
