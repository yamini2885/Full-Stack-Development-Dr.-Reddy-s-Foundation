//Global Scope

// let a = 10;
// var b = "yamini";
// const c = 70.33;

// console.log(a+" "+b+" "+c);
// function fiu(){
//     console.log(a+" "+b+" "+c);
// }
// fiu()

// if(a){
//     console.log(a+" "+b+" "+c);
// }



//module Scope

// var a = 10;
// console.log(a)


// Local Scope

//Funtional Scope
// function fun(){
//     var d = 10;
//     let e = "yamu";
//     const f = 50.68523;
//     console.log(d+" "+e+" "+f);
// }
// fun()
// console.log(d+" "+e+" "+f); //Uncaught ReferenceError: d is not defined



// Block Scope
// if(true){
//     let x = 10;
//     const y = 20;
//     console.log(x,y);//10 20
// }
// console.log(x);//Uncaught ReferenceError: x is not defined
// console.log(y);


//but var is not block scoped

// if (true) {
//   var a = 100;
// }
// console.log(a); //100

//Lexical Scope
//  let a = 10;
//     function outer() {
//       let b = 20;
//       function inner() {
//         let c = 30;
//         console.log(a, b, c); // 10 20 30
//       }
//       inner();
//     }
//     outer();


function outer() {
  function inner() {
    let x = 100;
  }
  inner()
  console.log(x); // Uncaught ReferenceError: x is not defined
}
outer()







