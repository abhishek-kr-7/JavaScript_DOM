let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1> hello</h1>'

let div = document.createElement('div');
div.innerHTML = '<h1> hello world</h1>'
// a.append(div)
a.prepend(div)
// a.before(div)
a.after(div)
// a.replaceWith(div)

let t = setTimeout(function(){ alert("Inside setTimeout")},5000)
let b = prompt('Do you want to run the setTimeout?')
if("n" == b){
    clearTimeout(t)
}

else{
    console.log(t)
}

// const sum = (a,b,c) => { console.log("Yes I am running" + (a+b+c))}

// let d = setInterval(sum,5000,1,3,5)
// console.log(d)


//*****Callback*****/

// function loadscript(src , callback){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){ 
//         console.log("Loaded" + src); 
//         callback(src); } 
//         document.body.appendChild(script)
//     }

// function hello(src){
//     alert('Hello'+src)
// }

// loadscript("https://www.google.com/ ", hello )


//*****Promise******/
// let p = new Promise(function(resolve,reject){
//     alert('Hello')
//     resolve(56)
// })

// console.log('hello one')
// setTimeout(() => {
//     console.log('Hello two 2 seconds')
// }, 2000);

// console.log('hello three')
// console.log(p)

// let p1 = new Promise((resolve,reject) =>{
//     console.log("Promise 1 is pending")
//     setTimeout(() => {
//         resolve(true)
//     }, 5000);
// })

// let p2 = new Promise((resolve,reject) => {
//     console.log("Promise 2 is pending")
//     setTimeout(() => {
//         reject(new Error("This is an error"))
//     }, 5000);
// })

// p1.then((value) => {
//     console.log(value)
// })

// p2.catch((error) => {
//     console.log("Some error in p2")
// })

// p2.then((value) => {
//     console.log(value)
// },(error) => {
//     console.log(error)
// })