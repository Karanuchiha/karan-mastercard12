var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Chat server running');
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    //msg=msg+"hello";
    var s1="";
    for(let i=msg.size()-1;i>=0;i--){
      s1=s1+msg[i];
    }
    io.emit('message', s1);
  });
});
