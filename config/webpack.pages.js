const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'react']),
  createPages('./src/pages/catalog.html', './catalog.html', ['index', 'react']),
  createPages('./src/pages/catalog.html', './search.html', ['index', 'react']),
  createPages('./src/pages/article_1.html', './article_1.html', ['index', 'react'])
]

module.exports = htmlPages
