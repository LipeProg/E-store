const path = require('path');

module.exports = {
  mode: 'development',  // Modo de desenvolvimento
  entry: './src/index.js',  // Arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),  // Diretório de saída
    filename: 'bundle.js',  // Nome do arquivo de saída
  },
  devServer: {
    static: path.join(__dirname, 'public'),  // Substitui contentBase por static
    compress: true,  // Habilita a compressão dos arquivos
    port: 3000,  // Porta do servidor
    historyApiFallback: true,  // Permite que o React Router funcione corretamente
    //open: true,  // Abre automaticamente no navegador
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Para arquivos .js e .jsx
        use: 'babel-loader',  // Usando Babel para transpilar
        exclude: /node_modules/,  // Ignora node_modules
      },
      {
        test: /\.css$/,  // Para arquivos CSS
        use: ['style-loader', 'css-loader'],  // Para carregar CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],  // Reconhece essas extensões
  }
};
