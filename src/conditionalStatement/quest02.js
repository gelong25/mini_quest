//선택할 메뉴 번호를 저장할 수 있도록 수정
//조건 마다 각 기능을 출력하는 조건문 작성 
//1. 메뉴 내용:  “1. 작성 2. 조회 3. 수정 4. 삭제 5. 추가기능 6. 종료”
//2. 메뉴 출력은 변수를 사용해야 함

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
    case 1: 
        console.log(write)
        break;
    case 2:
        console.log(inquery)
        break;
    case 3:
        console.log(modify);
        break;
    case 4:
        console.log(deletion);
        break;
    case 5:
        console.log(addFuction);
        break;
    case 6:
        console.log(end);
        break; 

}


