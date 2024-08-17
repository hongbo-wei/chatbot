const chatbotButton = document.getElementById('chatbot-button');
const chatbotContainer = document.getElementById('chatbot-container');

chatbotButton.addEventListener('click', () => {
    chatbotContainer.style.display = 'block';
    // Create initial chatbot interface elements here
});

function chatbotResponse(userInput) {
    // Simple example:
    if (userInput.toLowerCase() === 'hello') {
        return 'Hello there!';
    } else {
        return "I didn't understand that.";
    }
}

const chatbox = document.createElement('div');
chatbotContainer.appendChild(chatbox);

function sendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
}

// Example usage:
sendMessage('Hello, how can I help you?');

// Handle user input and send messages
const inputElement = document.createElement('input');