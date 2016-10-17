var config = {
    entry: './main.js',

    output: {
        path: './',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'base64-font-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    }
}

module.exports = config;