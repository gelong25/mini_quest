//선택할 메뉴 번호를 저장할 수 있도록 수정
//조건 마다 각 기능을 출력하는 조건문 작성 
//1. 메뉴 내용:  “1. 작성 2. 조회 3. 수정 4. 삭제 5. 추가기능 6. 종료”
//2. 메뉴 출력은 변수를 사용해야 함

console.log('    메뉴    '); 
console.log('-------------');
console.log('1. 작성');
console.log('2. 조회');
console.log('3. 수정');
console.log('4. 삭제');
console.log('5. 추가기능');
console.log('6. 종료');
console.log('-------------');

console.log('선택한 메뉴');

//선택할 메뉴 번호를 저장할 수 있는 변수 선언 및 원하는 메뉴 번호 할당 
const userSelect = 3; 

//조건에 따라 메뉴 출력 
switch (userSelect) {
    case 1:
        console.log('작성');
        break
    case 2:
        console.log('조회');
        break
    case 3:
        console.log('수정');
        break    
    case 4:
        console.log('삭제');
        break
    case 5:
        console.log('추가기능');
        break
    case 6:
        console.log('종료');
        break; 
    default:    
        console.log('유효하지 않은 메뉴입니다.');  

}


