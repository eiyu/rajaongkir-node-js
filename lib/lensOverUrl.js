
 const lens = require('ramda/src/lens')
 const prop = require('ramda/src/prop')
 const assoc = require('ramda/src/assoc')
 const over = require('ramda/src/over')
 // add err handle for url
 module.exports = (obj) => {
   const urlLens = lens(prop('url'),assoc('url'))
   const url = (url) => url.split('/').reverse()
   return over(urlLens,url ,obj)
 }
