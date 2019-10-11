class Employee {
    constructor(name, salary){
        this.name = name
        this.salary = salary
    }
    responsibilities(){};
    work(){
        return `${this.name} is doing ${this.responsibilities()}`;
    }
    getPaid(){
        return `${this.name} have salary ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary){
        super(name, salary)
    }
    responsibilities(){
        return `Programm creating process`
    }
}
class Tester extends Employee {
    constructor(name, salary){
        super(name, salary)
    }
    responsibilities(){
        return `Testing of programm`
    }
}

const dev = new Developer('Cross', 100000);
console.log(dev.getPaid());
console.log(dev.work());