// Создайте маленькое приложение со страницей списка
// (ListPage) и страницей деталей (DetailPage).
// ● На ListPage отобразите список элементов (например, статей или
// продуктов), где каждый элемент является ссылкой на
// DetailPage, содержащую детальную информацию об элементе.
// Используйте react-router-dom для настройки маршрутизации.
// ● На DetailPage используйте useParams для извлечения
// параметра из URL (например, ID элемента) и отобразите
// детальную информацию об элементе.

import { Link } from "react-router-dom";
import React from 'react';

function ListPage({ list }) {
    console.log('2');

    return (
        <div>
            <h1>Наш список</h1>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <Link to={`/details/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListPage;



