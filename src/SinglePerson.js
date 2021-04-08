import React from 'react';

export const SinglePerson = (props) => {
  const face = props.person.face;
  const firstName = props.person.firstName;
  const secondName = props.person.secondName;
  const job = props.person.job;
  const age = props.person.age;

  return (
    <li class="card">
      <div class="card__content">
        <div class="image">
          <img src={face} alt="face" />
        </div>
        <div class="card__heading">
          <h2 class="card__name">
            {firstName} {secondName}
          </h2>
          <div class="card__description">
            {job}, {age}
          </div>
        </div>
      </div>
    </li>
  );
};
