//주어진 리스트 내의 모든 숫자에서 짝수만 골라 합을 구할 것 
//짝수를 찾는 과정도 함께 출력 해야 함 
//리스트: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0; 

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        console.log('짝수 발견: ' + numbers[i]);
        sum += numbers[i]; 
    }
}

console.log('짝수 합계: ' + sum); 