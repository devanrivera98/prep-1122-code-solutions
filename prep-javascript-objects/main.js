var person = {
  firstName: 'Devan',
  lastName: 'Rivera',
  hobby: 'coding'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log('The name of this person is: ', fullName + '.');

person.job = 'billing';

console.log("The person's current job is:" + person.job + '.');

person.previousJob = 'author';

console.log("The person's previous job was:" + person.previousJob + '.');

console.log('The complete person object:', person);
