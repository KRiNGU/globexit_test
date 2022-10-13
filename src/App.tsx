import React, { useCallback, useState } from 'react';
const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const onCountClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={onCountClick}>Add</button>
    </>
  );
};

export default App;
