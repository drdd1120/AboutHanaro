
// 스크롤 내일때 네비바 색상변경
window.onscroll = function() {
    var nav = document.querySelector('.nav');
    if (window.pageYOffset > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};



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


//플젝2
let slideIndex2 = 0;
let slides2 = document.getElementsByClassName("carousel-image2");
slides2[slideIndex2].style.opacity = "1";
slides2[slideIndex2].style.transform = "translateX(0)";

function moveSlide2(n) {
    const prevIndex = slideIndex2;
    slideIndex2 += n;

    if (slideIndex2 >= slides2.length) {
        slideIndex2 = slides2.length - 1;
    }
    if (slideIndex2 < 0) {
        slideIndex2 = 0;
    }

    slides2[prevIndex].style.opacity = "0";
    slides2[prevIndex].style.transform = (n > 0) ? "translateX(-100%)" : "translateX(100%)";
    
    slides2[slideIndex2].style.opacity = "1";
    slides2[slideIndex2].style.transform = "translateX(0)";

    // 버튼 비활성화 처리
    const prevButton = document.getElementById("prev2");
    const nextButton = document.getElementById("next2");

    prevButton.disabled = (slideIndex2 === 0);
    nextButton.disabled = (slideIndex2 === slides2.length - 1);
}