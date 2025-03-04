// It is available after ES6.

//*********************************class ************************************** */
/*
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}123`;
  }
  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("anand", "anand@gmail.com", "anand@");

console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUserName());
*/
// ***********************behind the schene or by using the prototype ****************************
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword=function(){
    return `${this.password}`
}
User.prototype.changeUserName=function() {
    return `${this.username.toUpperCase()}`;
  }
const tea =new User('tea', 'tea@gmail.com', '123');
console.log(tea.encryptPassword());
console.log(tea.changeUserName());