// 3진법 뒤집기

/*
문제설명
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 
이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.



*/

function solution(n) {
    const convert_3 = n.toString(3)
    console.log(convert_3)

    let answer = 0
    for(let i=0; i<convert_3.length; i++){
        console.log('3진수 =>',3 ** i)
        answer += (convert_3[i]) * (3 ** i)

    }
    console.log('최종 답은 ? ',answer)
    return answer;
}

solution(45)