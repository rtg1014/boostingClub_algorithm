
function solution(k, m, score) {
    const maximum_price = k
    const one_box_in_max_EA = m
    const my_apple_EA_with_price_arr = score.sort((a,b)=>b-a)
    console.log('초기 전체 현황=>',my_apple_EA_with_price_arr)

    const maximum_box_EA = Math.floor(my_apple_EA_with_price_arr.length/one_box_in_max_EA);
    console.log('나올수 있는 최대 박스 갯수=>',maximum_box_EA)

    const sale_available_box = []
    for(let i=0; i<maximum_box_EA; i++){
        const void_box = []
        for(let j=0; j<one_box_in_max_EA; j++){
            void_box.push(my_apple_EA_with_price_arr[0])
            my_apple_EA_with_price_arr.splice(0, 1)
        }
        console.log('현재 빈박스==>', void_box)
        sale_available_box.push(void_box)


    }
    console.log('세일즈 박스==>',sale_available_box)
    let result = 0
    sale_available_box.forEach(box => {
        const minimum_price = Math.min(...box)
        const one_box_in_apple_EA = box.length
        const total = minimum_price * one_box_in_apple_EA
        result += total
    });
    console.log('총 얼마?? ',result)
    const answer = 1
    return answer;
}


// solution(3,4,[1,2,3,1,2,3,1])
// solution(4,3,[4,1,2,2,4,4,4,4,1,2,4,2])
solution(4,3,[4,1,2,2,4,4,4,4,1,2,4,2])
