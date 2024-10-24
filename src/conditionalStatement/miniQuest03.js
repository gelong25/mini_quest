//변수 한 개를 선언하여 연산기호 할당 
//swich문 사용하여 연산기호에 따라 문장 출력  
/* 
- ‘+’ 할당: ‘더하기’
- ‘-’ 할당: ‘빼기’
- ‘*’ 할당: ‘곱하기’
- ‘/’ 할당: ‘나누기’
- 그 외:  ‘연산기호가 아님’
*/

const operator = '-';

switch (operator) {
    case '+':
        console.log('더하기')
        break;
    case '-':
        console.log('빼기')   
        break;
    case '*':
        console.log('곱하기') 
        break;
    case '/':
        console.log('나누기')
        break;
    default:
        console.log('연산기호가 아님')
}

