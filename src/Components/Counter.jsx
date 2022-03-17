import React from 'react';
import Button from '@mui/material/Button';

const Counter = () => {
  const [likes, setLikes] = React.useState(0);

  const increment = () => {
    setLikes(likes + 1);
  };

  const decrement = () => {
    setLikes(likes - 1)
  };
  
  return (
    <div>
      <h1>{likes}</h1>

      <Button onClick={increment} variant="contained">Increment</Button>
      <Button onClick={decrement} variant="outlined">Decrement</Button>
    </div>
  );
};

export default Counter;