import eslintPluginPrettier from 'eslint-plugin-prettier'

export default [
    {
        files: ['**/*.js'],
        plugins: { eslintPluginPrettier },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },
    },
]
