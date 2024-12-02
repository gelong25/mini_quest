/*

블록 스코프 내의 `let` 변수 접근

1. `if` 문 내부에 `let`으로 선언된 변수 `isRaining`을 true로 초기화하고, `if` 문 외부에서 이 변수에 접근하려 할 때 발생하는 문제 설명하기 
2. 이러한 스코프의 한계를 어떻게 해결할 수 있는지 해결책 제시하기 

*/

if(true) {
    let isRaining = true; 
}

console.log(isRaining);

