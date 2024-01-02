// 약수의 개수와 덧셈

/*
문제설명

두 정수 left와 right가 매개변수로 주어집니다. 
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(left, right) {
    
    let answer = 0
    
    for(let i=left; i<=right; i++){
        let even_number_check = 0
        let divide_count = 1;

        while(divide_count<=i){
            if(i%divide_count==0){
                even_number_check++
            }
            divide_count++
        }
        if(even_number_check%2==0){
            answer +=i
            console.log('추가된 i값 체크==>',i)
        }else{
            answer -= i
        }
        // console.log('현재 answer 값',answer)

    }
    return answer;
}

console.log(solution(13,17))