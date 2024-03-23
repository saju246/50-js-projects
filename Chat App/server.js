const WebSocket = require('ws');

const wss = new WebSocket.Server({ host: '192.168.48.116', port: 3000 });

wss.on('listening', function () {
    console.log(`WebSocket server is listening at ws://192.168.48.116:3000`);
});

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
        console.log('Received message:', message);
        
        
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                console.log('Broadcasting message:', message);
                client.send(message);
            }
        });
    });
});
