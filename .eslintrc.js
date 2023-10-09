module.exports = {
    root: true,
    env: { node: true, jest: true },
    parser: '@typescript-eslint/parser',
    ignorePatterns: [".eslintrc.js"],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: 'tsconfig.json',
        ecmaFeatures: { impliedStrict: true },
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
};
