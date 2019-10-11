let outer = document.getElementById('outer');
let getResult = document.getElementById('getresult');

//========

class SimpleSubscribe {
    constructor(name){
        this.name = name
        this.cost = 50
    }
}
class StandardSubscribe {
    constructor(name){
        this.name = name
        this.cost = 150
    }
}
class PremiumSubscribe {
    constructor(name){
        this.name = name
        this.cost = 500
    }
}

class Factory {
    static list = { //!list хранит ссылки на классы
        simple: SimpleSubscribe,
        standard: StandardSubscribe,
        premium: PremiumSubscribe
    }

    create(name, type = 'simple') { //!создание необходимиого инстанса какого либо класса из list
        const Subscribe = Factory.list[type] || Factory.list.simple;
        const subscribeConstructor = new Subscribe(name);
        subscribeConstructor.type = type;
        subscribeConstructor.define = function() {
            outer.innerHTML += `<br/>${this.name} (${this.type}) : ${this.cost}`;
            console.log(`${this.name} (${this.type}) : ${this.cost}`);
        }
        return subscribeConstructor;
    }
}

const factory = new Factory();
const subscribes = [
    factory.create('Elena', 'simple'),
    factory.create('Ivan', 'standard'),
    factory.create('Cross', 'premium'),
    factory.create('Brown'),
    factory.create('Petr', 'simple')
]

getResult.onclick = () => {
    outer.innerHTML = JSON.stringify(subscribes);
}
subscribes.forEach( m => {
    m.define();
})