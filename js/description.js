window.addEventListener("load", init);

function init() {
    var myStorage = window.localStorage;

    pageChange(myStorage.pageName)
    var chanAni = document.querySelector('.chanAni');
    var pageColor = {
        UZEN: '#fa5400',
        liability: '#000',
        soodam: '#d74545'
    };

    var pageName = myStorage.pageName;
    chanAni.style = 'background-color:' + pageColor[pageName] + ';';

    goLeft();

    function pageChange(classy) {

        var url = 'js/json/detailData.json';

        fetch(url)
            .then(response => response.json()
            )
            .then(json => {

                var conCode = '';
                let title, titSub, titLink, titImg, titBg, aboutTit, aboutCon, aboutCli, aboutDate, vdoLink, vdoCon, issue, solve, siteImg, siteLink, siteTit, reChange, dsiConcept, dsiCon, typoImg, dsiColor, nextTit, nextImg, nextColor, aboutLang;
                let iss = '';
                let sol = '';
                let fig = '';
                let reCh = '';
                let dsiCols = '';
                let Lang = '';
                var contentArea = document.querySelector('.change');

                json[classy].forEach(function (value, key) {//내용변경
                    title = value.title; titSub = value.titSub; titLink = value.titLink; titImg = value.titImg; titBg = value.titBg;

                    aboutTit = value.aboutTit; aboutCon = value.aboutCon; aboutCli = value.aboutCli; aboutDate = value.aboutDate; aboutLang = value.aboutLang;

                    vdoLink = value.vdoLink; vdoCon = value.vdoCon;

                    issue = value.issue; solve = value.solve;

                    siteImg = value.siteImg; siteLink = value.siteLink; siteTit = value.siteTit;

                    reChange = value.reChange;

                    dsiConcept = value.dsiConcept; dsiCon = value.dsiCon; typoImg = value.typoImg; dsiColor = value.dsiColor;

                    nextTit = value.nextTit; nextImg = value.nextImg; nextColor = value.nextColor;


                    //배열 관리

                    aboutLang.forEach(function (value, key) {
                        Lang += "<p>" + value + "</p>"
                    });
                    issue.forEach(function (value, key) {
                        iss += "<p>" + value + "</p>"
                    });
                    solve.forEach(function (value, key) {
                        sol += "<p>" + value + "</p>"
                    });


                    siteImg.forEach(function (value, key) {
                        fig += "<a href='" + siteLink[key] + "' target='_blank'><figure><img src='" + value + "' alt=''><figcaption>" + siteTit[key] + "</figcaption></figure></a>";
                    });

                    reChange.forEach(function (value, key) {
                        reCh += "<span>" + value + "</span>";
                    });

                    dsiColor.forEach(function (value, key) {
                        dsiCols += "<div style='background-color:" + value + "'><span>" + value + "</span></div>";
                    });





                    //코드 삽입시작
                    conCode += "<div class='title'><div class='tit-wrap' ><div class='titTxt' style='background-color: " + titBg + ";'><div class='txtInner' ><h1>" + title + "</h1><p> " + titSub + "</p><a href='" + titLink + "' target='_blank'><span>Visit the website</span></a></div></div><div class='titImg'><img src = '" + titImg + "'></div></div></div>";

                    conCode += "// <div class='linkIcon' style='background-color: " + titBg + ";'><a href='" + titLink + "' target='_blank'><div class='linkIconActive'>visit the website</div><div class='linkIconBasic'><img src='img/description/diagonal-arrow.svg'></div></a></div>";

                    conCode += "<div class='content-wrap'>";

                    conCode += "<section class='about wd72'><h3> about project</h3><h2>" + aboutTit + "</h2><div><p>" + aboutCon + "</p><div class='myWork'><div><h4>CLIENT</h4><p>" + aboutCli + "</p></div><div><h4>DATE</h4><p>" + aboutDate + "</p></div><div><h4>LANGUAGE</h4><p>" + Lang + "</p></div></div></div></section> ";

                    conCode += "<div class='vdo wd90'><video autoplay muted loop><source src=" + vdoLink + "></video><p><i>" + vdoCon + "</i></p></div>";

                    conCode += "<section class='solve wd72'><h3> 1.</h3><h2>Solving Requirements</h2><div class='deform'><p>요구사항 & 해결방법</p><p>프로젝트에 필요한 요구사항과 요구사항을 어떻게 처리했는지 보여드립니다.</p></div><div class='solveProcess'><div><h4>요구사항</h4><div>" + iss + "</div></div><div><h4>해결 방안</h4><div>" + sol + "</div></div></div></section>";

                    conCode += "<section class='site-map wd72' ><h3>2.</h3><h2>site map</h2><div class='site-wrap'>" + fig + "</div></section>";


                    conCode += "<section class='reaction wd72'><h3>3.</h3><h2>reactive branching point</h2><div>" + reCh + "</div></section>";

                    conCode += "<section class='visual wd72'><h3> 4.</h3 ><h2>Visual identity</h2><div class='deform'><p>" + dsiConcept + "</p><p>" + dsiCon + "</p></div><div class='visCon'><div class='typo'><h4>typograpy</h4><img src='" + typoImg + "' alt=''></div><div class='colors'><h4>colors</h4>" + dsiCols + "</div></section>";

                    conCode += "</div>";

                    conCode += "<div class='next wd100' style='background-color:" + nextColor + ";'><div><h4>up next</h4><h1>" + nextTit + "</h1><img src='" + nextImg + "' alt=''></div></div>";
                    contentArea.innerHTML = conCode;
                });

                //goback
                let goBack = document.querySelector('.backHome');
                goBack.addEventListener('click', function (e) {
                    e.preventDefault();
                    myStorage.setItem('where', 1);
                    location.href = './index.html';
                });

                //tit/foot 전환
                addEventListener("scroll", tfSwitch)
                function tfSwitch(e) {
                    var body = document.querySelector('body');
                    var direc = scrollY < body.offsetHeight / 2;
                    titFoot(direc);
                }
                function titFoot(direc) {
                    var tit = document.querySelector('.title');
                    var nex = document.querySelector('.next');
                    if (direc) {
                        tit.style.display = "block";
                        nex.style.display = "none";
                    }
                    else {
                        tit.style.display = "none";
                        nex.style.display = "block";
                    }
                };


                //다음페이지 전환
                var chanAni = document.querySelector('.chanAni');

                // chanAni



                var nextDetail = document.querySelector('.next');


                nextDetail.addEventListener('click', function () {
                    chanAni.classList.add('active');
                    chanAni.style = "background-color:" + nextColor;
                    setTimeout(() => {
                        window.scrollTo(0, 0);
                        pageChange(nextTit);
                    }, 400);
                    setTimeout(() => {
                        chanAni.classList.remove('active');
                    }, 2000);

                });


            });

    }


};




