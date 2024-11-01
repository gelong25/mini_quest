//내 문장을 따라하는 앵무새 만들기 

const readlineSyncModule = require('readline-sync'); 

const userInput = readlineSyncModule.question('');
console.log(`나 : ${userInput}`);
console.log(`앵무새 : ${userInput}`);
