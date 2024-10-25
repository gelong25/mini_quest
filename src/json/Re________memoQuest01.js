//메모 작성 기능의 list 사용 부분을 JSON을 사용하는 방식으로 변경 
/* 
1. 메모를 작성하면 제목과 내용이 저장됨
2-1 제목 값의 프로퍼티 키는 title로 고정  
2-2 내용 값의 프로퍼티 키는 content로 고정
*/

import readlineSync from 'readline-sync';
import fileSystem from 'fs'

const filePath = 'memo.json'; 

const readlineSyncModule = require('readline-sync');

const memo = []; 

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
            //메모 작성
            const title = readlineSyncModule.question('메모 제목: ');
            const content = readlineSyncModule.question('메모 내용: '); 
            
            //객체 생성해서 키랑 밸류를 객체로 만듦 
            let object = {};
            object[title] = content; 

            //배열에 객체 추가 
            memo.push(object); 
            
            //메모를 작성하면 제목과 내용이 저장됨

            break;
        case 2:
            //메모의 제목 목록을 출력 
            viewList(); 
            titleSelect = Number(readlineSyncModule.question('조회할 제목 선택: ')); 
            if(titleSelect > keys.length) {
                break; 
            }
            console.log(titles[titleSelect], contents[titleSelect]); 
            break;
        case 3:
            //함수를 불러와 리스트 출력 
            viewList();
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
            viewList();
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
function viewList() {
    const keys = Object.keys(object); 
            for(let i = 0; i < keys.length; i++) {
                let key = keys[i];
                console.log(key); 
            }
}
