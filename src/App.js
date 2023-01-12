import { useState } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

// **** 5. 아이템 필터링
const filters = ['전체', '할일', '완료'];

/** Todo 앱
 * 1. 전체 아이템 보여주기
 * 2. 아이템 추가
 * 3. 아이템 삭제
 * 4. 아이템 체크박스
 * 5. 아이템 필터링
 * 6. 다크모드 지원
 * 7. 아이템 저장하기
 */
function App() {
  const [filter, setFilter] = useState(filters[0]); // 아이템 필터링

  return (
    // **** 6. 다크모드 지원
    <DarkModeProvider>
      {/* **** 5. 아이템 필터링 */}
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />

      {/* **** 1. 전체 아이템 보여주기 */}
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
