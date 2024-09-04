import React, { useEffect, useState } from 'react';
import { fetchWelcomeMessage } from '../apiService';

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const getMessage = async () => {
      try {
        const data = await fetchWelcomeMessage();
        setMessage(data);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    getMessage();
  }, []);

  return (
    <div>
      <h1>Welcome to MediaScore</h1>
      <p>Message from API {message}</p>
    </div>
  );
};

export default Home;
