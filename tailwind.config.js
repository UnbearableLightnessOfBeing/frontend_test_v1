/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                arial: ["Arial"],
            },

            colors: {
                faded: "#999999",
                "faded-heading": "#666666",
                button: "#71C838",
            },
        },
    },
    plugins: [],
};
