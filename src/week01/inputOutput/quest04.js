//입출력을 이용해 메뉴를 선택
//메모 작성할 수 있도록 추가
//1. 변수를 사용해 메뉴 창 출력 
//2. 변수를 사용해 사용자가 선택한 메뉴 번호 및 메모의 제목과 내용을 입력 받음 

const readlineSyncModule = require('readline-sync');

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

//사용자에게 메뉴 선택 입력 받기 
let userSelect = readlineSyncModule.question('메뉴 선택: '); 

switch (userSelect) {
    case 1: 
        console.log(write);
        let memoTitle = readlineSyncModule.question('메모 제목: ');
        let memoContent = readlineSyncModule.question('메모 내용: ');
        break;
    case 2:
        console.log(inquery);
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

}


