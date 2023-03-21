import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});

io.on('connection', (socket: Socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg: string) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});