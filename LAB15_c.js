import React, { useState } from 'react';

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and it said 'No problem — I'll go to sleep.'",
  "Why do programmers prefer dark mode? Because light attracts bugs!"
];

const Content = () => {
  const [joke, setJoke] = useState('');

  const handleJoke = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
  };

  return (
    <div>
      <button onClick={handleJoke}>Get Random Joke</button>
      <p>{joke}</p>
    </div>
  );
};

export default Content;
