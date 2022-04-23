const app = require('express')(); //引入express库
const http = require('http').Server(app); //将express注册到http中
const io = require('socket.io')(http);

//访问根目录时跳转至聊天室
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//创建数组保存用户数据
var userSocket = [];


io.on('connection', function (socket) {

  //有用户接入时打印数据
  console.log('a user connected')

  //监听join事件
  socket.on("join", function (name) {
    userSocket[name] = socket
    io.emit("join", name) //服务器通过广播将新用户发送给全体群聊成员
  })

  //接收消息
  socket.on("message", function (msg) {
    io.emit("message", msg) //将新消息广播出去
  })

});

//启动监听，监听80端口
http.listen(80, () => {
  console.log('listening on *:80');
})