//리스트 내의 모든 숫자 합을 for문을 사용해 구현
//계산 과정도 출력 돼야 함 
//리스트: [1, 2, 3, 4, 5]

const numbers = [1, 2, 3, 4, 5];
let sum = 0; 

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
    console.log('현재 합계: ' + sum + '(' + numbers[i] + '를 더함)');
}

console.log('최종 합계: ' + sum); 
