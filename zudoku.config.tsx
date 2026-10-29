import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  navigation: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        "introduction",
        "about",
        "installation",
        "authorization",
      ],
    },
    { 
      type: "link", 
      to: "/api", 
      label: "API Reference" 
    },
  ],
  basePath: "/social-network-api",
  redirects: [
    { from: "/", to: "/introduction" },
  ],
  apis: {
    type: "file",
    input: "./openapi-unresolved.yaml",
    path: "/api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;