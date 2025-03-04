class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.username=username;
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai= new Teacher('chai', 'chai@teacher.com', '123');
 chai.addCourse();
 chai.logMe();
 const masalaChai=new User("masalaChai")
 masalaChai.logMe();

 console.log(chai instanceof Teacher);
 console.log(masalaChai instanceof Teacher);
 console.log(chai instanceof User);
 