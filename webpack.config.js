const path = require('path');

module.exports = {
  entry: './src/index.js',  // Ponto de entrada principal da aplicação
  output: {
    filename: 'bundle.js',  // O arquivo final que será gerado
    path: path.resolve(__dirname, 'dist'),  // Pasta de saída (dist)
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Regra para arquivos .js (e .jsx)
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Usando o Babel para compilar o código
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Suporte para arquivos .js e .jsx
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),  // Servir os arquivos da pasta public
    compress: true,
    port: 3000,  // Porta do servidor de desenvolvimento
  },
};
