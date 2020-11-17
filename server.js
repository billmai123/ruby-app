const express = require('express');

const app = express();

app.use(express.static('./dist/ruby-app'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/ruby-app/'}
  );
});

app.listen(process.env.PORT || 8080);