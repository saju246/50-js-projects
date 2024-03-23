const chatMessages = document.getElementById('chatMessages');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');

const socket = new WebSocket('ws://192.168.48.116:3000'); 

socket.addEventListener('open', function(event) {
    console.log('Connected to WebSocket server');
});

socket.addEventListener('message', function(event) {
    displayMessage(event.data);
});

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const message = messageInput.value.trim();
    if (message !== '') {
        console.log('Sending message:', message); 
        socket.send(message);
        messageInput.value = '';
    }
});

function displayMessage(message) {
    if (typeof message === 'string') {
       
        
        appendMessageToChat(message);
    } else {
       
        message.text().then(function(messageText) {
            appendMessageToChat(messageText);
        }).catch(function(error) {
            console.error('Error reading message as text:', error);
        });
    }
}

function appendMessageToChat(messageText) {
   
    const messageElement = document.createElement('div');
    messageElement.textContent = messageText;

    
    chatMessages.appendChild(messageElement);

    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
