import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MoreAndMorePeople from './MoreAndMorePeople';
import { generatePerson } from './generatePerson';
import { Header } from './Header';

const people = [];
for (let i = 0; i < 24; i++) {
  people.push(generatePerson());
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MoreAndMorePeople items={people} />
  </React.StrictMode>,
  document.getElementById('root')
);
