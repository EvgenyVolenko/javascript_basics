// Развернуть новый проект с использованием create-react-app.
// Создать компонент Message, отображающий переданный ему props текст.
// Стилизовать компоненты через css (при желании можно использовать less или sass).
// Дополнительное задание: Установить расширение React Devtools.

function Message(props) {
    return (
        <div className="App-header">
            <p>My_message - {props.message}</p>
        </div>
    );
}

export default Message;