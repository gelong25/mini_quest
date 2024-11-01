//메모목록 보기 기능 및 사용자에게 입력 받는 부분을 함수로 변환 
/*
1-1. 메모 조회기능의 목록을 보여주는 부분을 함수로 만든다
1-2. 수정 기능, 삭제 기능을 사용할 때 목록보기 함수를 호출한다 
2. 사용자에게 입력받는 부분을 함수로 만들기 위해선 매개변수를 사용해야 함 
*/

const titles = []; 
const contents = []; 

const readlineSyncModule = require('readline-sync');


let memoTitle = readlineSyncModule.question('메모 제목: ');
titles.push(memoTitle);
let memoContent = readlineSyncModule.question('메모 내용: ');
contents.push(memoContent); 


let write = '작성';
let inquery = '조회';
let modify = '수정';
let deletion = '삭제';
let addFuction = '추가기능';
let end = '종료';

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

let userSelect

do {
    
    userSelect = Number(readlineSyncModule.question('메뉴 선택: ')); //숫자로 변환해야 함 

    switch (userSelect) {
        case 1: 
            console.log(write)
            break;
        case 2:
            //주어진 조건 대로 메모 제목 리스트를 출력
            viewList(titles);
            titleSelect = Number(readlineSyncModule.question('조회할 제목 선택: ')); 
            if(titleSelect > titles.length) {
                break; 
            }
            console.log(titles[titleSelect], contents[titleSelect]); 
            break;
        case 3:
            //함수를 불러와 리스트 출력 
            viewList(titles);
            titleSelect = Number(readlineSyncModule.question('수정할 제목 선택(원치 않을 경우 -1): ')); 
            if(titleSelect == -1) {
                break; 
            } else if(titleSelect > titles.length) {
                break;
            }
            titles[titleSelect] = readlineSyncModule.question('수정할 제목을 입력: ');
            contents[titleSelect] = readlineSyncModule.question('수정할 내용을 입력: ');
            break;
        case 4:
            //함수를 불러와 리스트 출력 
            viewList(titles);
            titleSelect = Number(readlineSyncModule.question('삭제할 제목 선택(원치 않을 경우 -1): ')); 
            if(titleSelect == -1) {
                break; 
            } else if (titleSelect > titles.length) {
                break; 
            }
            titles.pop(titleSelect);
            contents.pop(titleSelect); 
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

//메모 목록 보는 함수 
function viewList(list) {
    console.log(list); 
}