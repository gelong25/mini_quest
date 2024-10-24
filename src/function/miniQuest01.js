//반복문의 미니퀘스트를 기반으로 구구단 코드를 함수로 만들기 

const readlineSyncModule = require('readline-sync'); 

let num = readlineSyncModule.question('숫자 입력: ');

if(num < 2) {
    console.log('2 이상의 숫자를 입력하세요');
    process.exit();
}

let mul = multiple(num);
console.log(mul); 

function multiple(number) {
    let result = ''; 
    for(let i = 1; i < 10; i++) {
        result += (number + '*' + i + '=' + (number*i) + '\n'); 
    }
    return result; 
}



