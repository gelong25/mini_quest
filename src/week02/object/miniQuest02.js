/*
다음 요구사항을 만족하는 Person 클래스를 만들고 그 인스턴스 생성하기 

1.  Person  클래스는 constructor를 사용해서 이름(name)과 나이(age)를 초기화해야 함 
2. Person 클래스는 greet라는 메서드를 가지고 있음 
3. greet 메서드는 "Hello, my name is [name] and I am [age] years old."를 
콘솔에 출력해야 함 
4. [name], [age]는 해당 인스턴스의 속성값으로 대체 돼야 함 
5. 이름이 Jane Doe고 나이가 25살인 Person 인스턴스 생성하기
6. 생성한 인스턴스의 greet 메서드를 호출해 메시지 출력하기 
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person('Jane Doe', 25);
person.greet();  


