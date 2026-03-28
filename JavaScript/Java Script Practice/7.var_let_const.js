//1)Global Scope

// //var
// var b = "yamini";
//  console.log(b);//yamini
//  function fu(){
//      console.log(b);//yamini
//  }
//  fu()

//  if(b){
//     console.log(b);//yamini
// }

// //let
// let a = 10;
// console.log(a);//10
//  function fu1(){
//      console.log(a);//10
//  }
//  fu1()

//  if(a){
//     console.log(a);//10
// }

// //const
// const c = 70.33;
// console.log(c);//70.33
//  function fu2(){
//      console.log(c); //70.33
//  }
//  fu2()

//  if(c){
//     console.log(c); //70.33
// }

//-------------------------------

//Function Scope

// //var
// function fun(){
//     var d = 10;
//     console.log(d);//10
// }
// fun()
// console.log(d); //Uncaught ReferenceError: d is not defined

// //let
// function fun(){ 
//     let e = "yamu";
//     console.log(e);//yamu
// }
// fun()
// console.log(e); //Uncaught ReferenceError: e is not defined


// //const
// function fun(){
//     const f = 50.68523;
//     console.log(f);//50.68523
// }
// fun()
// console.log(f); //Uncaught ReferenceError: f is not defined

//--------------------------------------

//Block Scope

// //var
// if (true) {
//     var d = 10;
//     console.log(d); // 10
// }
// console.log(d); // 10

// //let
// if (true) {
//     let e = "yamu";
//     console.log(e); // yamu
// }
// console.log(e); // Uncaught ReferenceError: e is not defined

// //const
// if (true) {
//     const f = 50.68523;
//     console.log(f); //50.68523
// }
// console.log(f); // Uncaught ReferenceError: f is not defined

//------------------------------------------

//Window object

// //var
// var a = 10;
// console.log(a); //  10
// console.log(window.a); // 10

// //let
// let b = 10;
// console.log(b); //  10
// console.log(window.b); // undefined

// //const
// const c = 10;
// console.log(c); //  10
// console.log(window.c); // undefined

//-------------------------------------

//Declaration

// //var
// var d;
// console.log(d);//undefined

// //let
// let e;
// console.log(e);//undefined

// //const
// const f;
// console.log(f);//Missing initializer in const declaration 

//----------------------------------------------

//Declaration and Initialization

// //var
// var a = 300;
// console.log(a)//300

// //let
// let b = 300;
// console.log(b)//300

// //const
// const c = 300;
// console.log(c)//300

//---------------------------------------------

//Re-initialization

// //var
// var a =10;
//     a =100;
// console.log(a)//100

// //let
// let b =10;
//     b =100;
// console.log(b)//100

// //const
// const c =10;
//     c =100;
// console.log(c)// Uncaught TypeError: Assignment to constant variable.

//-----------------------------------------

//Re-declaration & Re-initialization

// //var
// var a =10;
// console.log(a)//10
// var a = 200;
// console.log(a)//200

// //let
// let b =10;
// console.log(b)//10
// let b = 200;
// console.log(b)// Uncaught SyntaxError: Identifier 'b' has already been declared

// //const
// const c =10;
// console.log(c)//10
// const c = 200;
// console.log(c)// Uncaught SyntaxError: Identifier 'c' has already been declared
