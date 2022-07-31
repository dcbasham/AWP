// const path = require('path');
// const express = require('express');
// const morgan = require('morgan');
// const app = express();
// module.exports = app;

// // logging middleware
// app.use(morgan('dev'));

// // body parsing middleware
// app.use(express.json());

// // auth and api routes
// // app.use('/auth', require('./auth'))
// // app.use('/api', require('./api'))

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'))
// );

// // static file-serving middleware
// app.use(express.static(path.join(__dirname, '..', 'public')));

// // any remaining requests with an extension (.js, .css, etc.) send 404
// app.use((req, res, next) => {
//   if (path.extname(req.path).length) {
//     const err = new Error('Not found');
//     err.status = 404;
//     next(err);
//   } else {
//     next();
//   }
// });

// // sends index.html
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'));
// });

// // error handling endware
// app.use((err, req, res, next) => {
//   console.error(err);
//   console.error(err.stack);
//   res.status(err.status || 500).send(err.message || 'Internal server error.');
// });
/*path is a module.
path.join(' ' ) concatenates files paths
https://nodejs.org/api/path.html#path_path_join_paths
https://www.geeksforgeeks.org/node-js-path-join-method/

e.g.
// Getting the directory path one folder above
console.log("Current Directory: ", __dirname);
path3 = path.join(__dirname, "..");
console.log("Directory above:", path3)

OUTPUT:
Dirname:  G:\tutorials\nodejs-path-join
Directory above: G:\tutorials
*/
