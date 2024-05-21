function addMetadata(book, metadataType, data) {
    if (book[metadataType]) {
        book[metadataType].push(data);
    } else {
        book[metadataType] = [data];
    }
}

function getMetadata(book, metadataType) {
    return book[metadataType];
}

const book = {
    title: "1984",
    author: "George Orwell"
};

const rewiewSymbol = Symbol('rewiew');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

addMetadata(book, rewiewSymbol, "Отличная книга о дистопии!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, ratingSymbol, 4);
addMetadata(book, tagsSymbol, "distopia");

console.log(getMetadata(book, rewiewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagsSymbol));

console.log(book);