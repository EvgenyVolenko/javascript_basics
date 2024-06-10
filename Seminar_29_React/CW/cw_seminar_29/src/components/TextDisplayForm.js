// Создать React компонент TextDisplayForm, который позволяет пользователю ввести
// текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию
// кнопки.
// ● Создание поля ввода (TextField)
// ○ Добавить TextField для ввода текста пользователем.
// ○ Установить метку (label) поля ввода на "Введите текст".
// ○ Сделать поле ввода на всю ширину (fullWidth).
// ● Разместить кнопку под полем ввода.
// ○ Установить текст кнопки на "Отобразить текст".
// ○ При нажатии на кнопку введенный текст должен отображаться под
// кнопкой.
// ● Отображение введенного текста
// ○ Использовать состояние для хранения введенного и отображаемого текста.
// ○ При нажатии на кнопку текст из поля ввода должен отображаться в
// стилизованной карточке (Card) под кнопкой.
// ● Стилизация отображаемого текста
// ○ Для отображения текста использовать компонент Typography с вариантом
// h5.

import { Button, TextField, Typography } from '@mui/material';
import { useState } from "react";

function TextDisplayForm() {

    const [text, setText] = useState('');
    const [textShowing, setTextShowing] = useState('');

    const clickHandler = (e) => {
        e.preventDefault();
        setTextShowing(text);
        setText('');
    }

    return (
        <>
            <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                id='outlined-basic'
                label='Введите текст'
                variant="outlined"
                style={{ marginTop: 10, marginBottom: 10 }} />
            <Button
                onClick={clickHandler}
                fullWidth
                variant="contained"
                style={{ marginBottom: 20 }}
            >
                Отобразить текст
            </Button>
            <Typography variant="h5">{textShowing}</Typography>
        </>
    );
}

export default TextDisplayForm;