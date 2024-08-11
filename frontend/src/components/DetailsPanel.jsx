import React, { useEffect, useState } from 'react';
import './DetailsPanel.css';

const DetailsPanel = ({ threadId }) => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    if (threadIdId) {
      // Fetch the threads for the selected message
      fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/message/${threadId}`)
        .then(response => response.json())
        .then(data => setThreads(data))
        .catch(error => console.error('Error fetching threads:', error));
    }
  }, [threadId]);

  return (
    <div className="details-panel">
      <h2>Message Threads</h2>
      {threads.length === 0 ? (
        <p>No threads available.</p>
      ) : (
        <ul className="thread-list">
          {threads.map(thread => (
            <li key={thread.id} className="thread-item">
              <h3>{thread.sender}</h3>
              <p>{thread.content}</p>
              <span className="thread-date">{thread.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DetailsPanel;
