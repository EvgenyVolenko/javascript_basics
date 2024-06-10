// Создайте компонент MessagesList, который отображает список
// сообщений. Каждое сообщение должно иметь уникальный id и
// текст.
// ● Используйте проп key при рендеринге списка, чтобы
// обеспечить оптимальную производительность.

import { useState } from "react";

export function MessagesList() {
    const [messages, setMessages] = useState([
        { id: 'id1', text: "message 1" },
        { id: 'id2', text: "message 2" },
        { id: 'id3', text: "message 3" },
    ]);

    return messages.map((message) =>
        <div key={message.id}>
            Текст сообщения - {message.text}
        </div>);
}