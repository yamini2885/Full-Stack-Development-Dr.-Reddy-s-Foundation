let demo = _ => console.log("hello");  //implict
console.log(demo);
demo()

let demo1 = (a , b) => console.log(a + b);
console.log(demo1);
demo1(100 , 100) //200

let demo2 = _ => {  return "hello" }  //explict
console.log(demo2);
console.log(demo2());

let demo3  = (a , b) => { return a * b }
console.log(demo3(10 , 10));

//fun programming using arrow function
let main = (task) => {
     console.log(task(10 , 10));
}

main((a ,b) => {
      return a + b
})

main((a ,b) => {
      return a - b
})

//create a fun-programming using arrow function to perform arithmetic operation
// for 3 numbers , and find largest of three numbers but input should be give by 
  //end-user.
  