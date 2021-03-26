
const app = require('express')()
const http = require ('http').Server(app)
const io = require ('socket.io')(http)
const port = 8080;
const path = require('path')

// app.get('/', (req, res)=>{
//     res.sendFile(`${__dirname}/index.html`)
// })
console.log(__dirname)
app.use(require('express').static(path.join(__dirname, "../chat-1")))

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message',  msg);
    });
});

http.listen(port, ()=>{
    console.log(`app listening ${port}`)
})