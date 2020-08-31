prime=(g)=>{
    var prima=[]
    for(i = 2 ; i <= g ; i++){
        var bul=false
        for(j = 2; j <= i ; j++){
            if(i % j === 0 && j !== i){
                bul = true
            }
        }
        if(bul == false){
            prima.push(i)
        }
}
return prima
}

console.log(prime(100));





