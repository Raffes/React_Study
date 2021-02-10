'use strict'

const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    module: {
        loaders: [{
            test: /\.js$/, //vai compilar tudo que tem a extensão js
            exclude: /node_modules/, // não vai ser lido / ignorado
            include: /src/, //onde vai ser lido os arquivos
            loader: 'babel-loader' // o que vai fazer o loader 

        }]
    }
}