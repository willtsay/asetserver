var io = require('socket.io')(process.env.PORT || 8080)

io.sockets.on('connection', function(socket){

  socket.on('foo', foo)

  socket.on("getBoard", getBoard)
  

})
function foo(message){
  console.log(message)
  socket.emit("baz")
}
function getBoard(){
  obj = { card1: "b1bd"}
  cObj = JSON.stringify(obj)
  socket.emit("recieveBoard", cObj)
}