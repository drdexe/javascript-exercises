const findTheOldest = function(people) {
  return people.toSorted((a, b) => {
    const ages = [a, b].map(person => {
      if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
      } else {
        return new Date().getFullYear() - person.yearOfBirth;
      }
    });
    return ages[1] - ages[0];
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
