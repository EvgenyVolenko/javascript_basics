import React from "react";
import { useParams } from "react-router-dom";

function DetailPage({ list }) {
    console.log('3');

    const { id } = useParams();
    const item = list.find(item => item.id === parseInt(id));

    if (!item) {
        return <div>Элемент списка не найден</div>;
    }

    return (
        <div>
            <h2>{item.id}</h2>
            <p>{item.title}</p>
        </div>
    );
}

export default DetailPage;