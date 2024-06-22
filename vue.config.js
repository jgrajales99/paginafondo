const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const path = require('path');

module.exports = {
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', path.resolve(__dirname, 'src/components'))
      .set('views', path.resolve(__dirname, 'src/views'))
      .set('assets', path.resolve(__dirname, 'src/assets'))
      .set('styles', path.resolve(__dirname, 'src/styles'))
      .set('api', path.resolve(__dirname, 'src/api'))
      .set('utils', path.resolve(__dirname, 'src/utils'));
  }
};
