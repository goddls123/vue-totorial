
const path = require('path')

module.exports = {
    lintOnSave: false,
    configureWebpack: {
    devtool: 'source-map'
    },
    outputDir: path.resolve(__dirname, "../../src/main/resources/static")
}
