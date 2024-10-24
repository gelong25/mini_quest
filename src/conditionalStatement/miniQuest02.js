//변수 한 개를 선언하여 원하는 시간을 할당
//swich or if문 사용하여 조건에 따라 아래 문장 출력  
/* 
1. 07시부터 09시 까지는 '아침 식사 시간'
2. 12시부터 14시 까지는 '점심 시간'
3. 18시부터 20시 까지는 '저녁 식사 시간'
4. 그 외 시간은 '식사 금지'
*/

const hour = 11;

if(hour >= 7 && hour <= 9) {
    console.log('아침 식사 시간');
} else if(hour >= 12 && hour <= 14) {
    console.log('점심 시간');
} else if(hour >= 18 && hour <= 20) {
    console.log('저녁 식사 시간');
} else {
    console.log('식사 금지');
}


