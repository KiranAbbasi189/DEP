const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connected');
    
    // Send a welcome message to the client
    socket.send('Welcome to the chat!');

    // Broadcast incoming messages to all connected clients
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        server.clients.forEach(client => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Handle disconnection
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');

