//주어진 코드를 early-return을 적용하여 예외처리 적용하기 


const applyDiscount = (age) => {
    if (age < 20) {
        return '20% 미성년자 할인이 적용됩니다.';
    }
    if (age < 0) {
        return '올바른 나이를 입력해주세요.'; 
    }
    return '할인이 적용되지 않습니다.'; 
}

console.log(applyDiscount(20));
console.log(applyDiscount(16));
console.log(applyDiscount(-1));
