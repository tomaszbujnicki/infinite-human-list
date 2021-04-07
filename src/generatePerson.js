const firstNames = [
  'John',
  'Bob',
  'Sara',
  'Philip',
  'Garry',
  'Ron',
  'Emilly',
  'Carol',
  'Jessica',
  'Victoria',
  'Samuel',
  'Sammy',
  'Eliza',
  'Amy',
  'Beth',
  'Derrek',
  'Julia',
  'Zven',
];

const secondNames = [
  'Screen',
  'Black',
  'Widow',
  'Hartman',
  'Hamiltion',
  'Johanson',
  'Richardson',
  'Smith',
  'Screen',
  'Artman',
  'Xin',
  'Bass',
  'Kovalsky',
  'Sandman',
  'von Bradhard',
];

const age = () => Math.floor(Math.random() * 100 + 1);

const sex = () => (Math.random() < 0.5 ? 'male' : 'female');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generatePerson() {
  const rand1 = getRandomInt(0, firstNames.length);
  const rand2 = getRandomInt(0, secondNames.length);
  return {
    firstName: firstNames[rand1],
    secondName: secondNames[rand2],
    age: age(),
    sex: sex(),
    face: 'https://www.thispersondoesnotexist.com/image?' + Math.random(),
  };
}
