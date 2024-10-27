//밑변의 길이가 9인 이등변 삼각형 출력 
//*을 사용해 출력할 것 

//https://www.notion.so/adapterz/128394a4806180cb8ca5f582bbbaf1ce?pvs=4
//https://velog.io/@rayong/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B3%84-%EC%B0%8D%EA%B8%B0-%EC%A0%9C%EC%BD%94%EB%B2%A0-JS-100%EC%A0%9C

let height = 5; 
let base = 9;

for(let i = 1; i < height; i++) {
    
    let row = '';
    
    for(let j = 0; j < (base - (2 * i - 1)) / 2; j++) {
        row += ' ';
    }

    for(let k = 0; k < 2 * i - 1; k++) {
        row += '*';
    }
    console.log(row); 
}