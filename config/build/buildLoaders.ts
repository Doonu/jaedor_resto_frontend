import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './build.types';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['svg-url-loader'],
  };

  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {},
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  };

  const cssLoader = {
    test: /\.css$/, // Обрабатываем все .css файлы
    use: ['style-loader', 'css-loader'], // Используем css-loader и style-loader
  };

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/, // Для обработки шрифтов
    type: 'asset/resource', // В Webpack 5 для шрифтов можно использовать asset/resource
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader, scssLoader, fontLoader];
}
