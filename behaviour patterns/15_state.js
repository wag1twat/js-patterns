class Light {
    constructor(light){
        this.light = light
    }
}

class RedLight extends Light {
    constructor(){
        super('red')
    }
    sign(){
        return 'stop'
    }
}
class YellowLight extends Light {
    constructor(){
        super('yellow')
    }
    sign(){
        return 'get ready!'
    }
}
class GreenLight extends Light {
    constructor(){
        super('green')
    }
    sign(){
        return 'RUN!'
    }
}

class TrafficLogic {
    constructor(){
        this.states = [
            new RedLight,
            new YellowLight,
            new GreenLight
        ]
        this.current = this.states[0];
    }
    change(){
        const totalStates = this.states.length;
        let index = this.states.findIndex(light => light === this.current);
        index + 1 < totalStates 
        ? this.current = this.states[index + 1]
        : this.current = this.states[0]
    }
    sign(){
        return this.current.sign();
    }
}

const traffic = new TrafficLogic();

console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());