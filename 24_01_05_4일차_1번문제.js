function solution(ingredient) {
    let stack_arr = []
    let hamburger_count = 0

    for(let i=0; i<ingredient.length; i++){
        stack_arr.push(ingredient[i])

        const pattern_check = [...stack_arr].splice(-4).join('')
        console.log('스택에 패턴이 쌓이는지 체크 ==> ',pattern_check)
        if(pattern_check == 1231){
            hamburger_count++
            stack_arr.splice(-4)
        }
    }
    
    console.log(hamburger_count)

    return hamburger_count;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1])

