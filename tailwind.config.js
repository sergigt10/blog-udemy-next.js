module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        backgroundColor: (theme) => ({
            ...theme("colors"),
            header: "#03875e",
            footer: "#323232",
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
