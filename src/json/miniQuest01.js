//1. 자신의 정보를 객체화하고 JSON 파일로 저장 (이름, 나이, 이메일, 전화번호)
//2. 파일을 다시 삭제 

const fileSystem = require('fs');

const myInfo = {
            "name": "헤이즐", 
            "age": 26, 
            "email": "hazel@test.com", 
            "tel": "010.1234.1234" 
        };

//JSON의 키를 가져오며 이때 keys는 반복 가능한 객체가 됨 
const keys = Object.keys(myInfo);

for(let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key + ": " + myInfo[key]);
}

//json 파일 저장 전 js 객체를 JSON 형식 문자열로 변환 
const jsonString = JSON.stringify(myInfo); 

//json 파일 저장 
fileSystem.writeFileSync('myInfo.json', jsonString, 'utf-8');
console.log('myInfo.json 파일이 생성되었습니다.');

//json 파일 삭제 여부 입력 받기 
const readlineSyncModule = require('readline-sync');
const deleteFile = readlineSyncModule.question('myInfo.json 파일을 삭제하시겠습니까? (y/n): ');

if(deleteFile === 'y') {
    //json 파일 삭제 
    fileSystem.unlinkSync('myInfo.json');
    console.log('myInfo.json 파일이 삭제되었습니다.');
}





