let testName: string = 'Bob';
let testAge: number = 22;

let sentence: string = `Hi! my name is ${testName}, I and ${testAge} years old.`;


// Type: void
function alertName(): void {
    alert('void: Does not return any value')
}

// 'void' can only be assigned to 'undefined' or 'null'
// 'void' is only assignable to 'undefined' or 'null'
// while 'null' and 'undefined' can be assigned to other type
let unusable: void = undefined;

// Type: any
let myAge: any = 'twenty'; // == let myAge = 'twenty';
myAge = 20;


// Type: union
let myAgeUnion: string | number;
myAgeUnion = 'twenty';
myAgeUnion = 20;

function getString(myAge: string | number): string {
    return myAge.toString();
}

// interface
interface IPerson {
    readonly id: number;
    name: string;
    age?: string; // because of [propName: string], age: number will be wrong
    [propName: string]: any;
}

let Bob: IPerson = {
    id: 44,
    name: 'Tom',
    age: '20'
};

let Amy: IPerson = {
    id: 45,
    name: 'Amy',
    age: '25'
};

let Candy: IPerson = {
    id: 46,
    name: 'Candy',
    gender: 'Female'
}


// array
let myList: number[] = [1, 2, 3]; 
myList.push(4); // push string will raise error

let myList2: Array<number> = [1, 2, 3];

interface NumberArray {
    [index: number]: number;
}
let myList3: NumberArray = [1, 2, 4]; // number only

let list: any[] = ['apple', {'category': 'fruit'}, 3]

function Isum() {
    // IArguments, NodeList, HTMLCollection
    let args: IArguments = arguments;
}
