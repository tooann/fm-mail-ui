module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    }),
    require('postcss-pxtorem')({
      rootValue: 37.5,
      propList: ['*']
    })
  ]
}