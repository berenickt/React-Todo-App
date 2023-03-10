import React, { useState } from 'react';
import styles from './AddTodo.module.css';
import { AiOutlinePlus } from 'react-icons/ai';

// ๐ ๊ณ ์ ํ ์์ด๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ uuid : uuidv4()๋ฅผ ํธ์ถํ  ๋๋ง๋ค ๊ณ ์ ํ id๋ฅผ ์์ฑํด์ค
import { v4 as uuidv4 } from 'uuid';

// ****  2. ์์ดํ ์ถ๊ฐ
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value); // ์ ์ ๊ฐ ์ค์ ๋ก ๋๋ฅธ๊ฑฐ
  const handleSubmit = (e) => {
    e.preventDefault(); // ํ์ด์ง ์๋ก๊ณ ์นจ ๋ฐฉ์ง

    // **** ๋น ๋ฌธ์์ด์ ์๋ ฅํ๋ฉด ์ถ๊ฐ๋์ง ์๊ฒ ๋ง๋ค๊ธฐ
    // trim() : ๋ฌธ์์ ๊ณต๋ฐฑ ์ ๊ฑฐ
    if (text.trim().length === 0) return;

    onAdd({ id: uuidv4(), text, status: 'ํ ์ผ' });
    setText(''); // todo ์์ดํ์ ์ถ๊ฐํ ๋ค ์ด๊ธฐํ
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="ํ  ์ผ์ ์๋ ฅํ์ธ์."
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>
        <AiOutlinePlus />
      </button>
    </form>
  );
}
