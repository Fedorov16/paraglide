var Encore = require('@symfony/webpack-encore');
Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/app.js')
    .addEntry('single', './assets/singlePage.js')
    .copyFiles({
        from: './assets/images',
        to: 'images/[name].[ext]',
    })
    .enableStimulusBridge('./assets/controllers.json')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    // * https://symfony.com/doc/current/frontend.html#adding-more-features
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/plugin-proposal-class-properties');
    // })
    //
    // .configureBabelPresetEnv((config) => {
    //     config.useBuiltIns = 'usage';
    //     config.corejs = 3;
    // })
    .enableSassLoader()
// uncomment if you use TypeScript
//.enableTypeScriptLoader()
// uncomment if you use React
//.enableReactPreset()
// uncomment to get integrity="..." attributes on your script & link tags
// requires WebpackEncoreBundle 1.4 or higher
//.enableIntegrityHashes(Encore.isProduction())
// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery()
;
module.exports = Encore.getWebpackConfig();