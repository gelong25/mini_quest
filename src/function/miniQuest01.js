//�ݺ����� �̴�����Ʈ�� ������� ������ �ڵ带 �Լ��� ����� 

const readlineSyncModule = require('readline-sync'); 

let num = readlineSyncModule.question('���� �Է�: ');

if(num < 2) {
    console.log('2 �̻��� ���ڸ� �Է��ϼ���');
    process.exit();
}

let mul = multiple(num);
console.log(mul); 

function multiple(number) {
    let result = ''; 
    for(let i = 1; i < 10; i++) {
        result += (number + '*' + i + '=' + (number*i) + '\n'); 
    }
    return result; 
}



