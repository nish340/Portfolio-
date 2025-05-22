import { useState } from 'react';
import './Chat.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  timestamp: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! How can I help you today?",
      sender: 'other',
      timestamp: '10:00 AM'
    },
    {
      id: 2,
      text: "I'm interested in your services. Can you tell me more about your development process?",
      sender: 'user',
      timestamp: '10:05 AM'
    },
    {
      id: 3,
      text: "Of course! I follow an agile methodology with regular client check-ins. I start with understanding requirements, then move to design, development, testing, and deployment.",
      sender: 'other',
      timestamp: '10:07 AM'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate response after a short delay
    setTimeout(() => {
      const responseMessage: Message = {
        id: messages.length + 2,
        text: "Thanks for your message! I'll get back to you soon.",
        sender: 'other',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };

  return (
    <div className="chat-page">
      <header className="page-header">
        <div className="container">
          <h1>Chat</h1>
          <p>Let's discuss your project</p>
        </div>
      </header>

      <section className="chat-section section">
        <div className="container">
          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`message ${message.sender === 'user' ? 'user-message' : 'other-message'}`}
                >
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <form className="message-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="message-input"
              />
              <button type="submit" className="send-button">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;