class Sum {
    constructor(initialValue = 10){
        this.sum = initialValue;
    }
    add(value){
        this.sum += value
        return this;
    }
}

const sum1 = new Sum();

console.log(sum1.add(5).add(10).add(7).sum);

const sum2 = new Sum();

console.log(sum2.add(1).add(2).add(22).sum);
