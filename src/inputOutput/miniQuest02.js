//문장이 같은지 검사하는 받아쓰기 프로그램 
//1. let isCorrect = false; 코드를 상단에 추가해야 함
//2. 문장을 출력하는 조건문의 조건에는 isCorrect 변수 사용 
//입력한 문장이 같을 경우 '정답입니다' 출력
//입력한 문장이 다를 경우 '실패입니다' 출력 

let isCorrect = false;

const correctSentence = '오늘도 모각코 화이팅!' 

const readlineSyncModule = require('readline-sync'); 

const userInput = readlineSyncModule.question('문장 입력: ');

if(userInput == correctSentence) {
    isCorrect = true;
} 

if(isCorrect == true) {
    console.log('정답입니다');
} else {
    console.log('실패입니다');
}

