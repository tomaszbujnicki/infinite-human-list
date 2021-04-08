import React, { useState, useEffect } from 'react';
import { generatePerson } from './generatePerson';
import { SinglePerson } from './SinglePerson';

const MoreAndMorePeople = ({ items }) => {
  const [count, setCount] = useState(1);
  const [max, setMax] = useState(6);

  useEffect(() => {
    if (count < max) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1500);
    }
  });

  const increaseMax = () => {
    if (count < max) return;
    if (items.length > max) {
      setMax(max + 6);
      console.log('Ładuje');
    } else {
      console.log('Generuje');
      for (let i = 0; i < 6; i++) {
        items.push(generatePerson());
      }
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      const scrollHeight = document.scrollingElement.scrollHeight;
      const clientHeight = document.scrollingElement.clientHeight;
      const scrollTop = document.scrollingElement.scrollTop;
      if (scrollHeight - 20 <= clientHeight + scrollTop) {
        increaseMax();
      }
    }, 100);
    return () => clearInterval(id);
  });

  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(<SinglePerson person={items[i]} key={i} />);
  }

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default MoreAndMorePeople;
