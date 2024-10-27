//메모를 잠금 처리하고 잠금 해제할 수 있는 기능 추가 

/* 
1. 예외처리는 기본적으로 적용할 것 
2. 잠금 처리 된 메모는 '잠금'이라는 텍스트가 제목과 파일명 앞에 붙음 
3. 잠금 처리된 메모는 조회, 수정, 삭제 기능을 시도 시 오류 메시지가 출력되고 사용할 수 없음 
*/

import CryptoJS from 'crypto-js';
import readlineSyncModule from 'readline-sync';
import readline from 'readline';
import fs from 'fs';
import { error } from 'console';

const secretKey = '1q2w3e4r';

const filePath = 'memo.json'; 

let write = '작성';
let inquery = '조회';
let modify = '수정';
let deletion = '삭제';
let security = '잠금';
let end = '종료';

//사용자에게 보여줄 이용 가능 메뉴 출력 
console.log('    메뉴    '); 
console.log('-------------');
console.log('1. 작성');
console.log('2. 조회');
console.log('3. 수정');
console.log('4. 삭제');
console.log('5. 잠금');
console.log('6. 종료');
console.log('-------------');

let userSelect

do {
    userSelect = parseInt(readlineSyncModule.question('메뉴 선택: '));

    switch (userSelect) {
        case 1: 
            //메모 작성
            const title = readlineSyncModule.question('메모 제목: ');

            const inputLines = []; 

            while(true) {
                const content = readlineSyncModule.question('메모 내용(exit 입력 시 종료): ');
                if(content.toLocaleLowerCase() === 'exit') {
                    break;
                }
                inputLines.push(content); 
            }

            const line = inputLines.join("\n");
            
            //메모 객체 생성 
            const newMemo = {
                title: title,
                content: line
            };
            
            //기존 메모 목록을 불러옴  
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

            const titleToView = readlineSyncModule.question('조회할 제목 입력: ');
            const selectedMemoToView = loadMemo.find(memo => memo.title === titleToView);

            //메모 조회 시 유효하지 않은 제목을 입력할 경우 오류 메시지 출력 
            if (!selectedMemoToView) {
                console.log('해당 제목의 메모를 찾을 수 없습니다.');
            } else if (selectedMemoToView.locked) {
                console.log('해당 메모는 잠금 상태이므로 조회할 수 없습니다.');
            } else {
                console.log(`\n제목: ${selectedMemoToView.title}`);
                console.log(`내용: ${selectedMemoToView.content}`);
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

            const titleToEdit = readlineSyncModule.question('수정할 제목 입력(원치 않을 경우 -1): ');
            if(titleToEdit == -1) {
                break; 
            }
            const selectedMemoToEdit = modifyMemo.find(memo => memo.title === titleToEdit);

            if (!selectedMemoToEdit) {
                console.log('해당 제목의 메모를 찾을 수 없습니다.');
            } else if (selectedMemoToEdit.locked) {
                console.log('해당 메모는 잠금 상태이므로 수정할 수 없습니다.');
            } else {
                const newTitle = readlineSyncModule.question('수정 제목 입력: ');
                const newContent = readlineSyncModule.question('수정 내용 입력: ');
        
                selectedMemoToEdit.title = newTitle;
                selectedMemoToEdit.content = newContent;
                saveMemo(modifyMemo);
                console.log('수정한 내용이 저장되었습니다.');
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
            
            const titleToDelete = readlineSyncModule.question('삭제할 제목 입력(원치 않을 경우 -1): ');
            if (titleToDelete === '-1') {
                break;
            }
    
            const deleteIndex = deleteMemo.findIndex(memo => memo.title === titleToDelete);
    
            if (deleteIndex === -1) {
                console.log('해당 제목의 메모를 찾을 수 없습니다.');
            } else {
                const selectedMemoToDelete = deleteMemo[deleteIndex];
            if (selectedMemoToDelete.locked) {
                console.log('잠금 상태로 삭제할 수 없습니다.');
            } else {
                deleteMemo.splice(deleteIndex, 1);
                saveMemo(deleteMemo);
                console.log('메모가 삭제되었습니다.');
                }
            }
            break;
        case 5:

            //함수를 불러와 메모 목록 출력 
            const lockMemoList = viewMemo();
            
            //저장된 메모가 없는 경우 오류 메시지 출력
            //저장된 메모가 있는 경우 작성된 메모 목록 출력 
            if(lockMemoList.length === 0) {
                console.log('조회 결과 작성된 메모가 없습니다.');
                break;
            } else {
                console.log('--작성한 메모 목록--');
                lockMemoList.forEach((memo, index) => {
                    console.log(`${index + 1}. ${memo.title}`);
                });
            }  
 
            const lockIndex = parseInt(readlineSyncModule.question('잠금 또는 해제할 번호 선택: '));

            try {
                if (lockIndex < 1 || lockIndex > lockMemoList.length) {
                    throw new Error('유효하지 않은 번호입니다.');
                }
        
                const selectedMemo = lockMemoList[lockIndex - 1]; 
                if (selectedMemo.locked) {
                    lockMemoList[lockIndex - 1] = decryptMemo(selectedMemo);
                    console.log('해당 메모는 잠금 해제되었습니다.');
                } else {
                    lockMemoList[lockIndex - 1] = encryptMemo(selectedMemo);
                    console.log('해당 메모는 잠금 처리되었습니다.');
                }
                saveMemo(lockMemoList);
                
            } catch (error) {
                console.log(error.message);
            }
            break;
        case 6:
            console.log(end);
            break; 
        default:
            console.log('유효하지 않은 메뉴입니다. 다시 입력해주세요.');
            break;
    
    }
} while(userSelect != 6); 

//메모 목록 보는 함수 
function viewMemo() {
    try {
        if (!fs.existsSync(filePath)) {  
            return [];  
        }
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log('메모를 불러오는 도중 오류가 발생했습니다.', error.message);
        return []; 
    }
}

//메모를 저장하는 함수 
function saveMemo(memos) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(memos, null, 2)); 
    } catch (error) {
        console.log('메모를 저장하는 도중 오류가 발생했습니다.', error.message);
    }
}

//메모를 잠금처리 하는 함수 
function encryptMemo(memo) {
    const encryptedTitle = CryptoJS.AES.encrypt(memo.title, secretKey).toString();
    const encryptedContent = CryptoJS.AES.encrypt(memo.content, secretKey).toString();
    return {
        title: `잠금 ${encryptedTitle}`,  
        content: `잠금 ${encryptedContent}`,
        locked: true
    };
}

//메모를 잠금해제 하는 함수
function decryptMemo(memo) {
    const decryptedTitle = CryptoJS.AES.decrypt(memo.title.replace(/^잠금\s*/, ''), secretKey).toString(CryptoJS.enc.Utf8);
    const decryptedContent = CryptoJS.AES.decrypt(memo.content, secretKey).toString(CryptoJS.enc.Utf8);
    return {
        title: decryptedTitle,
        content: decryptedContent,
        locked: false
    };
}
