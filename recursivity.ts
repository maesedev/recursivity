function fib (pos:number){
    let fibArr:Array<number> = [1,1]
    if (pos <= 0) return -1
    if (pos == 1) return 1

    for(let i = 2;i < pos ; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2]

        console.log(fibArr)
    }

    
    return fibArr[pos-1] 
    }

console.log("fib en pos 3: ", fib(3))

function sumaf (a:number, b:number){
    let s:number = 0;
    if (b==0) s = a 
    else s = sumaf(a,b-1) + 1;
    return s;
}
    
console.log("suma " + sumaf(10,15))
