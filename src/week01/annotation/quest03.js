//조건문 과제까지 진행한 코드에서 조건문을 한글로 표현하는 주석 추가 

//사용자에게 보여줄 이용 가능 메뉴 출력 
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
    case 1:                     //변수에 저장된 값이 1이면 
        console.log('작성');    //작성 메뉴를 선택한 것이므로 작성 출력 
        break
    case 2:                     //변수에 저장된 값이 2면
        console.log('조회');    //조회 메뉴를 선택한 것이므로 조회 출력  
        break
    case 3:                     //변수에 저장된 값이 3이면
        console.log('수정');    //수정 메뉴를 선택한 것이므로 수정 출력 
        break    
    case 4:                     //변수에 저장된 값이 4면
        console.log('삭제');    //삭제 메뉴를 선택한 것이므로 삭제 출력 
        break
    case 5:                    //변수에 저장된 값이 5면
        console.log('추가기능');//추가기능 메뉴를 선택한 것이므로 추가기능 출력 
        break
    case 6:                    //변수에 저장된 값이 6이면 
        console.log('종료');   //종료 메뉴를 선택한 것이므로 종료 출력 
        break;                 
    default:                  //메뉴에 없는 번호일 경우 
        console.log('유효하지 않은 메뉴입니다.'); //오류 메시지 출력  

}


