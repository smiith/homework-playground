let babelJest = require('babel-jest');

let transformer = babelJest.createTransformer({
  presets: ['es2015', 'react', 'stage-2']
});

module.exports = transformer;
