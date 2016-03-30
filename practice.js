/**
 * Created by David on 30/03/2016.
 */

var name = "David";
console.log("Hello, " + name); // print but instead logs to our console (bash)

var a = [1,2,3,4,5,9];

a.forEach(funStuff);

function funStuff(element){
    console.log(element)
}

console.log(process.env.OS);    // help !

console.log(process.env.OS)

// Questions
// process ^
// add node_modules into your folders without installing ? --> gtit bash, npm install & enter and will install everything you need based on the json