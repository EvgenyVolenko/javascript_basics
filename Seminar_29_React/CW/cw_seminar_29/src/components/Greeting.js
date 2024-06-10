// Создайте функциональный компонент Greeting, который
// принимает проп name и отображает сообщение Привет, {name}!.
// ● Используйте компонент Greeting в вашем основном компоненте
// App, передавая разные имена в качестве пропсов.

function Greeting(props) {
    return (
        <div>
            <h2>Привет, {props.name}!!!</h2>
        </div>
    );
}

export default Greeting;