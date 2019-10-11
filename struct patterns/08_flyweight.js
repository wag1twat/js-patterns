//!эффективная передача и работа с данными через различные типы обьектов
//!предотвращение уже загруженных файлов

class Product {
    constructor(model, price){
        this.model = model
        this.price = price
    }
}

class ProductFactory {
    constructor(){
        this.products = []
    }
    create(model, price){//!доп.абстрация для реализации паттерна flyweight
        const potentialProduct = this.getProduct(model);
        if (potentialProduct) return potentialProduct;
        const newProduct = new Product(model, price);
        this.products.push(newProduct);
        return newProduct;
    }
    getProduct(model){
        return this.products.find(product => product.model === model)
    }
}

const factory = new ProductFactory();

const bmwX6 = factory.create('BMW', 10000);
const audiA6 = factory.create('AUDI', 12000);
const bmwX3 = factory.create('BMW', 8000);

console.log(bmwX6 === bmwX3); //=> true

// обьект bmwX3 не будет создан и запушен в массив
// products так как обьект этого типа уже существует
// и хранится в кэше.
// проверка "if (potentialProduct) return potentialProduct;"
// будет возвращать уже существующее значение в кэше
// предотвращая повторную загрузку обьекта данного типа
// что позволяет оптимизировать приложение