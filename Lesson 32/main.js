// function printNames(){
//     document.write("Ariana" + "<br>");
//     setTimeout(function(){
//         document.write("Donika");
//     } ,3000);
//     document.write("Eltoni");
// }

// printNames();

var colors = ['red', 'green', 'blue', 'purple'];

function changeColor(){
    document.querySelector('body').style.background = 
    colors[Math.floor(Math.random()*colors.length)];
}

changeColor();

var names = ['Antigona', 'Grenti', 'Donika'];

function changeName(){
    document.querySelector('p').innerHTML = 
    names[Math.floor(Math.random()*names.length)];
}

setInterval(changeColor, 1000);
setInterval(changeName, 1000);

