import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 6000 });

wss.on('connection', function connection(ws) {
  console.log('Client connected!')
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('Hello from server!');

  setInterval(() => {
    ws.send('Hello from server!');
  }, 3000);
});

console.log('Server running on port: 6000')