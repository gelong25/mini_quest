const readlineSyncModule = require('readline-sync'); 

const userInput = readlineSyncModule.question('');
console.log(`나 : ${userInput}`);
console.log(`앵무새 : ${userInput}`);
