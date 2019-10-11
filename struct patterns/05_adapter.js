let outer = document.getElementById('outer');
let getResult = document.getElementById('getresult');

//!интеграция старого класса интерфейса в новый без побочных эффектов

class OldCalc {
    operations(t1, t2, operation){
        switch(operation){
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}

class NewCalc {
    add(t1, t2){
        return t1 + t2
    }
    sub(t1, t2){
        return t1 - t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc();
    }
    operations(t1, t2, operation) {
        switch(operation){
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}

/* const oldCalc = new OldCalc();

getResult.onclick = () => {
    outer.innerHTML = oldCalc.operations(10, 5, 'add');
} */
/* const newCalc = new NewCalc();

getResult.onclick = () => {
    outer.innerHTML = newCalc.add(10, 5);
} */

const adapter = new CalcAdapter();

getResult.onclick = () => {
    outer.innerHTML = adapter.operations(25, 10, 'sub')
}