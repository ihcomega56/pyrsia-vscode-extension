module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    ignorePatterns: [
        "out",
        "dist",
        "**/*.d.ts",
        ".eslintrc.cjs"
    ],
    rules: {
        "@typescript-eslint/naming-convention": "error",
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "eqeqeq": "error",
        "no-throw-literal": "error",
        "semi": "warn",
        "indent": ["error", "tab", { "SwitchCase":  1 }],
        "no-unused-vars": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/unified-signatures": "error",
        "require-await": "error",
        "no-return-await": "error",
        "curly": "error",
        "no-invalid-this": "error",
        "@typescript-eslint/no-shadow": "error",
        "no-fallthrough": "error",
        "no-await-in-loop": "error",
        "@typescript-eslint/array-type": "error",
        "no-unreachable": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-finally": "error",
        "valid-jsdoc": "warn",
        "valid-typeof": "error",
        "consistent-return": "error",
        "default-case": "error",
        "no-multi-spaces": "warn",
        "no-redeclare": "error",
        "no-self-assign": "error",
        "no-unused-labels": "error",
        "no-useless-escape": "error",
        "wrap-iife": "error",
        "no-delete-var": "error",
        "callback-return": "error",
        "no-mixed-requires": "error",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-exit": "error",
        "no-sync": "error",
        "comma-dangle": "warn",
        "comma-style": "warn",
        "computed-property-spacing": "warn",
        "consistent-this": "warn",
        "eol-last": "warn",
        "func-name-matching": "warn",
        "func-style": "warn",
        "function-paren-newline": "warn",
        "id-length": ["error", { "min": 2 }],
        "jsx-quotes": "warn",
        "key-spacing": "warn",
        "keyword-spacing": "warn",
        "linebreak-style": "warn",
        "max-depth": "warn",
        "max-len": ["warn", { "code": 150, "comments": 200 }],
        "max-lines": ["warn", { "max": 1000}],
        "max-nested-callbacks": "error",
        "max-params": ["warn",{ "max": 8 }],
        "new-cap": "warn",
        "new-parens": "warn",
        "no-bitwise": "warn",
        "no-lonely-if": "warn",
        "no-mixed-spaces-and-tabs": "warn",
        "no-multiple-empty-lines": "warn",
        "object-curly-newline": "warn",
        "object-curly-spacing": ["warn", "always"],
        "operator-linebreak": "warn",
        "semi-style": "warn",
        "sort-keys": "warn", 
        "require-jsdoc": "warn",
        "no-useless-constructor": "warn",
        "prefer-destructuring": "warn",
        "no-var": "error"
    },
  };