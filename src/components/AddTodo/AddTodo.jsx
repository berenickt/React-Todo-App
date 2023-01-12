import React, { useState } from 'react';
import styles from './AddTodo.module.css';
import { AiOutlinePlus } from 'react-icons/ai';

// 📝 고유한 아이디 라이브러리 uuid : uuidv4()를 호출할 때마다 고유한 id를 생성해줌
import { v4 as uuidv4 } from 'uuid';

// ****  2. 아이템 추가
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value); // 유저가 실제로 누른거
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지

    // **** 빈 문자열을 입력하면 추가되지 않게 만들기
    // trim() : 문자의 공백 제거
    if (text.trim().length === 0) return;

    onAdd({ id: uuidv4(), text, status: '할일' });
    setText(''); // todo 아이템을 추가한 뒤 초기화
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="할 일을 입력하세요."
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>
        <AiOutlinePlus />
      </button>
    </form>
  );
}
