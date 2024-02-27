import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/lib/*.{js,ts,jsx,tsx,mdx}",
    "./app/utils/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    colors: {
      primary: "text-slate-100",
      secondary: "text-slate-200",
      background: "bg-slate-900",
    }
  },
  plugins: [],
};

export default config;
