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



    var titArr = ['react Web', 'animations', 'UZEN', 'soodam', 'liability'];
    var imgArr = ['img/liability.jpg', 'img/UZENvisual.jpg', 'img/soodam.jpg', 'img/liability.jpg', 'img/liability.jpg'];

    String.prototype.toKorChars = function () {
        var cCho = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
            cJung = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
            cJong = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], cho, jung, jong;
        var str = this,
            cnt = str.length,
            chars = [],
            cCode;

        for (var i = 0; i < cnt; i++) {
            cCode = str.charCodeAt(i);
            //빈칸인 경우
            if (cCode == 32) {
                chars.push(" ");
                continue;
            } // 한글이 아닌 경우 주로 영어
            if (cCode < 0xAC00 || cCode > 0xD7A3) {
                chars.push(str.charAt(i)); continue;

            }
            cCode = str.charCodeAt(i) - 0xAC00;

            jong = cCode % 28;
            // 종성 

            jung = ((cCode - jong) / 28) % 21

            // 중성 
            cho = (((cCode - jong) / 28) - jung) / 21
            // 초성 
            console.log(cho, jung, jong)
            //기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨 
            // chars.push(cCho[cho], cJung[jung]); 
            // if (cJong[jong] !== '') { 
            //     chars.push(cJong[jong]); 
            //     } 


            //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
            chars.push(cCho[cho]);
            chars.push(String.fromCharCode(44032 + (cho * 588) + (jung * 28)));
            if (cJong[jong] !== '') {
                chars.push(String.fromCharCode(44032 + (cho * 588) + (jung * 28) + jong));
            }

        }
        return chars;
    }


    //타이핑할 문장
    var result1 = "저는 신입 Front-end 개발자 이재욱입니다.";
    var typeing1 = [];
    result1 = result1.split(''); // 한글자씩자름

    //각글자 초성,중성,종성으로 나눔
    for (var i = 0; i < result1.length; i++) {
        typeing1[i] = result1[i].toKorChars();
    }
    //출력할 엘리먼트요소 가져옴 
    var resultDiv1 = document.getElementsByClassName("result1")[0];

    //
    var text = "";
    var i = 0;
    var j = 0;

    //총글자수
    var imax1 = typeing1.length;
    resultDiv1.classList.add("cursor");
    //setInterval을 이용해 반복적으로 출력 
    setTimeout(() => {
        var inter = setInterval(typi, 100);
        function typi() {
            //글자수만큼 반복후 종료 

            if (i <= imax1 - 1) {
                //각 글자가 초성 중성 종성 순서대로 추가되도록 
                var jmax1 = typeing1[i].length;
                resultDiv1.innerHTML = text + typeing1[i][j];

                j++;
                if (j == jmax1) {
                    text += "<span>" + typeing1[i][j - 1] + "</span>";//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
                    i++;
                    j = 0;
                }
            } else {

                clearInterval(inter);
                text = "";
                i = 0;
                j = 0;
                setTimeout(function () {
                    resultDiv1.classList.remove("cursor");

                }, 400);
            }

        }
    }, 1000);
    // setTimeout(() => {

    //     var texts = document.querySelectorAll('.result1 span');
    //     for (var i = texts.length - 1; i >= 0; i--) {
    //         setTimeout(() => {

    //         }, 10 * i);
    //         console.log(texts[i])
    //         if (texts[i] != '') {
    //             texts[i].style.transform = "translateY(-100%)";
    //         }
    //         else {
    //             texts[i].textContent = '&nbsp;';
    //             texts[i].style.transform = "translateY(-100%)";
    //         }


    //     }
    // }, 6500);


    setTimeout(() => {

    }, 10000);



    setTimeout(() => {
        intro.classList.remove('active');
        setTimeout(() => {

            main.classList.add('active');
        }, 1000);
    }, 8000);




    change();
    function change() {
        window.addEventListener('mousedown', mouseCalStart);
        window.addEventListener('wheel', wheel)
        window.addEventListener('mousemove', function (e) {

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
        window.addEventListener('mouseup', function () {
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
        });

        function mouseCalStart(e) {
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
});