# mockServer

## Features

easy to mock data by http server(非常简单的数据mock服务器)

## Usage

- 确认当前环境已安装node
- 建立项目目录，如test
- 在项目目录下创建mock测试数据如test.json(注：测试数据需使用json文件，否则请修改server.js匹配您的文件格式)
- 运行指令 npm start启动mock服务
- 通过axios或其他类库发起请求获取mock数据

## Example

```js
  import axios from 'axios'
  axios.get('http://localhost:8080/projectName/jsonName')
    .then(data => {
      // todo
    })
    .catch(err => {
      // handle error
    })
```