"use strict";
window.addEventListener('DOMContentLoaded', function () {

    var x = 0;
    var bln = false;
    var scrollBln = true;
    var num = 0;

    var target = document.querySelectorAll('text');
    var imgTarget = document.querySelectorAll('li');
    var imgMove = document.querySelector('.move');
    var titImg = document.querySelector('.tit');
    var intro = document.querySelector('.intro');
    var main = document.querySelector('.main');
    var front = document.querySelector('.front');
    var second = document.querySelector('.second');
    var nav = document.querySelector('.nav p');

    var titArr = ['soodam', 'liability', 'UZEN', 'soodam', 'liability'];
    var imgArr = ['img/liability.jpg', 'img/UZENvisual.jpg', 'img/soodam.jpg', 'img/liability.jpg', 'img/soodam.jpg'];

    var introArr = ['안녕하세요 ', '제 ', '이름은 ', '이재욱 ', '입니다.', '포트폴리오를 ', '보려고 ', '들어오셨죠?', '이제', '곧 ', '보실 수 ', '있습니다.', '3', '2', '1'];


    var forNavArr = ['about.html#pro', 'about.html#award'];

    var dragClick = true;
    //인트로 여부 및 실행
    if (localStorage.where != 1) {
        intro.classList.add('active');
        start1(0, 600)
        function start1(counter, time) {
            if (counter < introArr.length) {
                setTimeout(function () {
                    switch (introArr[counter]) {
                        case '안녕하세요 ':
                            time = 250;
                            front.style = 'font-size:80px                ';
                            front.textContent = introArr[counter];

                            break;

                        case '이름은 ':
                            second.style = 'font-size:40px';
                            second.textContent += introArr[counter];
                            break;
                        case '이재욱 ':
                            time = 400;

                            second.textContent = '';
                            intro.style.background = "#fff";

                            front.style = 'font-size:150px;color:#000;transition:.2s;';
                            for (var i = 0; i < introArr[counter].length; i++) {

                                front.textContent = introArr[counter]; introArr[counter][i];


                            }
                            break;
                        case '입니다.':

                            second.style = 'display:block;font-size:50px;color:#000;    vertical-align:baseline;transition:.2s;';
                            second.textContent = introArr[counter];
                            break;

                        case '제 ': time = 250;
                            second.textContent = '';
                            intro.style.background = "#000";
                            front.style = 'font-size:40px;color:#fff; transition:.1s;';
                            second.style = 'font-size:40px;color:#fff;vertical-align: middle;';
                            front.textContent = introArr[counter];
                            break;
                        case '포트폴리오를 ':
                            time = 250;
                            second.textContent = '';
                            intro.style.background = "#000";
                            front.textContent = '';
                            second.style = 'display:inline-block;font-size:40px;color:#fff;vertical-align: middle;';
                            front.style = 'font-size:40px';
                            second.textContent = introArr[counter];
                            break;
                        case '보려고 ':
                            front.style = 'font-size:40px';
                            second.textContent += introArr[counter];

                            break;

                        case '이제 ':
                            second.textContent = '';
                            intro.style.background = "#000";
                            front.style = 'font-size:40px;color:#fff;transition:.2s;';
                            second.style = 'font-size:40px;color:#fff;';
                            front.textContent = introArr[counter];
                            break;
                        case '곧 ':
                            front.style = 'font-size:40px';
                            second.textContent += introArr[counter];
                            break;
                        case '보실 수 ':
                            front.style = 'font-size:40px';
                            second.textContent += introArr[counter];
                            break;

                        case '1':
                        case '3':
                            time = 600;
                            second.textContent = '';
                            front.style = 'font-size:0px;color:#fff; transform: scale(2);';
                            front.textContent = introArr[counter];
                            intro.style.background = "#000";
                            front.classList.add('count');
                            break;
                        case '2':
                            time = 600;
                            front.classList.remove('count');
                            front.textContent = '';
                            second.textContent = introArr[counter];

                            second.style = 'font-size:1000px; color:#000;transform: scale(2);';

                            intro.style.background = "#fff";
                            second.classList.add('count');
                            break;

                        default:
                            intro.style.background = "#000";
                            front.style = 'font-size:40px;color:#fff; transition: 0s;';
                            front.textContent = introArr[counter];
                            second.textContent = '';
                    }
                    counter++;
                    start1(counter, time);
                }, time);
            }
        }

        setTimeout(() => {
            intro.classList.remove('active');
            main.classList.add('active');
            change();
        }, 6300);

    }
    else {
        main.classList.add('active');
        change();
        localStorage.setItem('where', 0);
    }


    //컨텐츠 전환
    function change() {
        startSpin(0);
        function startSpin(spinCont) {
            if (spinCont < 90) {
                setTimeout(function () {

                    rightRota();
                    imgRightRota();
                    startSpin(spinCont);
                }, spinCont / 2.5);
                if (spinCont === 0) {
                    titImg.classList.remove('active');
                    target[2].firstElementChild.setAttribute('fill', '#1f1f1f');
                }
                if (spinCont === 89) {
                    titImg.classList.add('active');
                    target[2].firstElementChild.setAttribute('fill', '#fff');
                }
                spinCont++;
            }
        }
        function mouseUp(e) {

            bln = false;
            if (num > 265) {
                for (var n = num; n < 530; n += 30) {
                    setTimeout(() => {
                        rightRota();
                        imgRightRota();
                    }, (n * 1 - 265) / 2);
                };
            }
            else if (0 < num && num < 265) {
                for (var n = num; n > 0; n -= 30) {
                    setTimeout(() => {
                        leftRota();
                        imgleftRota();
                    }, (n * 1) / 2);
                };
            }
            if (0 > num && num > -265) {
                for (var m = num; m < 0; m += 30) {

                    setTimeout(() => {
                        rightRota();
                        imgRightRota();

                    }, (m * -1) / 2);
                };
            }
            else if (num < -265) {
                for (var m = num; m > -530; m -= 30) {

                    setTimeout(() => {
                        leftRota();
                        imgleftRota();
                    }, (m * -1 - 265) / 2);
                };
            }
            setTimeout(() => {
                target[2].firstElementChild.setAttribute('fill', '#fff');

            }, 150);
            titImg.classList.add('active');

        }
        function mouseCalStart(e) {
            dragClick = true;
            bln = true;
            titImg.classList.remove('active');
            x = e.clientX;
        }






        function wheel(e) {

            if (scrollBln) {
                scrollBln = false;
                if (e.wheelDelta > 0) {
                    titImg.classList.remove('active');
                    for (var n = num; n < 530; n += 30) {

                        setTimeout(() => {
                            rightRota();
                            imgRightRota();
                        }, n / 2);

                    };
                    setTimeout(() => {
                        titImg.classList.add('active');
                    }, 265);
                }
                else {
                    titImg.classList.remove('active');
                    for (var n = num; n < 530; n += 30) {

                        setTimeout(() => {
                            leftRota();
                            imgleftRota();
                        }, n / 2);

                    };
                    setTimeout(() => {
                        titImg.classList.add('active');
                    }, 265);
                }
                setTimeout(() => {
                    scrollBln = true;
                }, 500);
            }
        };
        window.addEventListener('mousedown', mouseCalStart);
        window.addEventListener('mouseup', mouseUp);
        window.addEventListener('mousemove', function (e) {

            dragClick = false;

            if (bln) {
                target[2].firstElementChild.setAttribute('fill', '#1f1f1f');
                if (x < e.clientX) {
                    rightRota();
                    imgRightRota();
                }
                if (x > e.clientX) {
                    imgleftRota();
                    leftRota();
                };
                x = e.clientX;
            }

        });

        window.addEventListener('touchstart', mouseCalStart);
        window.addEventListener('touchend', mouseUp);
        window.addEventListener('touchmove', function (e) {

            dragClick = false;

            if (bln) {
                target[2].firstElementChild.setAttribute('fill', '#1f1f1f');
                if (x < e.clientX) {
                    rightRota();
                    imgRightRota();
                }
                if (x > e.clientX) {
                    imgleftRota();
                    leftRota();
                };
                x = e.clientX;
            }




        });







        window.addEventListener('wheel', wheel);


    };
    function leftRota() {
        num -= 30;
        if (num < -530) {
            titArr.push(titArr.slice(0, 1)[0]);
            titArr.shift();
            target.forEach(function (v, key) {
                v.firstElementChild.textContent = titArr[key];

            });

            imgArr.push(imgArr.slice(0, 1)[0]);
            imgArr.shift();
            imgTarget.forEach(function (v, key) {
                v.firstElementChild.setAttribute('src', imgArr[key]);
            });
            imgMove.style = "transform:translateX(" + 0 + "%)";
        }
        target.forEach(function (v, key) {
            v.setAttribute('x', num);
            if (num < -530) {
                num = 0;
                v.setAttribute('x', 0);
            }
        });
    };
    function rightRota() {
        num += 30;
        if (num > 530) {
            titArr.unshift(titArr.slice(4, 5)[0]);
            titArr.pop();
            target.forEach(function (v, key) {
                v.firstElementChild.textContent = titArr[key];
            });
            imgArr.unshift(imgArr.slice(4, 5)[0]);
            imgArr.pop();
            imgTarget.forEach(function (v, key) {
                v.firstElementChild.setAttribute('src', imgArr[key]);
            });
            imgMove.style = "transform:translateX(" + 0 + "%)";

        }

        target.forEach(function (v, key) {
            v.setAttribute('x', num);
            if (num > 530) {
                num = 0;
                v.setAttribute('x', 0);
            }
        });
    };
    function imgleftRota() {
        imgMove.style = "transform:translateX(" + num / 18 + "%)";
        if (num < -530) {
            num = 0;
            imgMove.style = "transform:translateX(" + 0 + "%)";
        }


    }
    function imgRightRota() {

        imgMove.style = "transform:translateX(" + num / 18 + "%)";
        if (num > 530) {
            imgMove.style = "transform:translateX(" + 0 + "%)";
        }

    };

    titImg.addEventListener('click', function (e) {
        if (!dragClick) return;
        var go = titArr[2];
        var chanAni = document.querySelector('.chanAni');
        var pageColor = {
            UZEN: '#fa5400',
            liability: '#000',
            soodam: '#d74545'
        };
        chanAni.style = 'background-color:' + pageColor[go] + ';';

        goUp();

        setTimeout(() => {
            localStorage.setItem('pageName', go);
            location.href = 'description.html';
        }, 500);
    });




    nav.addEventListener('click', function () {

        var chanAni = document.querySelector('.chanAni');
        chanAni.style = 'background-color:#282828;';

        goUp();
        setTimeout(() => {
            location.href = 'about.html';
        }, 500);

    });

    var imgs = ['./img/soodam-cover.jpg', './img/uzen-cover.jpg', './img/liability-cover.jpg'];
    for (var i = 0; i < imgs.length; i++) {
        var creative = document.createElement('img');

        creative.src = imgs[i];
    }
});