// 과일장수

/*
문제 설명
과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, 
k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.

한 상자에 사과를 m개씩 담아 포장합니다.
상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.
(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)

예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 
다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 
과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

제한사항
3 ≤ k ≤ 9
3 ≤ m ≤ 10
7 ≤ score의 길이 ≤ 1,000,000
1 ≤ score[i] ≤ k
이익이 발생하지 않는 경우에는 0을 return 해주세요.
입출력 예
k	m	score	result
3	4	[1, 2, 3, 1, 2, 3, 1]	8
4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33

*/



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
