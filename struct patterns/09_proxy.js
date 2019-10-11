//!практическое применение - избавление приложения от лишних
//!запросов на сервер

function networkFetch(url) {
    return `${url} - server's answer`
}

const cache = new Set(); //!set - тип данных не хранящий дубликаты данных

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0];
        if (cache.has(url)){
            return `${url} - cache's answer`;
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }
    }
});

console.log(proxiedFetch('google.com'));
console.log(proxiedFetch('amazon.com'));
console.log(proxiedFetch('google.com')); //=> отвек из локального кэша, а не подгрузка с сервера