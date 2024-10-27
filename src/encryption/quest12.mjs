/* 
1. 조회, 수정, 삭제 기능에 잠금 처리된 메모의 잠금을 풀고 수정 및 삭제할 수 있도록 수정 
2. 프로그램 사용자가 메모를 모두 사용한 후에 다시 잠금처리 할 지 여부를 물어봄 
2. 암호화를 사용하는 부분을 함수를 사용해 재사용
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
printMenu();

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
            // 함수를 불러와 메모 목록 출력 
            const loadMemo = viewMemo();
                
            viewTheMenu(loadMemo);
            
            const selectedViewMemo = parseInt(readlineSyncModule.question('조회할 메모 번호 선택: '));
            
            try {
                if (selectedViewMemo < 1 || selectedViewMemo > loadMemo.length) {
                       throw new Error('유효하지 않은 번호입니다.');
                   }
            
                const selectedMemo = loadMemo[selectedViewMemo - 1]; // 선택한 메모 객체 참조
            
                // 선택한 메모가 잠금 상태인지 확인
                if (selectedMemo.locked) {
                    const unlockInqueryMemo = readlineSyncModule.question('해당 메모는 잠금 상태입니다. 잠금 해제를 원하시면 y를 눌러주세요.');
                    if (unlockInqueryMemo === 'y') {
                        loadMemo[selectedViewMemo - 1] = decryptMemo(selectedMemo); // 메모 잠금 해제
                        console.log('메모가 잠금 해제되었습니다.');
            
                        // 잠금 해제된 메모의 제목과 내용 출력
                        const unlockedMemo = loadMemo[selectedViewMemo - 1];
                        console.log(`\n제목: ${unlockedMemo.title}`);
                        console.log(`내용: ${unlockedMemo.content}`);
                    } else {
                        break;
                    }
                } else {
                    // 잠금되지 않은 메모의 제목과 내용 출력
                    console.log(`\n제목: ${selectedMemo.title}`);
                    console.log(`내용: ${selectedMemo.content}`);
                }
            } catch (error) {
                console.log(error.message);
            }
        break;
        case 3:
            //함수를 불러와 메모 목록 출력 
            const modifyMemo = viewMemo();
            
            viewTheMenu(modifyMemo);
            
            const editedMemoIndex  = parseInt(readlineSyncModule.question('수정할 메모 번호 선택(원치 않을 경우 -1): '));
            
            if(editedMemoIndex  == -1) {
                break; 
            }

            try {
                if(editedMemoIndex < 1 || editedMemoIndex > modifyMemo.length) {
                    throw new Error('유효하지 않은 번호입니다.');
                }

                const selectedMemoToEdit = modifyMemo[editedMemoIndex - 1];

                if (selectedMemoToEdit.locked){
                    const unlockModifyMemo = readlineSyncModule.question('해당 메모는 잠금 상태입니다. 잠금 해제를 원하시면 y를 눌러주세요.');
                    
                    if (unlockModifyMemo === 'y') {
                        modifyMemo[editedMemoIndex - 1] = decryptMemo(selectedMemoToEdit); 
                        console.log('메모가 잠금 해제되었습니다.');
        
                        // 잠금 해제된 메모 수정 
                        const newTitle = readlineSyncModule.question('수정 제목 입력: ');
                        const newContent = readlineSyncModule.question('수정 내용 입력: ');
        
                        modifyMemo[editedMemoIndex - 1].title = newTitle;
                        modifyMemo[editedMemoIndex - 1].content = newContent;
                        saveMemo(modifyMemo);
                        console.log('수정한 내용이 저장되었습니다.');
                    } else {
                        break;
                    }
                } else {
                    //잠금되지 않은 메모 수정 
                    const newTitle = readlineSyncModule.question('수정 제목 입력: ');
                    const newContent = readlineSyncModule.question('수정 내용 입력: ');
        
                    modifyMemo[editedMemoIndex - 1].title = newTitle;
                    modifyMemo[editedMemoIndex - 1].content = newContent;
                    saveMemo(modifyMemo);
                    console.log('수정한 내용이 저장되었습니다.');
                }
                
            } catch (error) {
                console.log(error.message);
            }
            
            break;
        case 4:
            //함수를 불러와 메모 목록 출력 
            const deleteMemo = viewMemo();
            
            viewTheMenu(deleteMemo);

            const deletedMemoIndex  = parseInt(readlineSyncModule.question('삭제할 메모 번호 선택(원치 않을 경우 -1): '));
            
            if(deletedMemoIndex  == -1) {
                break; 
            }

            try {
                if(deletedMemoIndex < 1 || deletedMemoIndex > deleteMemo.length) {
                    throw new Error('유효하지 않은 번호입니다.');
                }

                const selectedMemoToDelete = deleteMemo[deletedMemoIndex - 1];
                
                if (selectedMemoToDelete.locked){
                    const unlockDeleteMemo = readlineSyncModule.question('해당 메모는 잠금 상태입니다. 잠금 해제를 원하시면 y를 눌러주세요.');
                    //잠금 해제된 메모 삭제 
                    if (unlockDeleteMemo === 'y') {
                        deleteMemo[deletedMemoIndex - 1] = decryptMemo(selectedMemoToDelete); 
                        console.log('메모가 잠금 해제되었습니다.');

                        deleteMemo.splice(deletedMemoIndex - 1, 1);
                        saveMemo(deleteMemo);
                        console.log('메모가 삭제되었습니다.');
                    } else {
                        break;
                    }
                } else {
                    //잠금되지 않은 메모 삭제        
                    deleteMemo.splice(deletedMemoIndex - 1, 1);
                    saveMemo(deleteMemo);
                    console.log('메모가 삭제되었습니다.');
                }
                
            } catch (error) {
                console.log(error.message);
            }
            break;
        case 5:

            //함수를 불러와 메모 목록 출력 
            const lockMemoList = viewMemo();
            
            viewTheMenu(lockMemoList);
 
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
            printMenu(); 
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
    const decryptedContent = CryptoJS.AES.decrypt(memo.content.replace(/^잠금\s*/, ''), secretKey).toString(CryptoJS.enc.Utf8);
    
    return {
        title: decryptedTitle,
        content: decryptedContent,
        locked: false
    };
}

function printMenu() {
    
    console.log('    메뉴    '); 
    console.log('-------------');
    console.log('1. 작성');
    console.log('2. 조회');
    console.log('3. 수정');
    console.log('4. 삭제');
    console.log('5. 잠금');
    console.log('6. 종료');
    console.log('-------------');
}

function viewTheMenu(memoView) {
    
    if (memoView.length === 0) {
        console.log('조회 결과 작성된 메모가 없습니다.');
        return;
    } else {
        console.log('--작성한 메모 목록--');
        memoView.forEach((memo, index) => {
        console.log(`${index + 1}. ${memo.title}`);
        });
    }
}