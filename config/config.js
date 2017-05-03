var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'tienda'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/tryDB'
  },

  test: {
    root: rootPath,
    app: {
      name: 'tienda'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/tryDB'
  },

  production: {
    root: rootPath,
    app: {
      name: 'tienda'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/tryDB'
  }
};

module.exports = config[env];
