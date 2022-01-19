const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { spawn } = require('child_process')

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader'],
			},
			{
				// test: /\.jsx?$/,
				// use: ['babel-loader'],
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
      	}
			},
			// {
			// 	test: /\.(jpe?g|png|gif)$/,
			// 	use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
			// },
			// {
			// 	test: /\.(eot|svg|ttf|woff|woff2)$/,
			// 	use: [
			// 		{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' },
			// 	],
			// },
		],
	},
	entry: './src/index.js',
	target: 'electron-renderer',
	plugins: [
		// new HtmlWebpackPlugin({ title: 'electron-react' }),
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, './src/index.html') }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
	// devtool: 'cheap-source-map',
	// devServer: {
	// 	contentBase: path.resolve(__dirname, 'dist'),
	// 	stats: {
	// 		colors: true,
	// 		chunks: false,
	// 		children: false,
	// 	},
	// 	before() {
	// 		spawn('electron', ['.'], {
	// 			shell: true,
	// 			env: process.env,
	// 			stdio: 'inherit',
	// 		})
	// 			.on('close', (code) => process.exit(0))
	// 			.on('error', (spawnError) => console.error(spawnError))
	// 	},
	// },
	devServer: {
    static: {
      directory: path.resolve(__dirname, './src'),
      publicPath: '/'
    },
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}