//fun programming using fun-declaration
//eg1
function main(task){
    console.log(task)
    console.log(task())
}
main(function()
{
    return "i am call  back fun1"
})

main(function()
{
    return "i am call  back fun2"
})

//fun programming using fun-expression
let main1 = function(task1,task2){
    console.log(task1)
    console.log(task2)
    task1()
    task2()
}
main1(function()
{
    return "i am call  back fun1"
},function()
{
    return "i am call  back fun2"
})

function demo(a){
    console.log(a);
    console.log(arguments)
    console.log(arguments[3])
    console.log(arguments[1])
}
demo(10,20,30,40)



//fun-programming using fun-declaration
function operation(task){
    console.log(task(10,10))
}
operation(function(a,b){
    return a+b;
})

operation(function(a,b){
    return a-b;
})
operation(function(a,b){
    return a*b;
})

// let x=Number(prompt("enter x value"))
// let y=Number(prompt("enter y value"))
// function operation1(task){
//     console.log(task(x,y))
// }
// operation1(function(a,b){
//     return a+b;
// })

// operation1(function(a,b){
//     return a-b;
// })
// operation1(function(a,b){
//     return a*b;
// })

// function addsubmul(task1,task2,task3){
//     let a=Number(prompt("enter a value addition"))
//  let b=Number(prompt("enter b value addition"))
//     console.log(task1(a,b))
//  let c=Number(prompt("enter a value subtraction"))
//     let d=Number(prompt("enter b value subtraction"))
//      console.log(task2(c,d))
//  let e=Number(prompt("enter a value multiplication"))
//     let f=Number(prompt("enter b value multiplication"))
//      console.log(task3(e,f))
// }
// addsubmul(function(a,b){
    
//     return a+b
// },function(a,b){
   
//     return a-b
// },function(a,b){
   
//     return a*b
// })



// function operation(task){
//     return task()
// }
// operation(function(){
//     var a = Number(prompt("enter a value for add"))
//     var b = Number(prompt("enter b value for add"))
//     console.log(a+b)
// })
// operation(function(){
//     var a = Number(prompt("enter a value for sub"))
//     var b = Number(prompt("enter b value for sub"))
//     console.log(a-b)
// })
// operation(function(){
//     var a = Number(prompt("enter a value for mul"))
//     var b = Number(prompt("enter b value for mul"))
//     console.log(a*b)
// })




function parent(){
    let a = 10
    function child(){
        console.log(a)
    }
    child()
}
parent()


var m = 100
var n = 200
function parent1()
{
    console.log(m)
    console.log(n)
}