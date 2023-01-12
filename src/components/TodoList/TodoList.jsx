import React, { useState } from 'react';
import { useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage); // 모든 데이터를 갖고있는 state

  // **** Todo 추가, 수정, 삭제
  // 추가 : 기존 todos에 새 todo를 업데이트
  // 수정 : 기존 todos.id가 업데이트할려는 id와 동일하다면 업데이트
  // 삭제 : 기존 todos.id가 삭제할려는 id와 동일하지 않다면 삭제
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

  // **** 아이템 저장하기 : Local Storage에 저장
  // 초기값(todos)을 전달해야 한 번만 실행됨
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // **** 필터링된 아이템 보여주기
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      {/* **** 1. 전체 아이템 보여주기 */}
      <ul className={styles.list}>
        {/* **** 필터링된 아이템 보여주기 */}
        {filtered.map((item) => (
          // **** 개별 아이템 보여주기
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>

      {/* **** 2. 아이템 추가 */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

// **** 초기화하는 함수
function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage 읽음');

  // Local Storage에서 todos를 가져옴
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

// **** 필터링하는 함수
function getFilteredItems(todos, filter) {
  if (filter === '전체') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
