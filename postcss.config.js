module.exports = {
    plugins: {
        'postcss-prepend-imports': {
            path: './src/common',
            // Only variables and mixins need to be added in postcss-prepend-imports
            files: [
                'breakpoints.css',
                'colors.css',
                'typography.css'
            ]
        },
        'postcss-import': {},
        autoprefixer: {},
        'postcss-custom-media': {},
        'postcss-mixins': {},
        'postcss-nested': {},
        'postcss-css-variables': {}
    }
};
