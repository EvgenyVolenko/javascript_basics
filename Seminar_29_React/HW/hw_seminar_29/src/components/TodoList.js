// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import { toDoList } from './data';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CardItem } from './Card&Other';

function TodoList() {

    const [todos, setTodos] = useState(toDoList);
    const [currentTodo, setCurrentTodo] = useState('');

    const idGenerator = () => {
        let newId = 0;
        todos.forEach(el => {
            if (el.id > newId) {
                newId = el.id;
            }
        });
        return ++newId;
    }

    const addTodo = (e) => {
        e.preventDefault();
        if (!currentTodo.trim()) {
            return;
        }
        setTodos([...todos, { id: idGenerator(), content: currentTodo }]);
        setCurrentTodo('');
    };

    const handleInputChange = (e) => {
        setCurrentTodo(e.target.value);
    };

    const delTodo = (idToRemove) => {
        setTodos(todos.filter((todo) => todo.id !== idToRemove));
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <TextField
                    onChange={handleInputChange}
                    value={currentTodo}
                    id="outlined-basic"
                    label="Введите текст задания"
                    variant="outlined"
                    style={{ marginTop: 10, marginBottom: 10, width: 500, marginRight: 15 }}
                />
                <Button
                    type='submit'
                    variant="contained"
                    style={{ marginTop: 18 }}>
                    Добавить задание
                </Button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} >
                        <CardItem content={todo.content} id={todo.id} delTodoFunc={delTodo} />
                    </li>))}
            </ul>
        </div>
    );
}

export default TodoList;