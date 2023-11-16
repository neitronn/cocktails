'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/script.js',
  output: {
    filename: 'script.js',
    path: __dirname + '/dist'
  },
  watch: false,

  module: {}
};
