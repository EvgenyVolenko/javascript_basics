import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './ListPage';
import React from 'react';
import DetailPage from './DetailPage';

const list = [
    { id: 1, title: 'Ноутбук' },
    { id: 2, title: 'Десктоп' },
    { id: 3, title: 'Смартфон' }
];

const MainPage = () => (

    <Router>
        <div>
            <h1>Просмотр списка</h1>
            <Routes>
                <Route path="*" element={<ListPage list={list} />} />
                <Route path="/details/:id" element={<DetailPage list={list} />} />
            </Routes>
        </div>
    </Router>
);

export default MainPage;