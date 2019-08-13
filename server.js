const express = require('express');
const http = require('http');
const app = require('./src/config/custom-express');

// const servidor = http.createServer(function(req, resp) {
//   let titleHome = 'Casa do código';
//   let titleLivros = 'Livros da casa do código';
//   let html = (value) => {
//     return `<html>
//               <head>
//                 <meta charset="utf-8" />
//               </head>
//               <body>
//                 <h1> ${ value } </h1>
//               </body>
//             </html>`
//   };

//   if(req.url == '/') {
//     resp.end(html(titleHome))
//   }else{
//     resp.end(html(titleLivros))
//   }
// });


