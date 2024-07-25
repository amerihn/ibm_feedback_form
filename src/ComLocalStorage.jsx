import React, { useState, useEffect } from 'react';

const ComLocalStorage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // When the component mounts, check if there's a 'count' value in Local Storage.
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    // Save the updated count value to Local Storage.
    localStorage.setItem('count', newCount.toString());
  };

  return (
    <div className="feedback-form">
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default ComLocalStorage;
