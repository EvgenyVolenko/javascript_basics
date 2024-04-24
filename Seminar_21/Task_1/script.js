const updateWindowSize = () => {
    const widthEl = window.innerWidth;
    const heightEl = window.innerHeight;

    const windowSizeElement = document.querySelectorAll('.window-size');

    windowSizeElement[0].textContent = widthEl;
    windowSizeElement[1].textContent = heightEl;
}

window.addEventListener('load', updateWindowSize);
window.addEventListener('resize', updateWindowSize);

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'Text';
});

const goBack = document.getElementById('goBack');
goBack.addEventListener('load', function (e) {
    window.history.back();
});

const goForward = document.getElementById('goForward');
goBack.addEventListener('load', function (e) {
    window.history.forward();
});