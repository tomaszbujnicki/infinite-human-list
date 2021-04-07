import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MoreAndMorePeople from './MoreAndMorePeople';
import { generatePerson } from './generatePerson';

const people = [];
for (let i = 0; i < 100; i++) {
  people.push(generatePerson());
}

ReactDOM.render(
  <React.StrictMode>
    <MoreAndMorePeople items={people} />
  </React.StrictMode>,
  document.getElementById('root')
);
