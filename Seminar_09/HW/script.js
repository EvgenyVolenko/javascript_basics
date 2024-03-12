// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputEl1 = document.querySelector('#from');
const spanEl = document.querySelector('span');

inputEl1.addEventListener('input', function (e) {
    spanEl.textContent = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageBtnEl = document.querySelector('button.messageBtn');
const divMassegeEl = document.querySelector('div.message');
messageBtnEl.addEventListener('click', function (e) {
    divMassegeEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    divMassegeEl.setAttribute('style', 'visibility:visible');
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться,
//  также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). 
//  Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector('form');
const formButton = formEl.querySelector('button');
const formsControl = formEl.querySelectorAll('.form-control');

const checkValue = function (data) {
    data.forEach(element => {
        element.addEventListener('blur', function (e) {
            element.value ? element.classList.remove('error') : element.classList.add('error');
        });
    });
};

checkValue(formsControl);

formEl.addEventListener('submit', function (e) {
    let checkValue = true;
    formsControl.forEach(element => {
        if (!element.value) {
            element.classList.add('error');
            checkValue = false;
        } else {
            element.classList.remove('error');
        }
    });

    if (checkValue) {
        alert('Данные отправлены');
    } else {
        console.log('Не все данные заполнены');
        e.preventDefault();
    }
});