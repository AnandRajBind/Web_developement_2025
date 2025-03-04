function SetUsername(username){
this.username=username
console.log('called');
}

function createUser(username, email, password)
{
    SetUsername.call(this,username);// call() method current execution context ko kisi aur function ko pass ker deta hai.
    this.email=email;
    this.password=password;
}

const chai=new createUser('chai','anand@gmail.com','123');
console.log(chai);
