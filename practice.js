/**
 * Created by David on 30/03/2016.
 */

var name = "David";
console.log("Hello, " + name); // print but instead logs to our console (bash)

var a = [1,2,3,4,5];

a.forEach(funStuff);

function funStuff(element){
    console.log(element)
}

console.log(process.env.OS);    // help !

