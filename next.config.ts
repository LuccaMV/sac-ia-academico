import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A base e o prompt são lidos com fs em tempo de execução. Sem isso, a Vercel
  // não inclui os arquivos .md no pacote da função.
  outputFileTracingIncludes: {
    "/api/chat": ["./knowledge-base/**/*.md", "./prompts/**/*.md"],
  },
};

export default nextConfig;
