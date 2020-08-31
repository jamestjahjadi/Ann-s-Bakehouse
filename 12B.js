fibo=(g)=>{
    var j=[0,1]
    for(i = 2 ; i < g ; i++){
      j.push(j[i-2] + j[i-1])
    }
    return j
}

console.log(fibo(3));
