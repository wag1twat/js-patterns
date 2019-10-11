//!command pattern => Redux

class nMath {
    constructor(initialValue = 0) {
        this.number = initialValue;
    }
    square(){
        return this.number ** 2;
    }
    cube(){
        return this.number **3;
    }
}

class Command {
    constructor(subject){
        this.subject = subject;
        this.commandsExecuted = []; //=> список комманд, которые были вызваны
    }
    execute(command){
        this.commandsExecuted.push(command)
        return this.subject[command]()
    }
}

const x = new Command(new nMath(2));

console.log(x.execute('square')); //=> 4
console.log(x.execute('cube')); //=> 8
console.log(x.commandsExecuted) //=> [ 'square', 'cube' ] массив вызванных комманд