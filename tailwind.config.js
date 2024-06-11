/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
        "./content/**/*.yaml",
        "./public/assets/icons/.meta/*.yaml",
    ],

    darkMode: "class",

    theme: {
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },

        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                "primary-hover":
                    "rgb(var(--color-primary-hover) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
                "secondary-hover":
                    "rgb(var(--color-secondary-hover) / <alpha-value>)",

                body: "rgb(var(--color-body) / <alpha-value>)",
                "dark-body": "rgb(var(--color-dark-body) / <alpha-value>)",
                border: "rgb(var(--color-border) / <alpha-value>)",
                main: "rgb(var(--color-main) / <alpha-value>)",
                element: "rgb(var(--color-element) / <alpha-value>)",
                "dark-element":
                    "rgb(var(--color-dark-element) / <alpha-value>)",
                "element-alt": "rgb(var(--color-element-alt) / <alpha-value>)",

                "themepicker-icon":
                    "rgb(var(--color-themepicker-icon) / <alpha-value>)",
                "themepicker-bg":
                    "rgb(var(--color-themepicker-bg) / <alpha-value>)",
                "dark-themepicker-bg":
                    "rgb(var(--color-dark-themepicker-bg) / <alpha-value>)",
                "themepicker-ring":
                    "rgb(var(--color-themepicker-ring) / <alpha-value>)",
                "dark-themepicker-ring":
                    "rgb(var(--color-dark-themepicker-ring) / <alpha-value>)",
                "themepicker-text-bg-hover":
                    "rgb(var(--color-themepicker-text-bg-hover) / <alpha-value>)",
                "dark-themepicker-text-bg-hover":
                    "rgb(var(--color-dark-themepicker-text-bg-hover) / <alpha-value>)",

                "menu-text-bg-hover":
                    "rgb(var(--color-menu-text-bg-hover) / <alpha-value>)",
                "dark-menu-text-bg-hover":
                    "rgb(var(--color-dark-menu-text-bg-hover) / <alpha-value>)",

                "menu-button-icon":
                    "rgb(var(--color-menu-button-icon) / <alpha-value>)",
                "menu-button-icon-inverted":
                    "rgb(var(--color-menu-button-icon-inverted) / <alpha-value>)",

                heading: "rgb(var(--color-heading) / <alpha-value>)",
                "heading-inverted":
                    "rgb(var(--color-heading-inverted) / <alpha-value>)",
                text: "rgb(var(--color-text) / <alpha-value>)",
                "text-inverted":
                    "rgb(var(--color-text-inverted) / <alpha-value>)",
                "text-muted": "rgb(var(--color-text-muted) / <alpha-value>)",
                submenu: "rgb(var(--color-submenu) / <alpha-value>)",
                menu: "rgb(var(--color-menu) / <alpha-value>)",
                "menu-hover": "rgb(var(--color-menu-hover) / <alpha-value>)",
                "menu-inverted":
                    "rgb(var(--color-menu-inverted) / <alpha-value>)",
                "submenu-inverted":
                    "rgb(var(--color-submenu-inverted) / <alpha-value>)",
                "text-form-input":
                    "rgb(var(--color-text-form-input) / <alpha-value>)",
                "text-form-input-inverted":
                    "rgb(var(--color-text-form-input-inverted) / <alpha-value>)",
            },

            fontFamily: {
                sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
                serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
                heading: ["var(--font-heading)"],
                accent: ["var(--font-accent)"],
            },

            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        "--tw-prose-body": theme("colors.slate[600]"),
                        "--tw-prose-headings": theme("colors.slate[900]"),
                        "--tw-prose-links": theme("colors.sky[700]"),
                        "--tw-prose-invert-body": theme("colors.slate[400]"),
                        "--tw-prose-invert-headings": theme("colors.white"),
                        "--tw-prose-invert-links": theme("colors.sky[700]"),
                    },
                },

                lighthouse: {
                    css: {
                        "--tw-prose-body": theme("colors.gray[600]"),
                        "--tw-prose-headings": theme("colors.gray[900]"),
                        "--tw-prose-links": theme("colors.blue[700]"),
                        "--tw-prose-invert-body": theme("colors.gray[400]"),
                        "--tw-prose-invert-headings": theme("colors.white"),
                        "--tw-prose-invert-links": theme("colors.blue[700]"),
                    },
                },
            }),
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
