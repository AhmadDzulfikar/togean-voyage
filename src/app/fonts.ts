// Font configuration for the application
// Using CSS variables for font-family with Google Fonts fallbacks
// If you have local font files, place them in /public/fonts/ and use next/font/local

// For now, we'll export empty variables since local fonts may not exist
// The fonts are handled via CSS variables in globals.css which fall back to Google Fonts

export const cantoFont = {
    variable: "--font-canto-local",
    className: "",
};

export const avenirFont = {
    variable: "--font-avenir-local",
    className: "",
};

// To enable local font loading, uncomment below and ensure font files exist:
// import localFont from "next/font/local";
//
// export const cantoFont = localFont({
//   src: "../../public/fonts/Canto.woff2",
//   variable: "--font-canto-local",
//   fallback: ["Cormorant Garamond", "Georgia", "serif"],
//   display: "swap",
// });
//
// export const avenirFont = localFont({
//   src: "../../public/fonts/AvenirNextCondensed.woff2",
//   variable: "--font-avenir-local",
//   fallback: ["Roboto Condensed", "Arial Narrow", "sans-serif"],
//   display: "swap",
// });
