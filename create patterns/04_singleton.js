let outer = document.getElementById('outer');
let getResult = document.getElementById('getresult');

//========

class Database {
    constructor(data){

        if(Database.exists){
            return Database.instance
        }

        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }

    getData(){
        return this.data
    }
}

const mongo = new Database('MongoDB');

console.log(mongo.getData());

const mysql = new Database('MySQL');
//!не вернёт MySQL т.к. уже проинициализирован инстанс MongoDB

console.log(mysql.getData());