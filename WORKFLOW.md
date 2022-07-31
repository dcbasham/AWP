\*Intro:
Create your project folder. npm init, git init, and make a .gitignore file

- Don't forget your .gitignore! You should make sure that your .gitignore lists your node_modules directory and your bundled client javascript file (if you're using a module builder like webpack).
  Example: (assuming your bundled js file is called 'bundle.js', and is located in the root of your project folder)
  ---> .gitignore should contain:
  node_modules
  bundle.js
  bundle.js.map
  If you're wondering why we're ignoring bundle.js, it's because it will become a fairly large file that will always change. Instead of git tracking it, we can ignore it and either build it before setting it up on our production server (or have our production server build it).
  /\*REACT

_Index.html_
/\_/\*Construct an index.html. At minimum, it should have an <html> tag, a <head>, a <body> and and a single ** script ** tag to serve up your bundled javascript. It should also have at least one <div> with an id that you can use ReactDOM.render to render your React app into. Also make sure that you only load your bundled javascript AFTER the DOM loads!
e.g.

<!--
  <head>
  <!-- Our js bundle will be in 'bundle.js' -->
  <!-- The 'defer' attribute will ensure that it is run only after the DOM finishes loading
  <script src="/bundle.js" defer></script>
  <!-- Responsive design? Check. This tag will make mobile browsers scale to device width
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<!-- Defines the character set
<meta charset="UTF-8">
<!-- MDN recommends placing this right after your <head> tag

<body>
<div id= "*app"></div>
</body>
-->

///Basic Server
decide how index.html will be served up to the browser (webpack-dev-server, http-server or express.)
Tools like webpack-dev-server and http-server are very useful - they will serve up static files (including your index.html) from the folder you start them from. This is great if you want to start writing a client-side application but don't want to write a full express server yet (or if you don't need one - for example, if you write an application that uses a cloud database like Firebase, or a simple client app that just needs to make AJAX requests to some external APIs).
You could install them on a project-by-project basis, or install them globally using the -g flag.

1.  If you are using an express server, then you need to make sure that you serve up your index.html for any GET requests that aren't for any other routes (like your /api/ routes). Here's an example of what this might look like:
    \*\*Note: if you are planning on writing an express server, you may want to skip to the Express section and set up your server first before continuing here.
    you would need to have this in the express server.
    //
    const path = require('path');
    const express = require('express');
    const app = express();

       <!--you'll of course want static middleware so your browser can request things like your 'bundle.js'-->

            app.use(express.static(path.join(__dirname, './path/to/your/static/assets')))

<!--Any routes or other various middlewares should go here!-->

<!--Make sure this is right at the end of your server logic!
      The only thing after this might be a piece of middleware to serve up 500 errors for server problems
      (However, if you have middleware to serve up 404s, that go would before this as well)-->

        app.get('*', function (req, res, next) {
          res.sendFile(path.join(__dirname, './path/to/your/index.html'));
        });

_pkg.json for this config_
\__SCRIPTS_:
You may choose to have a separate scripts for building your client application and for starting your server, or do both with the same command - it's up to you. \***\*\*\*\***(webpack-dev-server does both, out of the box!)
Here's an example where we run webpack in --watch mode in the background, and simultaneously start a server with nodemon (in server.js).
"start": "node server",
"start-dev": "webpack -w & nodemon server"
\*\*\*another example of !!HELPFUL SCRIPTS:
"scripts": {
"build": "webpack",
"build:dev": "npm run build -- --watch --mode=development",
// "seed": "node script/seed.js",
// "start": "node server",
// "start:dev": "npm run build:dev & npm run start-server",
// "start:dev:logger": "LOGGING=true npm run start:dev",
// "start:dev:seed": "SEED=true npm run start:dev",
// "start-server": "JWT=shh nodemon server -e html,js,scss --ignore public --ignore client",

<!--// "test": "NODE_ENV=test JWT=a_secret mocha \"./server/**/_.spec.js\" \"./client/\*\*/_.spec.js\" --require @babel/register --require esm ",-->

// "test:dev": "npm run test -- --watch",
// "test:dev:models": "npm run test:dev -- --grep=model",
// "test:dev:routes": "npm run test:dev -- --grep=route"
},
((do not need to use these with webpack-dev-server!!!!)

2.  Webpack-dev-server\*\* used here.
    see all the options to run from the webpack-cli
    https://github.com/webpack/webpack-dev-server#getting-started

npm install webpack-dev-server --save-dev
\*\*in \_webpack.config add devserver options (see webpack.config.js)

<!--
devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
  },
  entry: {
    index: ['./client/index.js'],
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  (....)-->

\*\*to start: npx webpack serve

_DEVDependencies_
npm install --save-dev your DEV dependencies
What to install

              npm install --save-dev webpack webpack-cli @babel/core babel-loader @babel/preset-react
            If you want to be proactive in making sure your code is safe for older browsers, you may also install @babel/preset-env.

_Dependencies_
npm install --save your regular dependencies:
npm install --save react react-dom react-router-dom

_entryFile_
Decide on an 'entry' file and an 'output' file for your webpack pipeline.
Your entry file might be something simple like an index.js, app/main.js, client/app.js or browser/index.js.
Your output file will be created by webpack. You don't need to actually create it yet - just decide where you want it to live. This could be in the root of your app, or a public folder - it's up to you.

_webpack config_

<!-- module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      }
    ]
  }
}-->

note: By setting babel-loader in your webpack config, you're teaching webpack to use babel. However, we also need to tell babel how to parse our code. We do this with another dot-file called .babelrc!

_babel.rc_

In your root project directory, make a file called .babelrc and configure it with the babel-presets you installed.
For example, if you were using @babel/preset-react and @babel/preset-env your .babelrc might look like this:
{
"presets": ["@babel/preset-react", "@babel/preset-env"]
}

\_index.js_ReactDom.REnder

Write a basic ReactDOM.render in your entry file.

<!--import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>Hello, world!</div>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);-->
