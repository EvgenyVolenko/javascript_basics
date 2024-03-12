const data = JSON.parse(dataInfo);
const section = document.querySelector('div.dogs__gallery');
console.log(section);

data.forEach(element => {
    const item = document.createElement('div');
    const aImg = document.createElement('a');
    const aName = document.createElement('a');
    const pBirthday = document.createElement('p');
    const img = document.createElement('img');

    item.classList.add(element.item_class);
    aImg.href = element.url;
    aName.href = element.url;
    aName.textContent = element.item_name;
    pBirthday.textContent = element.item_birthday;
    img.src = element.img_src;
    img.setAttribute('alt', element.img_alt);

    aImg.appendChild(img);
    item.appendChild(aImg);
    item.appendChild(aName);
    item.appendChild(pBirthday);
    section.appendChild(item);
});