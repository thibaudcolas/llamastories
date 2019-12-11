const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const sass = require('sass');

const spritesPath = path.join(__dirname, 'sprites.html');
const SVG_ICONS = fs.readFileSync(spritesPath, 'utf-8');

module.exports = ({ config, mode }) => {
    const isProduction = mode === 'PRODUCTION';
    const sourceMap = !isProduction;

    config.devtool = sourceMap ? 'cheap-module-source-map' : 'none';

    const rules = [
        {
            test: /\.(scss|css)$/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        sourceMap,
                    },
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap,
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap,
                        plugins: () => [
                            autoprefixer(),
                            cssnano({
                                preset: 'default',
                            }),
                        ],
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap,
                        implementation: sass,
                    },
                },
            ],
        },
        {
            test: /\.(ttf|woff|woff2|png|svg|jpeg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        },
    ];

    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

    config.plugins.push(
        new webpack.DefinePlugin({
            STORYBOOK_SVG_ICONS: JSON.stringify(SVG_ICONS),
        }),
    );

    config.module.rules.unshift({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre',
    });

    return config;
};
