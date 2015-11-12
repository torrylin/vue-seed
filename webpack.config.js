module.exports = {
    entry: './src/main.js',
    output: {
        filename: './dist/build.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, ]
    }
}
