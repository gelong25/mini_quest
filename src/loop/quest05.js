//프로그램이 끝나지 않도록 반복문을 사용해 구현 
/*
1. 1을 입력하면 작성 기능이 동작 후 프로그램이 종료 되지 않고 메뉴 선택으로 돌아감
2. 2를 입력하면 '조회' 문장이 출력된 후 프로그램이 종료되지 않고 메뉴 선택으로 돌아감 
3. 3을 입력하면 '수정' 문장이 출력된 후 프로그램이 종료되지 않고 메뉴 선택으로 돌아감
4. 4를 입력하면 '삭제' 문장이 출력된 후 프로그램이 종료되지 않고 메뉴 선택으로 돌아감
5. 5를 입력하면 '추가기능' 문장이 출력된 후 프로그램이 종료되지 않고 메뉴 선택으로 돌아감
6. 6을 입력하면 '종료' 문장이 출력된 후 프로그램이 종료됨 
*/

const readlineSyncModule = require('readline-sync');

let write = '작성';
let inquery = '조회';
let modify = '수정';
let deletion = '삭제';
let addFuction = '추가기능';
let end = '종료';

console.log("1. 작성");
console.log("2. 조회");
console.log("3. 수정");
console.log("4. 삭제");
console.log("5. 추가기능");
console.log("6. 종료");

let userSelect

do {
    
    userSelect = Number(readlineSyncModule.question('메뉴 선택: ')); //숫자로 변환해야 함 

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
        default:
            console.log('없는 메뉴입니다.');
            break;
    
    }
} while(userSelect != 6); 


