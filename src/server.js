const path = require('path');
const express = require('express');

module.exports = {
  app: function () {
    const app = express();

    var pathToIndexFile;
    if (process.env.NODE_ENV !== 'production') {
      pathToIndexFile = '../index.html';
    } else {
      pathToIndexFile = '../public/index.html';
    }

    const indexPath = path.join(__dirname, pathToIndexFile);
    const publicPath = express.static(path.join(__dirname, '../public'));

    app.use('/public', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });

    return app;
  }
};