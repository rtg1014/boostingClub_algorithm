
// 로또의 최고 순위와 최저 순위
/*

문제 설명
로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 
아래는 로또의 순위를 정하는 방식입니다. 

순위	당첨 내용
1	6개 번호가 모두 일치
2	5개 번호가 일치
3	4개 번호가 일치
4	3개 번호가 일치
5	2개 번호가 일치
6(낙첨)	그 외

로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 
하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 
당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 
순위를 알아보고 싶어 졌습니다. 알아볼 수 없는 번호를 0으로 표기하기로 하고, 
민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다. 
당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 
순위의 한 예는 아래와 같습니다.

lottos	                win_nums	            result
[44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	 [3, 5]
[0, 0, 0, 0, 0, 0]	   [38, 19, 20, 40, 15, 25]	 [1, 6]
[45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	 [1, 1]


*/


function solution(lottos, win_nums) {
    const answer = [];
    
    const inclueds_numbers = win_nums.filter(number => lottos.includes(number))
    const zeros = lottos.filter((num)=> num == 0)
    const shot_num_arr = []

    const max_shot_arr = zeros.length + inclueds_numbers.length
    shot_num_arr.push(max_shot_arr)
    

    let min_shot_arr = 0
    
    if(inclueds_numbers.length==[]){
        min_shot_arr++
    }else{
        min_shot_arr = inclueds_numbers.length
    }

    shot_num_arr.push(min_shot_arr)



    for(let i=0; i<shot_num_arr.length; i++){
        const shot_num = shot_num_arr[i]
        console.log(shot_num)
        
        switch(shot_num){
            case shot_num == 6:
                answer.push(1)
                break
            case shot_num == 5:
                answer.push(2)
                break
            case shot_num == 4:
                answer.push(3)
                break
            case shot_num == 3:
                answer.push(4)
                break
            case shot_num == 2:
                answer.push(5)
                break
            case shot_num <= 1:
                answer.push(6)
                break
        }
    }
    console.log(answer)
    return answer;
}

const lottos = [44, 1, 0, 0, 31, 25]
const win_nums = [31, 10, 45, 1, 6, 19]	

solution(lottos, win_nums)