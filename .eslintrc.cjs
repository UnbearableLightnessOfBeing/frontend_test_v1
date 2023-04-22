module.exports = {
    env: { browser: true, es6: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "tsconfig.json",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": "warn",
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", "tsx"],
        },
    },
};
