// 1. Создать функциональный компонент Greeting, который выводит
// простое приветствие, например, <h1>Привет, React!</h1>.
// 2. Импортировать компонент Greeting в App.js и использовать его
// внутри компонента App.
// 3. Запустить приложение и убедиться, что приветствие отображается на
// странице.

function Greeting() {

    const time = new Date().getHours();

    let greeting = '';

    if (time > 4 && time < 10) {
        greeting = 'Доброе утро';
    } else {
        greeting = 'Добрый вечер';
    }

    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    );
}

export default Greeting;