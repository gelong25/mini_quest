//조건문 과제까지 진행한 코드에서 조건문을 한글로 표현하는 주석 추가 

let write = '작성';
let inquery = '조회';
let modify = '수정';
let deletion = '삭제';
let addFuction = '추가기능';
let end = '종료';

//선택할 메뉴 번호를 저장할 수 있는 변수 선언 및 원하는 메뉴 번호 할당 
const userSelect = 3; 

//조건에 따라 메뉴 출력 
switch (userSelect) {
    case 1:     //메뉴 번호가 1이면
        console.log(write)  //write 변수 값 출력 
        break;
    case 2:     //메뉴 번호가 2면
        console.log(inquery)        //inquery 변수 값 출력 
        break;
    case 3:     //메뉴 번호가 3이면
        console.log(modify);        //modify 변수 값 출력 
        break;
    case 4:     //메뉴 번호가 4면
        console.log(deletion);      //deletion 변수 값 출력 
        break;
    case 5:     //메뉴 번호가 5면
        console.log(addFuction);    //addFuction 변수 값 출력 
        break;
    case 6:     //메뉴 번호가 6이면
        console.log(end);           //end 변수 값 출력 
        break; 

}


