//��Ģ���� ���⸦ �Լ��� �̿��� ����� 
/* 
1. else defualt ���� ������ ���ǹ� ���� �ڵ忡�� console.log() �� �Ұ�ȣ ���� ���� ������ ���
2. �� ��° ���ڰ� 0�� ��� ������ �� �� ������ ó�� 
*/

const readlineSyncModule = require('readline-sync');
const firstNumber = Number(readlineSyncModule.question('ù ��° ����*: '));
const secondNumber = Number(readlineSyncModule.question('�� ��° ����*: ')); 
const operator = readlineSyncModule.question('���� ��ȣ: '); 

let op = arithmetic(firstNumber, secondNumber, operator);
console.log(op); 

function arithmetic(firstNum, secNum, operator) {

    let result;

    switch (operator) {
        case '+':   
            result = firstNum + secNum;    
            break;
        case '-':  
            result = firstNum - secNum;    
            break;
        case '*':  
            result = firstNum * secNum;    
            break;
        case '/':  
            if(secNum === 0) {
                const error = '�� ��° ���ڴ� 0�� �� �� �����ϴ�.';
                console.log(error); 
            }
            result = firstNum / secNum;    
            break;
        default:   
            result = '��ȿ���� ���� �������Դϴ�.';   
    }

    return result;
}

