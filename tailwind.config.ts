import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    bg: "#0A0A0A",
                    secondary: "#1A1A1A",
                    accent: "#FAFAFA",
                    "accent-hover": "#FFFFFF",
                    text: "#FAFAFA",
                    "text-muted": "#A0A0A0",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
