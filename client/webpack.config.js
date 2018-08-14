const path = require('path');
const webpack = require('webpack');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = (env, argv = {}) => ({

	mode: 'development',
	devtool: 'source-maps',

	entry: {
		bundle: [
			path.resolve(SRC_DIR, 'index.js'),
		],
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../app/dev'),
		publicPath: '/dev/',
		chunkFilename: '[name].js',
	},

	module: {
		rules: [
			{
				test: [/\.js$/],
				include: [SRC_DIR],
				loader: 'babel-loader',
				options: {
					presets: ['react', 'stage-2'],
					cacheDirectory: true,
				},
			},
			{
				test: /\.(gif|png)$/,
				loader: 'file-loader',
			},
		],
	},

	resolve: {
		extensions: ['.js', '.es6', '.less'],
		modules: [SRC_DIR, 'node_modules'],
	},

	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				default: false,
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'initial',
				},
			},
		},
	},
});
