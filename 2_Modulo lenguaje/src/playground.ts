const array1 = ["first", "second", "third"];
const array2= [1, 2, 3, 4];
const array3 = ["A", "B", "C", "D", "E"];



const head_exercise1 = ([firstElem]: any[]) => {
    return firstElem;
};

console.log(head_exercise1(array1));
console.log(head_exercise1(array2));
console.log(head_exercise1(array3));



const tail_exercise1 = ([, ... restOfElems]: any[]) => {
    return restOfElems;
};

console.log(tail_exercise1(array1));
console.log(tail_exercise1(array2));
console.log(tail_exercise1(array3));



const checkIfHead = (elem, index, arr) => {
    return index < arr.length - 1;
}

const init_exercise1 = (elems: any[]) => {
    return elems.filter(checkIfHead)
};

console.log(init_exercise1(array1));
console.log(init_exercise1(array2));
console.log(init_exercise1(array3));



const last_exercise1 = (elems): any[] => {
    return elems.slice(-1)
}

console.log(last_exercise1(array1));
console.log(last_exercise1(array2));
console.log(last_exercise1(array3));



const concat_exercise2 = (a, b) => {
    return [...a, ...b];
};

console.log(concat_exercise2(array1, array2));


const concat_exercise2_optional = (a: any[], ...rest: any[]) => {
    if(rest.length == 1) {
        return concat_exercise2(a, rest[0]);
    } else {
        return [...a, ...concat_exercise2_optional(rest[0], ...tail_exercise1(rest))];
    }
};

console.log(concat_exercise2_optional(array1, array2, array3));


function clone_exercise3(source) {
    return {...source};
}

const object_exercise3 = {param1: "value1", param2: "value2"};

console.log(object_exercise3);
console.log(clone_exercise3(object_exercise3));
console.log("Are the same? "+(clone_exercise3(object_exercise3) === object_exercise3));


const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

function merge_exercise3(source, target) {
    return {...target, ...source};
}

console.log(merge_exercise3(a,b));



class Book {
    title: string;
    isRead: boolean;
}

const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
    ];

const filterBookRead = (elem: Book, titleToSearch: string) => {
    return elem.title === titleToSearch && elem.isRead;
}

function isBookRead(books: Book[], titleToSearch: string) {
    return books.filter(function(elem){
        return filterBookRead(elem, titleToSearch);
    }).length === 1;

}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false



class SlothMachine {
    coins: number;

    constructor(){
        this.restartCounter();
    }

    play(){
        this.coins = this.coins + 1;
        const jackpot = Boolean(Math.round(Math.random())) && Boolean(Math.round(Math.random())) && Boolean(Math.round(Math.random()));
        if(jackpot){
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.restartCounter();
        } else {
            console.log("Good luck next time!!");
        }
    }

    private restartCounter(){
        this.coins = 0;
    }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();