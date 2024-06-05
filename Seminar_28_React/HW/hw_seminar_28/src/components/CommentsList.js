// Задание: Список комментариев с удалением.

// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

// Можно использовать заготовку:

import React, { useState } from 'react';


function CommentsList() {

    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const delCommentHTML = (e) => {
        const itemKey = e.target.parentElement.getAttribute('keyValue');
        delCommentList(itemKey);
        e.target.parentNode.remove();
        console.log(comments);
    }

    const delCommentList = (id) => {
        for (let i = 0; i < comments.length; i++) {

            if (comments[i].id === Number(id)) {
                comments.splice(i, 1);
            }
        }
    }

    return comments.map((comment) =>
        <div key={comment.id} keyValue={comment.id}>
            <div>Id - {comment.id}. Комментарий - {comment.text}</div>
            <button onClick={delCommentHTML}>Удалить комментарий</button>
        </div>
    );

}

export default CommentsList;