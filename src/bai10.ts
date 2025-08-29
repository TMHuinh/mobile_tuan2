function finallyFunction():Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Finally")
        }, 2000);
    })
}

finallyFunction().then((mess)=>console.log(mess)).finally(()=>console.log("Done"))