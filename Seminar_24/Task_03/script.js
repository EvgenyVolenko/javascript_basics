const divElements = Array.from(document.querySelectorAll('div'));

const activeDivs = divElements.filter(el => el.hasAttribute('data-active'));
// const activeDivs = divElements.filter(el => el.dataset.active);

activeDivs.forEach(element => {
    console.log(element);
});