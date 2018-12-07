var express=require('express');
var socket=require('socket.io');
var app=express();
var server=app.listen(4000,function()
{
    console.log("listeing 4000s");
});
app.use(express.static('public'));
var io=socket(server);
io.on('connection',function(socket)
{
    console.log("socket connection made");
    socket.on('chat',function(data)
    {
        io.sockets.emit('chat',data);
    })
})