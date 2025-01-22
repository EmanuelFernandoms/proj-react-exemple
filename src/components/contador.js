// src/components/Counter.js

import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} Cliques`;
  }, [count]);

  return (
    <div>
      <p>{count} cliques</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Counter;