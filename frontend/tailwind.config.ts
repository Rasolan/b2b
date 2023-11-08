import type { Config } from "tailwindcss";

const config: Config = {
    plugins: [require("@headlessui/tailwindcss")],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "slide-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-collapsible-content-height)" },
                },
                "slide-up": {
                    from: { height: "var(--radix-collapsible-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "slide-down": "slide-down 200ms ease-in",
                "slide-up": "slide-up 200ms ease-out",
            },
            fontFamily: {
                heading: ["var(--font-heading)", "sans-serif"],
                copy: ["var(--font-copy)", "sans-serif"],
            },
            colors: {
                b2b: {
                    neutral: {
                        50: "#E8E8E8",
                        100: "#DBDBDB",
                        200: "#C4C4C4",
                        300: "#ADADAD",
                        400: "#969696",
                        500: "#808080",
                        600: "#696969",
                        700: "#525252",
                        800: "#3B3B3B",
                        900: "#242424",
                        950: "#191919",
                    },
                    yellow: {
                        50: "#FFF8EB",
                        100: "#FFF3DB",
                        200: "#FFE5B3",
                        300: "#FFD685",
                        400: "#FFC552",
                        500: "#FFAF14",
                        600: "#EB9C00",
                        700: "#CC8800",
                        800: "#AD7400",
                        900: "#7A5200",
                        950: "#573A00",
                    },
                    blue: {
                        50: "#F0F6FF",
                        100: "#E0EDFF",
                        200: "#C2DAFF",
                        300: "#99C2FF",
                        400: "#6BA6FF",
                        500: "#257CFF",
                        600: "#0A6CFF",
                        700: "#005AE0",
                        800: "#004BBD",
                        900: "#003380",
                        950: "#00255C",
                    },
                },
            },
        },
    },
};
export default config;
