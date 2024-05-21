const lessons = new Map();
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

const ivanLessons = new Set().add('Математика')
    .add('История');

const students = new Map();

students.set("Иван", ivanLessons);

console.log(`Преподаватель по Математике: ${lessons.get('Математика')}`);
console.log(`Уроки Ивана: ${[...students.get('Иван')]}`);
console.log(students);