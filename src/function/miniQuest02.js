//사칙연산 계산기를 함수를 이용해 만들기 
/* 
1. else defualt 제외 나머지 조건문 동작 코드에서 console.log() 의 소괄호 안의 값은 변수만 사용
2. 두 번째 숫자가 0인 경우 나눗셈 할 수 없도록 처리 
*/

const readlineSyncModule = require('readline-sync');
const firstNumber = Number(readlineSyncModule.question('첫 번째 숫자*: '));
const secondNumber = Number(readlineSyncModule.question('두 번째 숫자*: ')); 
const operator = readlineSyncModule.question('연산 기호: '); 

let op = arithmetic(firstNumber, secondNumber, operator);
console.log(op); 

function arithmetic(firstNum, secNum, operator) {

    let result;

    switch (operator) {
        case '+':   
            result = firstNum + secNum;    
            break;
        case '-':  
            result = firstNum - secNum;    
            break;
        case '*':  
            result = firstNum * secNum;    
            break;
        case '/':  
            if(secNum === 0) {
                const error = '두 번째 숫자는 0이 올 수 없습니다.';
                console.log(error); 
            }
            result = firstNum / secNum;    
            break;
        default:   
            result = '유효하지 않은 연산자입니다.';   
    }

    return result;
}

