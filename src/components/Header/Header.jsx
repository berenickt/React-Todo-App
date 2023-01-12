import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';

// **** 3. 테마 변경 | 5. 필터링
// props로 받아온 비구조화 할당으로 추출
export default function Header({ filters, filter, onFilterChange }) {
  // Context에 Custom Hook으로 갖고오면 자동으로 useContext를 호출하게 해둠
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      {/* Dark 테마 변경 */}
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      {/* 필터링한 값을 원하는 UI 요소로 출력 */}
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              // 헤더 버튼이 선택되었다면, selected 클래스를 추가
              className={`${styles.filter} ${filter === value && styles.selected}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
