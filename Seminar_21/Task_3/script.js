const articleList = document.getElementById('articleList');
const addArticleButton = document.getElementById('addArticleButton');

articlesData.forEach(el => {
    const articleItem = createArticle(el.title, el.content);
    articleList.append(articleItem);
});

function createArticle(title, content) {
    const articleItem = document.createElement('li');
    articleItem.classList.add('list-groupe-item');

    const articleTitle = document.createElement('h2');
    articleTitle.classList.add('md-3');
    articleTitle.textContent = title;

    const articleContent = document.createElement('p');
    articleContent.textContent = content;

    const editButton = document.createElement('button');
    editButton.textContent = 'Редактировать';
    editButton.classList.add('btn', 'btn-warning');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('btn', 'btn-danger');

    articleItem.append(articleTitle);
    articleItem.append(articleContent);
    articleItem.append(editButton);
    articleItem.append(deleteButton);

    return articleItem;
}

addArticleButton.addEventListener('click', function (e) {
    const newArticle = {
        title: 'Новая статья',
        content: 'Введите новый текст статьи'
    }

    const articleItem = createArticle(newArticle.title, newArticle.content);
    articleList.append(articleItem);
});

articleList.addEventListener('click', function (e) {
    if (e.target.textContent == 'Удалить') {
        const articleItem = e.target.closest('li');
        articleItem.remove();
    }

    if (e.target.textContent == 'Редактировать') {
        const articleItem = e.target.closest('li');
        const articleTitle = articleItem.querySelector('h2');
        const articleContent = articleItem.querySelector('p');

        const newTitle = prompt('Введите новый заголовок', articleTitle.textContent);
        const newContent = prompt('Введите новое содержимое', articleContent.textContent);

        if (newTitle !== null && newContent !== null) {
            articleTitle.textContent = newContent;
            articleContent.textContent = newContent;
        }
    }
});