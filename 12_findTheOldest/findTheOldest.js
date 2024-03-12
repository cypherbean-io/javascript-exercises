const findTheOldest = function(people) {
  const myDate = new Date();
  const currentYear = myDate.getFullYear();
  for (let i = 0; i < people.length; i++) {
    if (!people[i].yearOfDeath) {
      people[i].yearOfDeath = currentYear;
    }
    people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
  }
  let answer = people.sort((a, b) => b.age - a.age);
  return answer[0];
};

// Do not edit below this line
module.exports = findTheOldest;
