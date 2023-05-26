var slideContainer = document.querySelector('.team-list'),
    items = document.querySelectorAll('.team-item'),
    item = document.querySelector('.team-item'),
    itemsCount = items.length,
    currentIdx = 0, //item 번호
    slideSize = 1, //몇개씩 슬라이드 할지 크기
    showSize = 0, //한 섹션에 몇개씩 보이고 있는지
    prevBtn = document.querySelector('.Wallop-buttonPrevious'),
    nextBtn = document.querySelector('.Wallop-buttonNext');


    if(matchMedia("screen and (max-width:940px)").matches){ 
        //화면 크기가 940px이하일때
        //940 이하에서는 2개씩 보이기때문에 showSize 2로 설정 -> team-item 의 flex-basis 잘 조정한뒤에 개수 조절 가능
        showSize = 1; 
        slideSize = 1; //슬라이드 되길 원하는 아이템 개수
    }
    else{//941px 이상일때
        showSize = 4;
        slideSize = 1; //슬라이드 되길 원하는 아이템 개수
    }

    //버튼을 누른다 -> 버튼에 다음 인덱스가 전달된다 [예외 : itemCount를 넘길 경우 -> currentIdx를 0으로 만든다.]
    function moveSlide(num){
        currentIdx = num;
        // slideContainer.style.left = (parseFloat(window.getComputedStyle(item).marginLeft)*2
        // + parseFloat(window.getComputedStyle(item).width)) * (-currentIdx) + 'px';
        slideContainer.style.left = (parseFloat(window.getComputedStyle(item).marginLeft)*2
        + item.getBoundingClientRect().width) * (-currentIdx) + 'px';
        // slideContainer.style.left = (parseFloat(window.getComputedStyle(item).marginLeft)*2
        // + parseFloat(window.getComputedStyle(item).width)) * (-currentIdx) + 'px';
        // if(matchMedia("screen and (max-width:940px)").matches){ 
        //     //화면 크기가 940px이하일때
        // //     console.log("mobile");
        // //     console.log(parseInt(window.getComputedStyle(item).marginLeft)*2
        // //    + item.offsetWidth);
        // //    console.log(parseFloat(window.getComputedStyle(item).marginLeft)*2
        // //    + item.offsetWidth*-num);
        //     currentIdx += slideSize;
        // //    slideContainer.style.left = (parseFloat(window.getComputedStyle(item).marginLeft)*2
        // //    + item.offsetWidth) * (num*(-slideSize)) + 'px';
        //     slideContainer.style.left = (parseFloat(window.getComputedStyle(item).marginLeft)*2
        //     + item.offsetWidth) * (-currentIdx) + 'px';
        //   }
        // else{//화면 크기가 940px 초과일때 item 요소 1개만큼 이동(마진 포함)
        //     // console.log(parseInt(window.getComputedStyle(item).marginLeft)*2
        //     // + item.offsetWidth);
        //     // console.log(parseInt(window.getComputedStyle(item).marginLeft)*2
        //     // + item.offsetWidth*-num);
        //     // slideContainer.style.left = (parseFloat(window.getComputedStyle(item).marginLeft)*2
        //     // + item.offsetWidth) * (num*(-slideSize)) + 'px';
        //    currentIdx += slideSize;
        //     slideContainer.style.left = (parseFloat(window.getComputedStyle(item).marginLeft)*2
        //     + item.offsetWidth) * (-currentIdx) + 'px';
        //   }
    };
    nextBtn.addEventListener('click',function(){
        console.log("다음 눌림");
        if(currentIdx<itemsCount-showSize){
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
        moveSlide(currentIdx);
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          // 리사이즈가 끝난 후에 실행될 코드
          moveSlide(0);
        }, 500); 
        if(matchMedia("screen and (max-width:940px)").matches){ 
            //화면 크기가 940px이하일때
            //940 이하에서는 2개씩 보이기때문에 showSize 2로 설정 -> team-item 의 flex-basis 잘 조정한뒤에 개수 조절 가능
            showSize = 0; 
            slideSize = 1; //슬라이드 되길 원하는 아이템 개수
        }
        else{
            showSize = 5;
            slideSize = 1; //슬라이드 되길 원하는 아이템 개수
        }
        // container.style.transition = '0s';
        // teamSlides.style.transition='0s';
        // if(matchMedia("screen and (max-width: 767px)").matches){ 
        //     //화면 크기가 767px이하일때
        //     console.log("mobile");
        //   }else if(matchMedia("screen and (max-width: 1023px)").matches){
        //     //화면 크기가 1023px이하일때
        //     console.log("tablet");
        //   }else if(matchMedia("screen and (min-width: 1024px)").matches){
        //     //화면 크기가 1024px 이상일때
        //     console.log("desktop");
        //   }
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
  
