import express from 'express';
import http from 'http';
import cors from 'cors';
import path from 'path';
require('dotenv').config()
require('../mongoose-connection')
require('./models/post');
let whitelist = ['http://localhost:4200']
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
let app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());

require('./routes/comment')(app);
app.use(express.static(path.join(__dirname, 'public')));

// Error handler
app.use(function (err, req, res, next) {
    console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res
      .status(err.status || 500)
      .json({
        status: false,
        error: err,
        code: err.status || 500
      })
      .end();
  
    next();
  });
let server = http.createServer(app);

server.listen(process.env.PORT|| 5000, ()=> {
    console.log(`listening on port ${process.env.PORT}`)
});
