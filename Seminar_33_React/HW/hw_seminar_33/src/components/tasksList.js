import { useSelector } from "react-redux";

function TasksList() {

    const tasks = useSelector(state => state.tasks.array);
    const loading = useSelector(state => state.tasks.loading);

    return (
        <div>
            <h2>Tasks List</h2>
            {loading ? (
                <p>Загрузка...</p>
            ) : (
                <ul>
                    {tasks.map(item => (
                        <li key={item.id}>
                            <p>Task_id - {item.id}. Title - {item.title}</p>
                            <input type="checkbox" id="completed" name="completed" checked={item.completed} readOnly />
                            <label htmlFor="available">Completed</label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TasksList;