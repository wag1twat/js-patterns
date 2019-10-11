let outer = document.getElementById('outer');
let getResult = document.getElementById('getresult');

//============
//!добавление нового поведения или функционала классам

class Server {//!базовый класс
    constructor(ip, port){
        this.ip = ip
        this.port = port
    }

    get url(){
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server){//!функция декоратор
    server.isAWS = true
    server.awsInfo = function () {
        return server.url
        }
    return server
}
function azure(server){//!функция декоратор
    server.isAzure = true
    server.port +=500
    return server
}


const server1 = aws(new Server('12.33.44.56', 8080));
const server2 = azure(new Server('122.334.441.561', 1210));

getResult.onclick = () => {
    outer.innerHTML = `${server1.isAWS}<br/>${server1.awsInfo()}<br/>`;
    outer.innerHTML += `${server2.isAzure}<br/>${server2.url}`;
}