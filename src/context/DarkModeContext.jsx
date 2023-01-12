import { createContext, useContext, useEffect, useState } from 'react';

// context 생성
const DarkModeContext = createContext();

// **** 6. 다크모드 지원
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    // localStorage에 theme가 dark이거나 window의 테마가 dark이면 다크모드로 설정되었으면
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

// custom Hook으로 useDarkMode라고 하면, 내부적으로 DarkModeContext를 호출해줌
// 이러면 그냥 사용하려는 곳에서 useContext쓸 필요없이 useDarkMode라고만 하면 됨
export const useDarkMode = () => useContext(DarkModeContext);
