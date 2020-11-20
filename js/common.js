window.addEventListener('load', init)
function init() {
    var chanAni = document.querySelector('.chanAni');
    var aboutBtn = document.querySelector('.about a');







    aboutBtn.addEventListener('click', function (e) {

        e.preventDefault();
        chanAni.classList.add('rightActive');
        chanAni.style = "background-color:#282828";
        setTimeout(() => {
            window.scrollTo(0, 0);

        }, 400);
        setTimeout(() => {
            location.href = 'about.html';
            // chanAni.classList.remove('rightActive');

        }, 1500);

    });
}
function up() {
   console.log('up')
};
function left() {
    console.log('left')
 };