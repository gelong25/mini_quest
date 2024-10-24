//숫자 하나를 입력하면 해당 숫자의 구구단 출력
//2 미만의 숫자를 입력할 경우 '2 이상의 숫자를 입력하세요'를 출력 

const readlineSyncModule = require('readline-sync'); 

let num = readlineSyncModule.question('숫자 입력: ');

if(num < 2) {
    console.log('2 이상의 숫자를 입력하세요');
    process.exit();
}

for(let i = 1; i < 10; i++) {
    console.log(num + '*' + i + '=' + (num*i)); 
}