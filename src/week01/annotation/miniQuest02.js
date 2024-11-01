//첫 번째 숫자를 저장할 변수 선언 및 할당  
const firstNumber = 10;
//두 번째 숫자를 저장할 변수 선언 및 할당   
const secondNumber = 5;
//연산 기호를 저장할 변수 선언 및 할당   
const operator = '+';

//결과를 저장할 변수 
let result;

//연산기호에 따른 조건문 
switch (operator) {
    case '+':    //연산 기호가 +인 경우 
        result = firstNumber + secondNumber;    //두 변수를 더한 뒤 결과를 저장할 변수에 할당 
        break;
    case '-':   //연산 기호가 -인 경우 
        result = firstNumber - secondNumber;    //두 변수를 뺀 뒤 결과를 저장할 변수에 할당 
        break;
    case '*':   //연산 기호가 *인 경우 
        result = firstNumber * secondNumber;    //두 변수를 곱한 뒤 결과를 저장할 변수에 할당 
        break;
    case '/':   //연산 기호가 /인 경우 
        result = firstNumber / secondNumber;    //두 변수를 나눈 뒤 결과를 저장할 변수에 할당 
        break;
    default:    //그 외의 경우 
        result = '유효하지 않은 연산자입니다.';   //결과를 저장할 변수에 출력할 문장을 할당 
}

//연산 결과 출력 
console.log(`결과: ${result}`);