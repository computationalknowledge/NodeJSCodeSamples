//Write JavaScript code to illustrate the use of OBJECTS in JavaScript. 
//Write code to create an OBJECT called student with fields for name and ID. 
//Have a Method called SayHello that prints out the String "HELLO"

var student = {
    name: 'JOE',
    ID: 'C9339',
    SayHello: function() {
        return "Hello! my name is " + this.name + "   " + this.ID;
    }
};
console.log(student.SayHello());
