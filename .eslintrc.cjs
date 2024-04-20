module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "prettier",
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint", "import"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  "settings": {
    "import/parsers": {
        "@typescript-eslint/parser": [".ts"]
    },
    "import/resolver": {
        "typescript": {
            "alwaysTryTypes": true,
            "project": "tsconfig.json"
        }
    }
  }
}
