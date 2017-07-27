var a = require('./webpack.config.js')
console.log(a)
module.exports = {
    components: './src/index.js',
    webpackConfig: require('./webpack.config.js'),
    skipComponentsWithoutExample: true,
}