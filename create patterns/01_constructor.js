let outer = document.getElementById('outer');
let getPatternResult = document.getElementById('getresult');
let outerES6 = document.getElementById('outerES6');
let getPatternResultES6 = document.getElementById('getresultES6');

//! ES5

function ServerES5(name, ip) {
    this.name = name
    this.ip = ip
}

ServerES5.prototype.getUrl = function() {
    return `name: ${this.name} <br/> url: https://${this.ip}:8080`
}

const vps = new ServerES5('VPS German', '169.0.0.1');

getPatternResult.onclick = function (){
    outer.innerHTML = vps.getUrl();
}

//! ES6

class ServerES6 {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl = function() {
        return `name: ${this.name} <br/> url: https://${this.ip}:8080`
    }
}

const vpsES6 = new ServerES6('VPS Russia', '221.22.10.1');

getPatternResultES6.onclick = function (){
    outerES6.innerHTML = vpsES6.getUrl();
}