const withPlugins = require('next-compose-plugins')
const withCSS = require('next-css-unpluggable')
const withTypescript = require('@zeit/next-typescript')

const tsIncludes = require('./.workarounds/ts-includes')

module.exports = withPlugins(
  [
    [
      withTypescript,
      {
        webpack: tsIncludes,
      },
    ],
    [
      withCSS,
      {
        cssModules: true,
      },
    ],
  ],
  {
    distDir: '../dist/front',
  },
)
