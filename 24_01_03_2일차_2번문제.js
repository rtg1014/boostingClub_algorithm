function solution(food) {
    const [water,...all_food] = food;
    const result_food_arr = [];

    for(let i=0; i<all_food.length; i++){
        let quantity_of_food = all_food[i]
        if(quantity_of_food%2 != 0) quantity_of_food--

        if(quantity_of_food>0){
            while(quantity_of_food>0){
                result_food_arr.push(i+1)
                quantity_of_food = quantity_of_food -2
            }
        }
    }
    const first_arr = [...result_food_arr]
    result_food_arr.reverse()
    first_arr.push(0)
    const answer = first_arr.concat(result_food_arr).join('')
    console.log(answer)
    return answer;
}

solution([1,3,4,6])