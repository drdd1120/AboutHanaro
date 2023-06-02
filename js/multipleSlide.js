var slideContainer = document.querySelector('.team-list'),
    items = document.querySelectorAll('.team-item'),
    item = document.querySelector('.team-item'),
    itemsCount = items.length,
    currentIdx = 0, //item 번호
    slideSize = 1, //몇개씩 슬라이드 할지 크기 (초기화용)
    showSize = 0, //한 섹션에 몇개씩 보이고 있는지
    prevBtn = document.querySelector('.Wallop-buttonPrevious'),
    nextBtn = document.querySelector('.Wallop-buttonNext');

    //반응형 멀티플슬라이드를 위한 초기화 구문( 940 초과, 940 이하)
    if(matchMedia("screen and (max-width:940px)").matches){ 
        //화면 크기가 940px이하일때
        //940 이하에서는 2개씩 보이기때문에 showSize 2로 설정 -> team-item 의 flex-basis 잘 조정한뒤에 개수 조절 가능
        showSize = 2; 
        slideSize = 1; //슬라이드 되길 원하는 아이템 개수
    }
    else{//941px 이상일때
        showSize = 5;
        slideSize = 1; //슬라이드 되길 원하는 아이템 개수
    }

    //버튼을 누른다 -> 버튼에 다음 인덱스가 전달된다 [예외 : itemCount를 넘길 경우 -> currentIdx를 0으로 만든다.]
    function moveSlide(num){
        currentIdx = num;
        slideContainer.style.left = (parseFloat(window.getComputedStyle(item).marginLeft)*2
        + item.getBoundingClientRect().width) * (-currentIdx) + 'px';
    };
    nextBtn.addEventListener('click',function(){
        console.log("다음 눌림");
        if(currentIdx<itemsCount-showSize){
            //현재 인덱스가 총아이템 수 - 보여지고싶은 만큼의 수보다 작을 경우 실행
            //현재인덱스 + 몇개씩 아이템 넘길지 크기만큼 이동
            moveSlide(currentIdx+slideSize);
            console.log(currentIdx);
        }else{
            moveSlide(0);
            console.log(currentIdx);
        }
    });
    prevBtn.addEventListener('click',function(){
        console.log("이전 눌림")
        if(currentIdx>0){//정상적으로 왼쪽으로 가는 경우
        moveSlide(currentIdx-slideSize);
        console.log(currentIdx);
        // console.log(currentIdx)
        }else{//0번째 요소에서 클릭했을 경우, 맨 오른쪽 요소로 이동
            moveSlide(itemsCount-showSize);
            console.log(currentIdx);
        }
    });
    window.addEventListener('resize', function() {
        var resizeTimer;
        clearTimeout(resizeTimer);
        if(matchMedia("screen and (max-width:940px)").matches){ 
            //화면 크기가 940px이하일때
            //940 이하에서는 2개씩 보이기때문에 showSize 2로 설정 -> team-item 의 flex-basis 잘 조정한뒤에 개수 조절 가능
            showSize = 2; 
            slideSize = 1; //슬라이드 되길 원하는 아이템 개수
            resizeTimer = setTimeout(function() {
                // 리사이즈가 끝난 후에 실행될 코드
                moveSlide(currentIdx);
              },300); 
        }
        else{
            showSize = 5;
            slideSize = 1; //슬라이드 되길 원하는 아이템 개수
            resizeTimer = setTimeout(function() {
                if(currentIdx>itemsCount-showSize){
                    moveSlide(itemsCount-showSize)
                    console.log("resize - if 문 실행")
                }
                else{
                    console.log("resize - else 문 실행")
                    moveSlide(currentIdx);
                }
              },300);
        }
      });
    window.addEventListener('scroll', arrowScrollEvent);

function arrowScrollEvent() {
    const scrollPosition = window.scrollY;
    const arrowBox = document.querySelector('.arrow_box');
    const scrollThreshold = window.innerHeight * 0.05;

    if (scrollPosition <= scrollThreshold) {
    arrowBox.style.position = 'absolute';
    arrowBox.style.top = `${scrollPosition}px`;
    }
}
window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var viewportHeight = window.innerHeight;
  
    if (scrollPosition > 0.3 * viewportHeight) {
      //                       ^^^
      //                      전체 화면의 70퍼센트ㄴ
      document.body.classList.add("scroll-background");
    } else {
      document.body.classList.remove("scroll-background");
    }
  });
  
