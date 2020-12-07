window.addEventListener('load', init)
function init() {
    var chanAni = document.querySelector('.chanAni');
    var aboutBtn = document.querySelector('.about a');






    try {
        aboutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            goUp();
            chanAni.style = "background-color:#282828";
            setTimeout(() => {

                location.href = 'about.html';
            }, 300);
        });
    } catch (err) {
    }

}
function goUp() {
    var chanAni = document.querySelector('.chanAni');
    chanAni.classList.add('goUp');
};
function goLeft() {
    var chanAni = document.querySelector('.chanAni');
    chanAni.classList.add('goLeft');
    chanAni.classList.remove('base');

    setTimeout(() => {
        chanAni.classList.remove('goLeft');
    }, 1000);
};
function goRight() {
    var chanAni = document.querySelector('.chanAni');
    chanAni.classList.add('goRight');
    chanAni.classList.remove('base');
};