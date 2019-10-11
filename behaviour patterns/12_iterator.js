class Iterator {
    constructor(data){
        this.index = 0
        this.data = data
    }
    [Symbol.iterator](){
        return {
            next: () => {
                if(this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}

function* generator(collection){
    let index = 0
    while (index < collection.length){
        yield collection[index++]
    }
}

const iterator = new Iterator(['iterator', 'has', 'been', 'created']);
const gen = generator(['Generator', 'has', 'been', 'created']);

for ( const val of iterator){
    console.log('Value of iterator: ', val)
}

for (const val of gen){
    console.log('Value of generator: ', val)
}