import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const MyRoutes = () => (

    <BrowserRouter>

        <ul>
            <li>
                <Link to="/about">О нас</Link>
            </li>
            <li>
                <Link to="/">Главная страница</Link>
            </li>
        </ul>


        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={< AboutPage />} />
        </Routes>
    </BrowserRouter>
);

export default MyRoutes;
