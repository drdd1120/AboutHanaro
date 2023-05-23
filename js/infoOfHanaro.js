// DOM 요소를 선택합니다.
const fadeElements = document.querySelectorAll('.middle_box_img');
// 스크롤 이벤트 핸들러 함수를 정의합니다.
function handleScroll() {
    fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;


        // console.log('elementTop:', elementTop);
        // console.log('windowHeight:', windowHeight);
        // 스크롤 위치에 따라 요소의 위치를 조정하여 fade-in 효과를 적용합니다.
        if(elementTop < windowHeight* 0.55){
        element.style.opacity = 1;
        element.style.transition = 'transform 0.5s ease';
        element.style.transform = 'translateY(0)';
        }
        else if (elementTop < windowHeight * 0.65) {
        element.style.opacity = 0.7;
        element.style.transition = 'transform 0.5s ease';
        element.style.transform = 'translateY(0)';
        }
        else if (elementTop < windowHeight * 0.75) {
        element.style.opacity = 0.5;
        element.style.transition = 'transform 0.5s ease';
        element.style.transform = 'translateY(20px)';
        }
        else if(elementTop < windowHeight * 0.85){
        element.style.opacity = 0.3;
        element.style.transition = 'transform 0.5s ease';
        element.style.transform = 'translateY(20px)';
        }
        else{
        element.style.opacity = 0;
        element.style.transition = 'transform 0.5s ease';
        element.style.transform = 'translateY(60px)';
        }
    });
    }
// 스크롤 이벤트를 추가합니다.
window.addEventListener('scroll', handleScroll);
// 페이지 로딩 시 초기 상태를 체크합니다.
handleScroll();
const fadeTestElements = document.querySelectorAll('.miidle_box_text');

function handleScrollText() {
    fadeTestElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // 스크롤 위치에 따라 요소의 위치를 조정하여 fade-in 효과를 적용합니다.
        if(elementTop < windowHeight* 0.85){
        element.style.opacity = 1;
        element.style.transition = 'transform 0.5s ease';
        element.style.transform = 'translateY(0)';
        }
        else{
        element.style.opacity = 0.5;
        element.style.transition = 'transform 0.5s ease';
        element.style.transform = 'translateY(20px)';
        }}
    );
    }

// 스크롤 이벤트를 추가합니다.
window.addEventListener('scroll', handleScrollText);
// 페이지 로딩 시 초기 상태를 체크합니다.
handleScrollText();


//캐러셀
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const container = carousel.querySelector('.carousel-container');
    const prevArrow = carousel.querySelector('.arrow.prev');
    const nextArrow = carousel.querySelector('.arrow.next');
    const items = carousel.querySelectorAll('.carousel-item');
    const itemCount = items.length;
    let currentPosition = 0;
    let itemWidth = carousel.querySelector('.carousel-item').offsetWidth; // 초기 아이템 크기

    // 캐러셀 항목의 너비 계산
    function calculateItemWidth() {
    const carouselWidth = carousel.offsetWidth;
    let newWidth;

    if (carouselWidth <= 900) {
        if (itemCount <= 3) {
        // 아이템 개수가 2개 또는 3개일 때는 고정 크기로 유지
        newWidth = itemWidth;
        } else {
        newWidth = carouselWidth;
        }
    } else {
        newWidth = 700; // 900px 이상일 때의 너비
    }

    if (newWidth !== itemWidth) {
        itemWidth = newWidth;
        container.style.transform = `translateX(${currentPosition}px)`;
        container.style.width = `${itemWidth * itemCount}px`;
        items.forEach(function (item) {
        item.style.width = `${itemWidth}px`;
        });
    }
    }

    // 초기 캐러셀 크기 설정
    calculateItemWidth();

    // 이전 버튼 클릭 시
    prevArrow.addEventListener('click', function () {
    currentPosition += itemWidth;
    if (currentPosition > 0) {
        currentPosition = -(itemWidth * (itemCount - 1));
    }
    container.style.transform = `translateX(${currentPosition}px)`;
    });

    // 다음 버튼 클릭 시
    nextArrow.addEventListener('click', function () {
    currentPosition -= itemWidth;
    if (currentPosition < -(itemWidth * (itemCount - 1))) {
        currentPosition = 0;
    }
    container.style.transform = `translateX(${currentPosition}px)`;
    });

    // 윈도우 리사이즈 시 캐러셀 크기 재조정
    window.addEventListener('resize', calculateItemWidth);
});

// 아래 화살표 중간 고정
window.addEventListener('scroll', arrowScrollEvent);

function arrowScrollEvent() {
    const scrollPosition = window.scrollY;
    const arrowBox = document.querySelector('.arrow_box');
    const scrollThreshold = window.innerHeight * 5; // 스크롤 위치 임계값 (500vh)

    if (scrollPosition <= scrollThreshold) {
    arrowBox.style.position = 'absolute';
    arrowBox.style.top = `${scrollPosition}px`;
    }
}






