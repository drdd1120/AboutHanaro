
// 스크롤 내일때 네비바 색상변경
window.onscroll = function() {
    var nav = document.querySelector('.nav');
    if (window.pageYOffset > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

//네비바 메뉴 jquery로
$('a').click(function(event) {
    event.preventDefault(); // 기본 동작을 막습니다

    var target = $(this.hash); // href의 해시 값 (예: "#section1")을 이용하여 이동 대상을 찾습니다
    if (target.length) { // 대상이 있는 경우
        $('html, body').animate({ // 애니메이션을 추가합니다
            scrollTop: target.offset().top // 이동 대상의 위치로 스크롤합니다
        }, 1000); // 1초 동안 부드럽게 스크롤합니다
    }
});


//플젝1
let slideIndex1 = 0;
let slides1 = document.getElementsByClassName("carousel-image1");
slides1[slideIndex1].style.opacity = "1";
slides1[slideIndex1].style.transform = "translateX(0)";

function moveSlide1(n) {
    const prevIndex = slideIndex1;
    slideIndex1 += n;

    if (slideIndex1 >= slides1.length) {
        slideIndex1 = slides1.length - 1;
    }
    if (slideIndex1 < 0) {
        slideIndex1 = 0;
    }

    slides1[prevIndex].style.opacity = "0";
    slides1[prevIndex].style.transform = (n > 0) ? "translateX(-100%)" : "translateX(100%)";
    
    slides1[slideIndex1].style.opacity = "1";
    slides1[slideIndex1].style.transform = "translateX(0)";

    // 버튼 비활성화 처리
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    prevButton.disabled = (slideIndex1 === 0);
    nextButton.disabled = (slideIndex1 === slides1.length - 1);
}

var textElement = document.getElementById('pro1_url1');

textElement.addEventListener('click', function() {
    window.open('https://github.com/HUY-Bookmark/BookMark', '_blank');
});


var textElement = document.getElementById('pro1_url2');

textElement.addEventListener('click', function() {
    window.open('https://youtu.be/t7TrTA7m7hw', '_blank');
});



//플젝4
let slideIndex4 = 0;
let slides4 = document.getElementsByClassName("carousel-image4");
slides4[slideIndex4].style.opacity = "1";
slides4[slideIndex4].style.transform = "translateX(0)";

function moveSlide4(n) {
    const prevIndex = slideIndex4;
    slideIndex4 += n;

    if (slideIndex4 >= slides4.length) {
        slideIndex4 = slides4.length - 1;
    }
    if (slideIndex4 < 0) {
        slideIndex4 = 0;
    }

    slides4[prevIndex].style.opacity = "0";
    slides4[prevIndex].style.transform = (n > 0) ? "translateX(-100%)" : "translateX(100%)";
    
    slides4[slideIndex4].style.opacity = "1";
    slides4[slideIndex4].style.transform = "translateX(0)";

    // 버튼 비활성화 처리
    const prevButton = document.getElementById("prev4");
    const nextButton = document.getElementById("next4");

    prevButton.disabled = (slideIndex4 === 0);
    nextButton.disabled = (slideIndex4 === slides4.length - 1);
}

var textElement = document.getElementById('pro4_url1');

textElement.addEventListener('click', function() {
    window.open('https://github.com/drdd1120/AboutHanaro.git', '_blank');
});

var textElement = document.getElementById('pro4_url2');

textElement.addEventListener('click', function() {
    window.open('https://www.abouthanaro.shop/source/html/main.html', '_blank');
});