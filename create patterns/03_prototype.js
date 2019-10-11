let outer = document.getElementById('outer');
let getResult = document.getElementById('getresult');

//========

const car = {
    wheels: 4,
    init (){
        return (`i have ${this.wheels} wheels, my landlord ${this.owner}`)
    }
}

const newCar = Object.create(car , {
    owner: {
        value: 'Cross'
    }
})

getResult.onclick = () => {
    outer.innerText = newCar.init();
}

console.log(newCar.__proto__ === car)