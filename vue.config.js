module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8888',
          ws: true,
          changeOrigin: true,
          pathRewrite: {'^/api' : ''}
        },
      },
      port:"8988",
      hot: true,
      open: true
    },
    // autoOpenBrowser:true
}