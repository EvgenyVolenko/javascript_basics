// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import { TextField } from '@mui/material';
import { useState } from "react";

function TemperatureConverter() {

    const [tempC, setTempC] = useState('');
    const [tempF, setTempF] = useState('');

    const [nameError, setNameError] = useState(false);

    const funcSetTempF = (value) => {

        if (value && !isNaN(value)) {
            setTempF(1.8 * value + 32);
            setTempC(value);
            setNameError(false);
        } else {
            setNameError(true);
            setTempF('');
            setTempC('')
        }
    }

    const funcSetTempC = (value) => {
        if (value && !isNaN(value)) {
            setTempC((value - 32) * 5 / 9);
            setTempF(value);
            setNameError(false);
        } else {
            setTempC('');
            setTempF('');
            setNameError(true);
        }
    }

    return (
        <>
            <TextField
                onChange={(e) => funcSetTempF(e.target.value)}
                value={tempC}
                required
                error={nameError}
                helperText={nameError ? "Нужно ввести числовое значение" : ""}
                id="outlined-basic"
                label="Укажите температуру в градусах Цельсия"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                style={{ marginTop: 10, marginBottom: 10, width: 500, marginRight: 15 }}
            />
            <TextField
                onChange={(e) => funcSetTempC(e.target.value)}
                value={tempF}
                required
                error={nameError}
                helperText={nameError ? "Нужно ввести числовое значение" : ""}
                id="outlined-basic"
                label="Укажите температуру в градусах Фаренгейта"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                style={{ marginTop: 10, marginBottom: 10, width: 500 }}
            />
        </>
    );
}

export default TemperatureConverter;