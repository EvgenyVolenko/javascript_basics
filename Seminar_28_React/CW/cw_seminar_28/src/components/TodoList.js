// Создать компонент TodoList, который позволяет добавлять
// элементы в список дел через текстовое поле ввода. Список
// должен обновляться при добавлении нового дела.

import { useState } from "react";

function TodoList() {

    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (!currentTodo.trim()) {
            return;
        }
        setTodos([...todos, currentTodo]);
        setCurrentTodo('');
    };

    const handleInputChange = (e) => {
        setCurrentTodo(e.target.value);
        console.log(e);
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" value={currentTodo} onChange={handleInputChange} />
                <button type="submit">Добавить</button>
            </form>
            <ul>
                {todos.map((todo, index) => (<li key={index}>{todo}</li>))}
            </ul>
        </div>
    );
}

export default TodoList;