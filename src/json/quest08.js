//메모 작성 기능의 list 사용 부분을 JSON을 사용하는 방식으로 변경 
/* 
1. 메모를 작성하면 제목과 내용이 저장됨
2-1 제목 값의 프로퍼티 키는 title로 고정  
2-2 내용 값의 프로퍼티 키는 content로 고정
*/

// import readlineSync from 'readline-sync';
// import fileSystem from 'fs'
const fileSystem = require('fs');

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
            
            //메모 객체 생성
            const newMemo = {
                title: title,
                content: content
            };
            
            //기존 메모 목록을 출력 
            const memos = viewMemo();
            //함수를 통해 메모 추가 및 저장 
            memos.push(newMemo);
            saveMemo(memos);
            
            console.log('작성한 메모가 저장되었습니다.');

            break;
        case 2:
            //함수를 불러와 메모 목록 출력 
            const loadMemo = viewMemo();
            //저장된 메모가 없는 경우 오류 메시지 출력
            //저장된 메모가 있는 경우 작성된 메모 목록 출력 
            if(loadMemo.length === 0) {
                console.log('조회 결과 작성된 메모가 없습니다.');
                break;
            } else {
                console.log('--작성한 메모 목록--');
                loadMemo.forEach((memo, index) => {
                    console.log(`${index + 1}. ${memo.title}`);
                });
            }

            const selecIndex = Number(readlineSyncModule.question('조회할 제목 선택: ')); 
            if (selecIndex >= 0 && selecIndex < loadMemo.length) {
                const selectedMemo = loadMemo[selecIndex];
                
                console.log(`\n제목: ${selectedMemo.title}`);
                console.log(`내용: ${selectedMemo.content}`);
            } else {
                console.log('유효하지 않은 제목입니다.');
            }
            break;
        case 3:
            //함수를 불러와 메모 목록 출력 
            const modifyMemo = viewMemo();
            //저장된 메모가 없는 경우 오류 메시지 출력
            //저장된 메모가 있는 경우 작성된 메모 목록 출력 
            if(modifyMemo.length === 0) {
                console.log('조회 결과 작성된 메모가 없습니다.');
                break;
            } else {
                console.log('--작성한 메모 목록--');
                modifyMemo.forEach((memo, index) => {
                    console.log(`${index + 1}. ${memo.title}`);
                });
            }

            const editIndex = Number(readlineSyncModule.question('수정할 제목 선택(원치 않을 경우 -1): ')); 
            if(editIndex == -1) {
                break; 
            } else if(editIndex >= 0 && editIndex < modifyMemo.lengt) {
                const newTitle = readlineSync.question('수정 제목 입력: ');
                const newContent = readlineSync.question('수정 내용 입력: ');

                //수정한 내용 반영
                modifyMemo[editIndex].title = newTitle;
                modifyMemo[editIndex].content = newContent;
                saveMemo(modifyMemo);

                console.log('수정한 내용이 저장되었습니다.');
            } else {
                console.log('유효하지 않은 제목입니다.');
            }
            break;
        case 4:
            //함수를 불러와 메모 목록 출력 
            const deleteMemo = viewMemo();
            //저장된 메모가 없는 경우 오류 메시지 출력
            //저장된 메모가 있는 경우 작성된 메모 목록 출력 
            if(deleteMemo.length === 0) {
                console.log('조회 결과 작성된 메모가 없습니다.');
                break;
            } else {
                console.log('--작성한 메모 목록--');
                deleteMemo.forEach((memo, index) => {
                    console.log(`${index + 1}. ${memo.title}`);
                });
            }
            
            const deleteIndex = Number(readlineSyncModule.question('삭제할 제목 선택(원치 않을 경우 -1): ')); 
            if(deleteIndex == -1) {
                break; 
            } else if (deleteIndex >= 0 && deleteIndex < deleteMemo.length) {
                deleteMemo.splice(deleteIndex, 1);
                saveMemo(deleteMemo);

                console.log('메모가 삭제되었습니다.');
            } else {
                console.log('유효하지 않은 제목입니다.');
            }
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
function viewMemo() {
    try {
        const data = fileSystem.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return []; 
    }
}

//메모를 저장하는 함수 
function saveMemo(memos) {
    fileSystem.writeFileSync(filePath, JSON.stringify(memos, null, 2)); 
}
