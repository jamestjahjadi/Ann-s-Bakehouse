any=(g)=>{
    var y=''
    
    for(i=0;i<(g);i++){
        for(j=i;j<(g);j++){
            y+=' '
        }for(z=0;z<=i;z++){   
                y+='*'    
        }for(k=1;k<z;k++){
            y+='*'
        }
        y+='\n'
    }
    if(z=g){
        for(l=0;l<(g);l++){
            for(p=0;p<=l;p++){
                y+=' '
            }for(k=p;k<=g;k++){
                y+='*'
            }for(h=p;h<g;h++){
               y+='*'
            }
          y+='\n'
        }
    }
    return y
    
}
console.log(any(5));