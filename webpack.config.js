// permite acceder hacia donde nos estemos moviendo en las carpetas del proyecto
const path = require('path') 
// permite trabajar con los archivos html
const HtmlWebpackPlugin = require('html-webpack-plugin')

// generamos un modulo y lo exportamos
module.exports = {
  // entry indica el punto de entrada de nuestro código
  entry: './src/index.js',
  // output indica en donde vamos a enviar nuestro proyecto ya compilado y listo para producción
  output: {
    // dentro generamos un objeto
    // usamos el path que exportamos y resolve para saber en donde se encuentra
    // con __dirname le decimos que en donde se encuentre genere la carpeta dist
    path: path.resolve(__dirname, 'dist'),
    // filename indica el nombre del archivo final despues de la compilación
    filename: 'main.js'
  },
  // para trabajar sobre las extenciones que vamos a usar en el proyecto usaremos resolve y generamos un objeto
  resolve: {
    // extensions recibe un array, en este caso solo vamos a trabajar con js
    extensions: ['.js']
  },
  // creamos un modulo para trabajar con las reglas que necesitaremos
  module: {
    // dentro del modulo tendemos las reglas y se pasan como un objeto a travez de un arreglo
    rules: [
      {
        // este test va a establecer valores que queremos filtrar de los elementos que vamos a utilizar
        test: /\.js?$/,
        // excluimos la carpeta de node modules
        exclude: /node_modules/,
        use: {
          // utilizamos un loader como configuración establecida
          loader: 'babel-loader',
        }
      }
    ]
  },
  // plugins que vamos a utilizar
  plugins: [
    // creamos una instancia del plugin para trabajar con html y le pasamos un objeto
    new HtmlWebpackPlugin(
      {
        // como inyectamos un valor a un archivo html
        inject: true,
        // en donde se encuentra el template principal
        template: './public/index.html',
        // hacia donde lo tenemos que mandar
        filename: './index.html' 
      }
    )
  ]
}