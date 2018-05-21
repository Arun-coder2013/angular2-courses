class Employee{
    
    constructor(private name?:string,
            private salary?:number,
            private designation?:string){

    }

    calculateSalary(){
        console.log('Salary is 300000');
        console.log('Employee name',this.name);
        console.log('Employee salary',this.salary);
        console.log('Employee designation',this.designation);
    }

    set Name(name:string){
        this.name = name;
    }
    set Salary(salary:number){
        this.salary = salary;
    }
    set Designation(designation:string){
        this.designation = designation;
    }
    get Name(){
        return this.name;
    }

    get Salary(){
        return this.salary
    }

    get Designation(){
        return this.designation;
    }
}

let employee = new Employee();
let employee1 = new Employee('Barun',10000,'Consultant');
employee.Name='Arun';
let myname = employee.Name;
console.log(myname);
employee.Salary = 10000;
employee.Designation = 'Consultant';
employee.calculateSalary();