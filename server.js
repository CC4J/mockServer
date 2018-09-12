var http = require('http')
var fs = require('fs')
var path = require('path')

var app = http.createServer((req, res) => {
  // 获取url
  var url = req.url
  if (url.indexOf('favicon.ico') >= 0) {
    res.end()
  } else {
    var locPath = path.join(__dirname, url) + '.json'
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    // 读取文件
    getData(locPath)
      .then(data => {
        res.write(data)
        res.end()
      }).catch(err => {
        res.end('not found，404')
      })
  }
 
})

app.listen('8080')
console.log('mock server is starting at port 8080')

function getData (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', function (err, data) {
      if (err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}