//메모 조회하기, 수정하기, 삭제하기 기능 추가 
/*
1. 리스트 사용하고 코드 작성 시 어떤 생각으로 작성했는지 주석 적을것 
2. 조회하기 : 배열에 저장된 모든 메모의 제목을 보여준 뒤 한 개를 선택해 제목과 내용 모두 확인
3. 수정하기 : 배열에 저장된 메모 중 하나를 선택 -> 메모의 제목과 내용 수정 
4. 삭제하기 : 배열에 저장된 메모 중 한 개 선택 -> 배열에서 삭제 
*/

//메모의 제목과 내용을 저장할 리스트 
const titles = []; 
const contents = []; 

const readlineSyncModule = require('readline-sync');


let memoTitle = readlineSyncModule.question('메모 제목: ');
//리스트에 메모 제목을 추가하기 위함 
titles.push(memoTitle);
let memoContent = readlineSyncModule.question('메모 내용: ');
//리스트에 메모 내용을 추가하기 위함 
contents.push(memoContent); 


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

    // 2 조회, 3 수정, 4 삭제 기능 추가  
    switch (userSelect) {
        case 1: 
            console.log(write)
            break;
        case 2:
            //주어진 조건 대로 메모 제목 리스트를 출력
            console.log(titles);    
            //사용자에게 조회할 메모의 제목 번호를 입력 받음 
            titleSelect = Number(readlineSyncModule.question('조회할 제목 선택: ')); 
            //입력 받은 번호를 바탕으로 각 메모 제목 및 내용의 리스트를 출력함 
            console.log(titles[titleSelect], contents[titleSelect]); 
            break;
        case 3:
            //리스트에 저장된 메모 중 수정하기 위한 메모를 선택 하기 위해 메모 제목을 출력함 
            console.log(titles);
            //사용자에게 수정할 메모의 제목 번호를 입력 받음 
            titleSelect = Number(readlineSyncModule.question('수정할 제목 선택(원치 않을 경우 -1): ')); 
            //수정을 원치 않는 경우 -1 입력함 
            if(titleSelect == -1) {
                break; 
            }
            //수정을 진행하는 경우 수정할 제목과 내용을 입력함 
            titles[titleSelect] = readlineSyncModule.question('수정할 제목을 입력: ');
            contents[titleSelect] = readlineSyncModule.question('수정할 내용을 입력: ');
            break;
        case 4:
            //리스트에 저장된 메모 중 삭제할 메모를 선택 하기 위해 메모 제목을 출력함
            console.log(titles);
            titleSelect = Number(readlineSyncModule.question('삭제할 제목 선택(원치 않을 경우 -1): ')); 
            //삭제를 원치 않는 경우 -1 입력함 
            if(titleSelect == -1) {
                break; 
            }
            //삭제를 진행하는 경우 해당 리스트 요소 삭제 
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
            console.log('없는 메뉴입니다.');
            break;
    
    }
} while(userSelect != 6); 
