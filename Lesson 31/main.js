// for(i=0;i<10;i++){
//     document.write(i + "<br>");
// }

// var car = {brand:"BMW", year:2020, color:"red"};

// var x;

// for(x in car){
//     document.write(car[x] + " " + "<br>");
// }

// var names = ['Ariana', 'Leon', 'Elsa'];
// var x;

// for(x of names){
//     document.write(x + "<br>");
// }

// var text = 'Ariana';
// var x;

// for(x of text){
//     document.write(x + "<br>");
// }

// let i = 0;
// do{ 
//     i+=1;
//     document.write(i);
// }while(i<5);


// let x = 0; //x= 0 , x=1, x=2;
// let y = 0;// y = 0, y=1, y =3;

// while(x<3){
//     x++; //x = 1, x=2, x=3
//     document.write(y+=x); //  y = 1 + 0 = 1; //  y = 2 + 1 = 3 // y = 3 + 3 = 6
// }


let names = ['Florent', 'Joni', 'Gresa', 'Grenti'];

names.push("Erisa");
names.unshift("Merjeme");

for(i=0;i<names.length;i++){
    document.write(names[i] + "<br>");
}