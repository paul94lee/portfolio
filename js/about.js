window.addEventListener("load", init)

function init() {

    var awardPo = document.querySelector('.awards');
    var awardRight = document.querySelectorAll('.goRight')
    var awardLeft = document.querySelectorAll('.goLeft');
    var title = document.querySelector('.title');
    var awardHeight;
    var chanAni = document.querySelector('.chanAni');
    chanAni.style.background = "#282828"
    goRight();
    setTimeout(() => {
        title.style.display='flex';
    }, 1);


    //titFoot 전환 
    window.addEventListener("scroll", tfSwitch)

    function tfSwitch(e) {
        var body = document.querySelector('body');
        var direc = scrollY < body.offsetHeight / 2;
        titFoot(direc);
    }

    function titFoot(direc) {
        var tit = document.querySelector('.title');
        var conMe = document.querySelector('.contactMe');
        if (direc) {
            tit.style.display = "flex";
            conMe.style.display = "none";
        } else {
            tit.style.display = "none";
            conMe.style.display = "block";
        }
    };

    //메인으로 돌아가기
    let goBack = document.querySelector('.backHome');
    var myStorage = window.localStorage;
    goBack.addEventListener('click', function (e) {
        e.preventDefault();
        myStorage.setItem('where', 1);
        location.href = './index.html';
    });

    //award scroll 이벤트
    window.addEventListener('scroll', awardAni);

    function awardAni() {
        awardHeight = window.pageYOffset + awardPo.getBoundingClientRect().top;
        if (awardHeight < window.scrollY + window.innerHeight) {
            var leng = window.scrollY + window.innerHeight - awardHeight;
            var persent = Math.floor(leng / 25) / 15;
            awardRight.forEach(function (value) {
                value.style.transform = 'translateX(calc(-10% + ' + persent + '%)) rotate(3deg)';
                console.log(persent)
            });
            awardLeft.forEach(function (value) {
                value.style.transform = 'translateX(calc(-10% + ' + -persent + '%)) rotate(-3deg)';
                console.log(persent)
            });



        }
    };


};