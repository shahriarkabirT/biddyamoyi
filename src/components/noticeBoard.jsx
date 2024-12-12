import React, { useState, useEffect } from 'react';
import { getNotices } from '../services/noticeService';

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    loadNotices();
  }, []);

  const loadNotices = async () => {
    const data = await getNotices();
    setNotices(data);
  };

  return (
    <div>
      <h1>Notice Board</h1>
      <ul>
        {notices.map((notice) => (
          <li key={notice._id}>
            <a href={`http://localhost:5000/uploads/${notice.file}`} target="_blank" rel="noopener noreferrer">
              {notice.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeBoard;
