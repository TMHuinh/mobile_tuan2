function filterNumber(arr:number[]): Promise<number[]>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            var even = arr.filter(num =>num%2==0)
            resolve(even)
        }, 1000);
    })
}

filterNumber([1,2,3,4,5,6,7,8]).then((arrnumber)=>console.log(arrnumber));