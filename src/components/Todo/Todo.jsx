import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

// props로 받아온 todo 객체를 비구조화 할당으로 추출
export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? '완료' : '할일';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      {/* 웹 접근성 : Form ID와 Label의 for 속성 연결 */}
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === '완료'}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
