import React, { useState } from "react";

function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 1. The Floating Button */}
      <div className="floating-chat" onClick={toggleForm}>
        {!isOpen && <span className="chat-label">Leave a message</span>}
        <div className="chat-circle">
          {isOpen ? "✖" : "💬"}
        </div>
      </div>

      {/* 2. The Pop-up Form Modal */}
      {isOpen && (
        <div className="chat-form-container">
          <form className="chat-form" onSubmit={(e) => e.preventDefault()}>
            <h3>Send a Message</h3>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatIcon;