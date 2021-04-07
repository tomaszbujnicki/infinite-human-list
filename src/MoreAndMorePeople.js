import React, { useState, useEffect } from 'react';
import './MoreAndMorePeople.css';

import { SinglePerson } from './SinglePerson';

const MoreAndMorePeople = ({ items }) => {
  const [count, setCount] = useState(1);
  const [max, setMax] = useState(8);

  useEffect(() => {
    console.log('time');
    if (count < max) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1500);
    }
  });

  useEffect(() => {
    setInterval(() => {
      const scrollHeight = document.scrollingElement.scrollHeight;
      const clientHeight = document.scrollingElement.clientHeight;
      const scrollTop = document.scrollingElement.scrollTop;

      if (scrollHeight - 20 <= clientHeight + scrollTop) {
        console.log('end');
      }

      console.log('__________________________');
    }, 5000);
  }, []);

  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(<SinglePerson person={items[i]} key={i} />);
  }

  return (
    <div className="App">
      <ul>{list}</ul>
    </div>
  );
};

class MoreAndMorePeopleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: props.people,
      count: 1,
      max: 10,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1500);
  }

  tick() {
    if (this.state.count < this.state.max) {
      this.setState({ count: this.state.count + 1 });
    }
  }

  render() {
    const list = [];
    for (let i = 0; i < this.state.count; i++) {
      list.push(<SinglePerson person={this.state.people[i]} key={i} />);
    }
    return (
      <div className="App">
        <ul>{list}</ul>
      </div>
    );
  }
}

export default MoreAndMorePeople;
