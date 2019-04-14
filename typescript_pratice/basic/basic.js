var testName = 'Bob';
var testAge = 22;
var sentence = "Hi! my name is " + testName + ", I and " + testAge + " years old.";
// Type: void
function alertName() {
    alert('void: Does not return any value');
}
// 'void' can only be assigned to 'undefined' or 'null'
// 'void' is only assignable to 'undefined' or 'null'
// while 'null' and 'undefined' can be assigned to other type
var unusable = undefined;
// Type: any
var myAge = 'twenty'; // == let myAge = 'twenty';
myAge = 20;
// Type: union
var myAgeUnion;
myAgeUnion = 'twenty';
myAgeUnion = 20;
function getString(myAge) {
    return myAge.toString();
}
var Bob = {
    id: 44,
    name: 'Tom',
    age: '20'
};
var Amy = {
    id: 45,
    name: 'Amy',
    age: '25'
};
var Candy = {
    id: 46,
    name: 'Candy',
    gender: 'Female'
};
// array
var myList = [1, 2, 3];
myList.push(4); // push string will raise error
var myList2 = [1, 2, 3];
var myList3 = [1, 2, 4]; // number only
var list = ['apple', { 'category': 'fruit' }, 3];
function Isum() {
    // IArguments, NodeList, HTMLCollection
    var args = arguments;
}
