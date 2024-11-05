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
let memoTitle = readlineSyncModule.question('메모 제목: ');
let memoContent = readlineSyncModule.question('메모 내용: ');

let write = '작성';
let inquery = '조회';
let modify = '수정';
let deletion = '삭제';
let addFuction = '추가기능';
let end = '종료';

//사용자에게 보여줄 이용 가능 메뉴 출력 
console.log('    메뉴    '); 
console.log('-------------');
console.log(`1. ${write}`);
console.log(`2. ${inquery}`);
console.log(`3. ${modify}`);
console.log(`4. ${deletion}`);
console.log(`5. ${addFuction}`);
console.log(`6. ${end}`);
console.log('-------------');

let userSelect

do {
    
    userSelect = Number(readlineSyncModule.question('메뉴 선택: ')); 

    switch (userSelect) {
        case 1: 
            console.log(write);
            memoTitle = readlineSyncModule.question('메모 제목: ');
            memoContent = readlineSyncModule.question('메모 내용: ');
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
            console.log('유효하지 않은 메뉴입니다.');
            break;
    
    }
} while(userSelect != 6); 


