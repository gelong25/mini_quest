import { useState } from 'react';
import './TodoApp.css';
import App from '../App'; 

function TodoApp() {
  // 일정 개수 상태 관리를 위한 상태 변수 : 초기값 0 
  const [count, setNumber] = useState(0);

  // 할 일 개수 증가 및 taskAdd 함수 호출 
  const taskCount = () => {
    setNumber(count + 1);
    taskAdd();
  };

  // DOM을 조작해서 할 일 요소들 생성 
  const taskAdd = () => {
    const todoList = document.querySelector('.todo-list');
    
    // 새 div 요소 생성 : 체크박스, 텍스트 input, 삭제 버튼 
    const newTask = document.createElement('div');
    newTask.innerHTML = `
      <div class='todo-item'>
        <input class='checkbox' type='checkbox'>
        <input class='input-text' type='text' placeholder='할 일을 입력하세요'>
        <button class='delete-button'>X</button>
      </div>
    `;

    // 삭제 버튼 클릭 시 실행 
    const deleteButton = newTask.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        // 할 일 요소 삭제 
        newTask.remove();
        // 남은 할 일 개수 업데이트 
        const todoItems = document.querySelectorAll('.todo-item');
        setNumber(todoItems.length);
    });
    // 할 일 요소들을 DOM에 추가 
    todoList.appendChild(newTask);
  };

  // 렌더링 부분 
  return (
    <>
      <h1 className='title'>Today's Task</h1>
      
      <div className="task-header">
        <h2 className='left-task'>left task : {count}</h2>
        <button className="add-button" onClick={taskCount}>+</button>
      </div>
      
      <div className="todo-list">
      </div>
    </>
  );
}

export default TodoApp;