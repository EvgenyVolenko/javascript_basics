// Создайте компонент Box, который оборачивает содержимое,
// переданное в children, в div с определенными стилями
// (например, с рамкой и отступами).
// ● Используйте Box для оборачивания различных элементов
// (текста, картинок, других компонентов), чтобы
// продемонстрировать его переиспользуемость.

function Box({ children }) {
    return (
        <div style={{ color: 'red', height: 50 }}>{children}</div>
    );
}

export default Box;