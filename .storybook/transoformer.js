// @ts-nocheck
const babelJest = require('babel-jest');
const babelConfig = require('./babel.config.js')
babelConfig.plugins.push('require-context-hook')
module.exports = babelJest.createTransformer(babelConfig);
