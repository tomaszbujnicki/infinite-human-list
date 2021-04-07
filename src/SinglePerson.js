import React from 'react';

export const SinglePerson = (props) => {
  const face = props.person.face;
  const firstName = props.person.firstName;
  const secondName = props.person.secondName;
  const sex = props.person.sex;
  const age = props.person.age;

  return (
    <li style={{ listStyle: 'none' }}>
      <img src={face} alt="face" width="100" height="100"></img>
      <p>
        {firstName} {secondName}
      </p>
      <p>
        {sex} {age}
      </p>
    </li>
  );
};
