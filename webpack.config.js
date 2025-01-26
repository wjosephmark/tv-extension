import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

export default {
  mode: 'production',
  entry: {
		contentScript: './src/content/index.js',
		background: './src/background/index.js',
		react: './src/index.jsx'
	},
	output: {
		path: path.resolve('dist'),
		filename: '[name].js',
		clean: true
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new CopyPlugin({
			patterns: [{
				from: path.resolve('manifest.json'),
				to: path.resolve('dist')
			}]
		})
	],
	module: {
		rules: [
			{
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'], 
      },
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							['@babel/preset-react', {'runtime': 'automatic'}]
						]
					}
				}
			}
		]
	}
}