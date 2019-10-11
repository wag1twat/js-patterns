//!Позволяет выстраивают коммуникацию между обьектами разных типов

class User {
    constructor(name){
        this.name = name
        this.room = null
    }
    send(message, to){
        this.room.send(message, this, to)//!this => from, текущий юзер
    }
    reveice(message, from){
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor(){
        this.users = {};
    }
    register(user){
        this.users[user.name] = user;
        user.room = this //! => ChatRoom
    }
    send(message, from, to){
        if(to) to.reveice(message, from)
        else Object.keys(this.users).forEach(key => {
            if(this.users[key] !== from) this.users[key].reveice(message, from)
        })
    }
}

const u1 = new User('userOne');
const u2 = new User('userTwo');
const u3 = new User('userThree');

const room = new ChatRoom();

room.register(u1);
room.register(u2);
room.register(u3);

u1.send('Hello u2', u2); // userOne => userTwo: Hello u2
u2.send('Hello u3', u3); // userTwo => userThree: Hello u3
u3.send('Hello guys'); //send message all users in room