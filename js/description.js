window.addEventListener("load", init);

function init() {

    pageChange('liability')
    function pageChange(classy) {

        var url = 'js/json/detailData.json';
        console.log(url)
        fetch(url)
            .then(response => response.json()
            )
            .then(json => {
                var conCode = '';
                let title, titSub, titLink, titImg, titBg, aboutTit, aboutCon, aboutCli, aboutDate, vdoLink, vdoCon, issue, solve, siteImg, siteLink, siteTit, reChange, dsiConcept, dsiCon, typoImg, dsiColor, nextTit, nextImg, nextColor;
                let iss = '';
                let sol = '';
                // let iss='';
                // let iss='';
                var contentArea = document.querySelector('.change');
                json[classy].forEach(function (value, key) {
                    title = value.title; titSub = value.titSub; titLink = value.titLink; titImg = value.titImg; titBg = value.titBg;

                    aboutTit = value.aboutTit; aboutCon = value.aboutCon; aboutCli = value.aboutCli; aboutDate = value.aboutDate;

                    vdoLink = value.vdoLink; vdoCon = value.vdoCon;

                    issue = value.issue; solve = value.solve;

                    siteImg = value.siteImg; siteLink = value.siteLink; siteTit = value.siteTit;

                    reChange = value.reChange;

                    dsiConcept = value.dsiConcept; dsiCon = value.dsiCon; typoImg = value.typoImg; dsiColor = value.dsiColor;

                    nextTit = value.nextTit; nextImg = value.nextImg; nextColor = value.nextColor;


                    //배열 관리

                    issue.forEach(function (value, key) {
                        iss += "<div>" + value + "</div>"
                    });
                    solve.forEach(function (value, key) {
                        sol += "<div>" + value + "</div>"
                    });



                    // <figure>
                    //     <img src='' alt=''>
                    //     <figcaption>
                    //         메인페이지
                    //     </figcaption>
                    // </figure>



                    //코드 삽입시작
                    conCode += "<div class='title'><div class='tit-wrap' ><div class='titTxt' style='background-color: " + titBg + ";'><div class='txtInner' ><h1>" + title + "</h1><p> " + titSub + "</p><a href='" + titLink + "' target='_blank'><span>Visit the website</span></a></div></div><div class='titImg'><img src = '" + titImg + "'></div></div></div>";

                    conCode += "// <div class='linkIcon' style='background-color: " + titBg + ";'><div class='linkIconActive'>visit the website</div><div class='linkIconBasic'><img src='img/description/diagonal-arrow.svg'></div></div>";

                    conCode += "<div class='content-wrap'>";

                    conCode += "<section class='about wd72'><h3> about project</h3><h2>" + aboutTit + "</h2><div><p>" + aboutCon + "</p><div class='myWork'><div><h4>CLIENT</h4><p>" + aboutCli + "</p></div><div><h4>DATE</h4><p>" + aboutDate + "</p></div></div></div></section> ";

                    conCode += "<div class='vdo wd90'><video><source src=" + vdoLink + "></video><p><i>" + vdoCon + "</i></p></div>";

                    conCode += "<section class='solve wd72'>< h3 > 1.</h3 ><h2>Solving problems</h2><div class='deform'><p>이곳은 문제해결 설명란입니다.</p><p>코딩하면서 여러가지 문제점에 도달했는데 이를 해결하기 위해 시도했거나 개선한 점을 기술한다.</p></div><div class='solveProcess'><div><h4>발생 문제</h4><div>" + iss + "</div></div><div><h4>해결 방안</h4><div>" + sol + "</div></div></div></section>";

                    conCode += "<section class='site-map wd72' ><h3>2.</h3><h2>site map</h2><div class='site-wrap'></div></section>";

                    conCode += "";

                    conCode += "";

                    conCode += "";

                    conCode += "";



                    conCode += "</div>";

                    contentArea.innerHTML = conCode;

                });

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
            });
    }


};





// <div class='title'>
// <div class='tit-wrap'>
//     <div class='titTxt' style='background-color: #000;'>
//         <div class='txtInner'>
//             <h1>Liability</h1>
//             <p> 전 연인에 대한 상실감과 인간관계에서 느끼는 결핍을 표현한다.</p>
//             <a href='https://paul94lee.github.io/liability/' target='_blank'><span>Visit the website</span></a>
//         </div>

//     </div>
//     <div class='titImg'>
//         <img src='img/liability-cover.jpg'>
//     </div>
// </div>
// </div>
// <div class='linkIcon' style='background-color: #f00;'>

// <div class='linkIconActive'>visit the website</div>
// <div class='linkIconBasic'>
//     <img src='img/description/diagonal-arrow.svg'>
// </div>
// </div>







// <div class='content-wrap'>
// <section class='about wd72'>
//     <h3>about project</h3>
//     <h2>Liability는 blah blah ~~ Liability는 blah blah ~~
//     </h2>
//     <div>
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut turpis in tellus eleifend egestas.
//             Sed non accumsan turpis. Suspendisse a sem laoreet, imperdiet elit a, luctus erat. Mauris consequat
//             sapien nibh, ac venenatis ipsum ultricies laoreet. Ut eget lacinia nisi. Morbi laoreet finibus urna,
//             non tincidunt urna aliquam a. Pellentesque aliquet metus quis ligula vulputate, vel volutpat dui
//             hendrerit. Proin nisi est, sagittis nec dictum feugiat, egestas accumsan felis. Aenean sollicitudin
//             nisl
//         </p>
//         <div class='myWork'>
//             <div>
//                 <h4>CLIENT</h4>
//                 <p> Self-Initiated</p>
//             </div>
//             <div>
//                 <h4> DATE</h4>
//                 <p> 20-10-11 ~ 20-10-30</p>
//             </div>
//         </div>
//     </div>
// </section>
// <div class='vdo wd90'>
//     <video>
//     </video>
//     <p><i>영상에 대한 설명</i></p>
// </div>
// <section class='solve wd72'>
//     <h3>1.</h3>
//     <h2>Solving problems</h2>
//     <div class='deform'>
//         <p>이곳은 문제해결 설명란입니다.</p>
//         <p>코딩하면서 여러가지 문제점에 도달했는데 이를 해결하기 위해 시도했거나 개선한 점을 기술한다.</p>
//     </div>
//     <div class='solveProcess'>
//         <div>
//             <h4>발생 문제</h4>
//             <div>aaaaaaaaaaa</div>
//         </div>
//         <div>
//             <h4>해결 방안</h4>
//             <div>bbbbbbbbbbbb</div>
//         </div>
//     </div>
// </section>
// <section class='site-map wd72'>
//     <h3>2.</h3>
//     <h2>site map</h2>
//     <div class='site-wrap'>
//         <figure>
//             <img src='' alt=''>
//             <figcaption>메인페이지</figcaption>
//         </figure>
//         <figure>
//             <img src='' alt=''>
//             <figcaption>메인페이지</figcaption>
//         </figure>
//         <figure>
//             <img src='' alt=''>
//             <figcaption>메인페이지</figcaption>
//         </figure>
//         <figure>
//             <img src='' alt=''>
//             <figcaption>메인페이지</figcaption>
//         </figure>

//     </div>
// </section>
// <section class='reaction wd72'>
//     <h3>3.</h3>
//     <h2>reactive branching point</h2>
//     <div>
//         <span>360px</span>
//         <span>768px</span>
//         <span>1280px</span>
//         <span>1980px</span>
//     </div>
// </section>
// <section class='visual wd72'>
//     <h3>4.</h3>
//     <h2>Visual identity</h2>
//     <div class='deform'>
//         <p>Art Direction that match the concept</p>
//         <p>I wanted the overall style to evoke travels, the adventures, and the personal connections that the
//             Esperanto project represented. To do so, I knew I wanted a primary font with a humanist feel to it
//             and a hand-drawn logo. This wordmark would look almost like what you draw on a notebook while
//             looking trough the window on a long bus ride. </p>
//     </div>
//     <div class='visCon'>
//         <div class='typo'>
//             <h4>typograpy</h4>
//             <p>Rozha One
//                 aA123
//             </p>
//             <p>Noto Sans
//                 aA123
//             </p>
//         </div>
//         <div class='colors'>
//             <h4>colors</h4>
//             <div><span>#555555</span></div>
//             <div><span>#555555</span></div>
//             <div><span>#555555</span></div>
//             <div><span>#555555</span></div>
//         </div>
//     </div>
// </section>


// </div>
// <div class='next wd100' style='background-color: #d74545;'>
// <div>
//     <h4>up next</h4>
//     <h1>soodam</h1>
//     <img src='img/description/class08.jpg' alt=''>
// </div>

// </div>


