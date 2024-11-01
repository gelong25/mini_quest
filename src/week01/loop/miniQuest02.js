//밑변의 길이가 9인 이등변 삼각형 출력 
//*을 사용해 출력할 것 


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