/*

`let`과 `const`의 재할당 차이점 파악하기

1. `let`으로 선언된 변수 `temperature`에 처음에는 25를 할당하고, 이후에 30으로 값을 변경하기 
2. `const`로 선언된 변수 `MAX_TEMPERATURE`에 35를 할당하고, 
    이후에 이 변수에 다른 값을 할당하려 시도했을 때 발생하는 오류 설명하기 

*/

// let의 재할당 
let temperature = 25;
console.log(temperature);

temperature = 30; 
console.log(temperature);

// const 재할당 
const MAX_TEMPERATURE = 35;
console.log(MAX_TEMPERATURE);

// MAX_TEMPERATURE = 40; 
console.log(MAX_TEMPERATURE);

