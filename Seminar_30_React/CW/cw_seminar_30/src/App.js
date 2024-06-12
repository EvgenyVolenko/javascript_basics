import './App.css';
import List from './components/List';

function App() {
  const liElements = [1, 2, 3, 4, 5, 6, 7];
  const render = (item, index) => {
    const style = { color: index % 2 === 0 ? 'blue' : 'red' };
    return (
      <div style={style}>
        {item} - Уникальный стиль
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Изучаем реакт</h1>
      <List listItems={liElements} render={render} />
    </div>
  );
}

export default App;
