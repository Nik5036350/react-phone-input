var a = require('./webpack.config.js')
module.exports = {
    components: './src/index.js',
    webpackConfig: require('./webpack.config.js'),
    skipComponentsWithoutExample: true,
}