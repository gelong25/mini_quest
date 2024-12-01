/*

화살표 함수를 사용해서 주어진 배열 내의 모든 숫자를 더하는 sumArray 함수 정의하기 
- sumArray 함수는 숫자 배열을 매개변수로 받음 
- sumArray 함수 내에서 반복문을 사용해 배열의 모든 요소를 더함 
sumArray 함수를 사용해서 [1, 2, 3, 4, 5] 배열의 숫자를 모두 더한 결과를 total 변수에 저장하기 

*/

const sumArray = (arr) => {
    let sum = 0; 
    for(let num of arr) {
        sum += num;
    }
    return sum;
}; 

numArr = [1, 2, 3, 4, 5];

const total = sumArray(numArr); 

// total 출력 
console.log(total);  
