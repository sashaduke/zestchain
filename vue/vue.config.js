const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path')
//const fs = require('fs')

module.exports = {
  transpileDependencies: ['@starport/client-js'],
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue$: path.resolve('./node_modules/vue/dist/vue.esm-bundler.js'),
      }
    },
    plugins: [new NodePolyfillPlugin()],

    devServer: {
      allowedHosts: 'all',
      host : '0.0.0.0',
      /*
      https: {
        key: fs.readFileSync('/etc/letsencrypt/live/cytrus.io/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/cytrus.io/fullchain.pem')
      }
      */
    }
  }
}
