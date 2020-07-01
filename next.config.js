const nib = require('nib')
const rupture = require('rupture')
const withStylus = require('@zeit/next-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')

module.exports = withStylus({
  stylusLoaderOptions: {
    // cssModules: true // 按文档弄 没有生效
    use: [
      nib(),
      rupture(),
      poststylus([
        autoprefixer({ flexbox: true }),
        require('postcss-css-variables')
      ])
    ]
  }  
})
