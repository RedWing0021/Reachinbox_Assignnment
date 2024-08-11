import React, { useEffect, useState } from 'react';
import './InboxPanel.css';
import { FaCaretDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InboxPanel = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list')
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="inbox-panel">
      <h2>All Inbox(s) <FaCaretDown className="dropdown-icon" />
      <FontAwesomeIcon icon="fa-regular fa-arrow-rotate-right"/>
      </h2>
      <ul className="message-list" onClick={() => onMessageClick(message.id)}>
        {messages.map(message => (
          <li key={message.id} className="message-item">
            <h3>{message.subject}</h3>
            <p>{message.preview}</p>
            <span className="message-date">{message.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InboxPanel;
