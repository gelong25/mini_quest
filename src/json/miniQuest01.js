import readlineSync from 'readline-sync';
import fileSystem from 'fs'

//사용자 입력 받기 
const userInput = readlineSync.question('문장 입력');

//파일에 저장 
fileSystem.writeFileSync(
    'test.json', 
    JSON.stringify({ message: userInput }),
    'utf8',
);

//파일 읽기 
const fileContent = fileSystem.readFileSync('test.json', 'utf8');
const jsonDate = JSON.parse(fileContent);
console.log('파일에 저장된 문장:', jsonDate.message); 

