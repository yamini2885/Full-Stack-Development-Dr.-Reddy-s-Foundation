// for loop
//starting number :1 
// ending number:5

for (let i = 0; i<6; i++){
    console.log(i);
}

// to print reverse

for (let j = 5; j>0; j--){
    console.log(j);
}
//  to peint even numbers
//  0 2 4 6 8
for(let i=0;i<=10; i=i+2){
    console.log(i)
}

// find the length of a string
let str="hello"
console.log(str.length)
console.log(str.length - 1)


for(i =0 ; i<str.length;i++)
{
    console.log(str[i])
}


// while loop
let a=1

while(a<5){
    console.log(a)
    a++
}

// do while loop
let c=0
do{
   console.log(c)
   c++
}
while(c<5)

// nested for loop

for(let i=0;i<=2;i++){
    console.log(`outer loop === ${i}`);
    for(let j=0; j<=3; j++){
        console.log(`inner loop === ${j}`)
    }    
}