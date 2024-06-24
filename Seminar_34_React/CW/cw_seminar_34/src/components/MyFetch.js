import '../App.css'
import { useState, useEffect } from 'react';

function ChuckJoke() {

    const url = 'https://api.chucknorris.io/jokes/random';

    const [joke, setJoke] = useState('');
    const [error, setError] = useState(false);
    const [jokes, setJokes] = useState([]);

    function clickHandler() {
        getCNJokes();
    }

    async function getCNJokes() {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Запрос завершился со статусом: ${response.status}`);
            }

            const result = await response.json();
            setJoke(result);
            setJokes([...jokes, joke]);
        } catch (error) {
            setError(true);
            console.warn(error);
        }
    }

    useEffect(() => {
        getCNJokes();
    }, []);

    return (
        <div className='App'>
            <h2>Шутки про Чака Норриса!</h2>
            {error && (
                <>
                    <h2>Ошибка получения шутки!!!</h2>
                    <button onClick={clickHandler}>Попробовать еще раз</button>
                </>
            )}
            {joke && (
                <div key={joke.id}>
                    <p>Шутка: {joke.value}</p>
                    <button onClick={clickHandler}>Новая шутка</button>
                </div>
            )}
            {jokes.map((item) => (
                <div key={item.id}>
                    <p>{item.value}</p>
                </div>
            ))}
        </div>
    );
}

export default ChuckJoke;