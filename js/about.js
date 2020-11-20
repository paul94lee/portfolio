window.addEventListener("load", init)
function init() {
    window.addEventListener("scroll", tfSwitch)
    function tfSwitch(e) {
        var body = document.querySelector('body');
        var direc = scrollY < body.offsetHeight / 2;
        titFoot(direc);
    }
    function titFoot(direc) {
        var tit = document.querySelector('.title');
        var nex = document.querySelector('.next');
        if (direc) {
            tit.style.display = "flex";
            nex.style.display = "none";
        }
        else {
            tit.style.display = "none";
            nex.style.display = "block";
        }
    };
    let goBack = document.querySelector('.backHome');
    var myStorage = window.localStorage;
    goBack.addEventListener('click', function (e) {
        e.preventDefault();
        myStorage.setItem('where', 1);
        location.href = './index.html';
    });
};