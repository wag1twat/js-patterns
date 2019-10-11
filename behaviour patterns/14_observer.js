//!One to many dependencies
//!custom redux

class Subject {
    constructor(){
        this.observers = []
    }
    subscribe(observer){
        this.observers.push(observer)
    }
    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer)
    }
    init(changes){
        this.observers.forEach(observer => {
            observer.update(action);
        });
    }
}

class Observer {
    constructor(state = 1){
        this.state = state;
        this.initialState = state;
    }
    update(action){
        switch(action.type){
            case 'INCREMENT':
                return this.state = ++this.state
            case 'DECREMENT':
                return this.state = --this.state
            case 'ADD':
                return this.state += action.payload
            default: return this.state = this.initialState
        }
    }
}

const stream = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(10);

stream.subscribe(obs1);
stream.subscribe(obs2);

stream.init(action = {type: 'INCREMENT'});
stream.init(action = {type: 'INCREMENT'});
stream.init(action = {type: 'INCREMENT'});
stream.init(action = {type: 'DECREMENT'});
stream.init(action = {type: 'ADD', payload: 10});

console.log(obs1.state);
console.log(obs2.state);