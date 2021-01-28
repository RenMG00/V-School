
let employees = [];

function Employee (Name, JobTitle, Salary, Status = "Full-Time") {
    // use the "this" keyword to reference each object 
    // that is created from this constructor
    this.Name = Name;
    this.JobTitle = JobTitle;
    this.Salary = Salary;
    this.Status = Status;
}

// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:

let person1 = new Employee("Monica Pierce", "Sales-Rep", "$2,500/month", "Part-Time");
let person2 = new Employee("Don Glover", "Manager", "$3,500/month", "Full-time");
let person3 = new Employee("Drew Matthews", "Assistant", "$2,000/month", "Full-time");

Employee.prototype.statusChange = function(){
    person1.Status = "Part-Time";
    console.log(this.Status)
}
console.log(person1);
console.log(person2);
console.log(person3);

employees.push(person1, person2, person3);
console.log(employees);