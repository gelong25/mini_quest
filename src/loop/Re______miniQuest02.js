//밑변의 길이가 9인 이등변 삼각형 출력 
//*을 사용해 출력할 것 

//https://www.notion.so/adapterz/128394a4806180cb8ca5f582bbbaf1ce?pvs=4

let star = 9; 
let blank = ' '; 

for(let i = 0; i < star; i++) {
    for(let j = 0; j <= i; j++) {
        console.log('*'); 
    }
}