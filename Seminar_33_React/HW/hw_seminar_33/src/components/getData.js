import { useDispatch } from "react-redux";
import { fetchTasks } from "../reducers/tasksSlice";

function GetData() {

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(fetchTasks());
    };

    return (
        <>
            <button onClick={handleButtonClick}>Загрузить список задач</button>
        </>
    );
}

export default GetData;