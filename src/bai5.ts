function simulateTask(time:number): Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Tast done")
        }, time);
    })
}

simulateTask(2000).then((time=>{console.log(time)}))