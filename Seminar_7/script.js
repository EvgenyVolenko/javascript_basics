/* <div class="block">

</div>
Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute) */


const divMain = document.querySelector('div.block');
const divSlave = document.createElement('div');
divSlave.className = 'item';
divSlave.textContent = 'Элемент внутри';
divSlave.style.color = 'blue';
divSlave.style.border = 'solid 1px black';
divSlave.style.backgroundColor = '#f8f8f8';
divSlave.style.padding = '16px';
divMain.appendChild(divSlave);
divSlave.setAttribute('class', divSlave.classList + ' item_1');

// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

const text = document.querySelector('div.elem div.content p.text');
console.log(text.previousElementSibling);
console.log(text.parentElement);
console.log(document.querySelector('div.elem img'));
console.log(document.querySelector('div.elem img').parentElement.parentElement);

/* <div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */

console.log('');
let h2Elem = document.querySelector('h2.subtitle');

while (h2Elem.parentElement != null) {
    console.log(h2Elem.parentElement);
    h2Elem = h2Elem.parentElement;
}

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const divButton = document.querySelector('div.content__button');
const button = document.createElement('button');
button.textContent = 'Отправить';
divButton.appendChild(button);
button.addEventListener('click', (e) => {
    e.target.textContent = 'Текст отправлен';
});

/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным */

const formButton = document.querySelector('form button');
let formInput = document.querySelector('form input');
formButton.addEventListener('click', () => {
    if (formInput.value === '') {
        const formH2 = document.createElement('h2');
        formH2.textContent = 'Вы не заполнили поле ввода';
        formInput.parentElement.appendChild(formH2);
        formInput.style.border = 'solid red';
    }
});

