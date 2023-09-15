const express = require('express')

const app = express()
const PORT = 3000
app.listen(PORT,()=>{
    
})


// this function will return a promise 
const  synchronousNodejs = () =>{
    const timer = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("this is an example to show synchronous behaviour of nodejs")
            resolve()
        },2000)
    })
    return timer
}

// this is a driver function to execute the synchronous code 
const synchrnousDriverFunction = async () =>{
    await synchronousNodejs()
    console.log("I have written after the synchronous function called so i will execute after the excution of the synchrnous function after the promise is resolved")
}

synchrnousDriverFunction()


// this function will return a promise 
const  asynchronousNodejs = () =>{
    const timer = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("this is an example to show asynchronous behaviour of nodejs")
            resolve()
        },5000)
    })
    return timer
}

// this is a driver function to execute the asymchronous code
const asynchrnousDriverFunction = () =>{
    asynchronousNodejs()
    .then((res)=>{
        console.log('I will execute when promise will be resoved before that rest of the code will execute')
      }).catch(err=>{
        console.log(err)
      })



    console.log("I have written after the asynchronous function called but I will execute first before promise will resolve")
}

asynchrnousDriverFunction()