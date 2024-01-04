function solution(a,b) {
    for(let i=0; i<b; i++){
        let stars = ''
        let while_lengh = a
        while(while_lengh>0){
            stars += '*'
            while_lengh--
        } 
        console.log(stars)
    }
}

solution(5,3)