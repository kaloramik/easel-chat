var io = require('socket.io');

var init = function(server) {
    var io = require('socket.io').listen(server);
    console.log('socket server started');

    //TODO: do authorization and session store

    setEventHandlers(io);
    return io;
};

// TODO: temp store for gameRoom users 
var gameRooms = {};
function setEventHandlers(io) {
    io.sockets.on('connection', function(socket) {
        console.log('player has connected' + socket);
        //socket.on('asdf', asdf);
        socket.on('joinGame', function(userData){
            console.log("recieved user data");
            console.log(userData);
            this.join(userData.gameName);
            if (gameRooms[userData.gameName]) {
                gameRooms[userData.gameName].push(userData.userName);
            } else {
                gameRooms[userData.gameName] = [userData.userName];
            }

            this.emit('updateUserList', gameRooms[userData.gameName]);
            this.broadcast.to(userData.gameName).emit('updateUserList', gameRooms[userData.gameName]);
        });

        socket.on('sendMessage', function(data) {
            this.emit('recieveMessage', data.message);
            this.broadcast.to(data.gameName).emit('recieveMessage', data.message);
        });
    });
}
module.exports.io = io;
module.exports.init = init;
