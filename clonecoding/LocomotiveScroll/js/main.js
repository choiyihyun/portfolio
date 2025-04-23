document.addEventListener('DOMContentLoaded', () => {
    // 📦 GSAP에서 스크롤 애니메이션을 쓸 수 있게 설정해요
    gsap.registerPlugin(ScrollTrigger);

    // ✨ 부드러운 스크롤을 적용할 큰 박스를 찾아요
    const scrollContainer = document.querySelector("[data-scroll-container]");

    // 🚀 LocomotiveScroll 시작! (스크롤을 부드럽게 만들어줘요)
    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
    });

    // 🔁 LocomotiveScroll이 스크롤하면 ScrollTrigger도 함께 업데이트해요
    scroll.on("scroll", ScrollTrigger.update);

    // 🧩 ScrollTrigger와 Locomotive를 연결해서 위치 계산을 정확하게 맞춰줘요
    ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
            // 값을 넣으면 스크롤하고, 없으면 지금 위치 알려줘요
            return arguments.length
                ? scroll.scrollTo(value, 0, 0)
                : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            // 화면 크기를 알려주는 정보예요
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: scrollContainer.style.transform ? "transform" : "fixed",
        // 어떤 방식으로 고정할지 정해줘요
    });


    //고정+스케일
    gsap.fromTo('#pinScale', {
        scale: 0.8 //시작크기
    }, {
        scale: 1.2, //마지막크기
        ease: 'none',
        scrollTrigger: {
            trigger: '.pin_wrapper',
            scroller: scrollContainer,
            start: 'center center', //박스가 화면 정 중앙일 때 시작
            end: "+=400", //400px 동안 애니메이션
            pin: true, //고정
            scrub: true, //스크롤 속도에 따라 부드럽게
            pinSpacing: true, // 🔄 다시 true로 설정
            anticipatePin: 1,// 좀 더 부드럽게 전환되게 해줘요
            onUpdate: (self) => {
                const wrapper = document.querySelector(".pin_wrapper");
                const transform = getComputedStyle(wrapper).transform;

                if (transform && transform !== "none") {
                    const match = transform.match(/matrix.*\((.+)\)/);
                    if (match) {
                        const values = match[1].split(", ");
                        const translateY = parseFloat(values[5]);
                        if (translateY > 300) {
                            wrapper.style.transform = "translate(0px, 0px)";
                        }
                    }
                }
            }
        }
    })


    //회전하는 카드 애니메이션
    gsap.to('.rotate_card',{
        rotationY:180, //y축으로 뒤집기
        scrollTrigger:{
            trigger:'.rotate_card',
            scroller:scrollContainer,
            start:"top 50%",
            end:'top 80%',
            scrub:true,
        }
    })


    //아래에서 위로 올라오며 보이는 텍스트들
    gsap.utils.toArray('.section5 p').forEach(element=>{
         gsap.to(element,{
           opacity:1,
           y:0,
           duration:1,
           ease:"power2.out",//애니메이션에서 빠르게 시작해서 서서히 느려지면서 멈춤
           scrollTrigger:{
            trigger:element,
            scroller:scrollContainer,
            start:'top 90%',//거의 화면 아래에서 시작
            scrub:true,
           }
         })
    });

    //타이핑 애니
    const typingText=document.querySelector('.typing_txt');
    const cursor=document.querySelector('.cursor');
    const textToType='이건 타이핑으로 나오는 텍스트 입니다.';
    let isTyping=false;

    function startTyping(){
        if(isTyping) return;
        isTyping=true;
        typingText.textContent=''; //이전 텍스트 초기화
        cursor.style.display='inline-block';//커서 다시 보이게
        let currentChar=0;
        const typingInter=setInterval(()=>{
             if(currentChar<textToType.length){
                typingText.textContent+= textToType[currentChar];//한글자씩 추가
                currentChar++;
             }else{
                clearInterval(typingInter);//다 끝나면 멈춤
                cursor.style.display='none';//커서 숨김
                isTyping=false;//타이핑 종료 표시
             }
        },100)//100ms 마다 글자 하나씩 나오게
    }

    ScrollTrigger.create({
          trigger:'.section7',
          scroller:scrollContainer,
          start:'top 80%',//섹선이 거의 다 보일 때
          onEnter:()=> startTyping(),
          onEnterBack:()=> startTyping(),//뒤로 올라갔다가 다시 와도 실행
    });
   

    // 🔁 화면 크기 바뀌거나 이미지 로딩 등으로 위치가 바뀌면 계산 다시 해줘요
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh(); // 수동으로 지금 위치 새로 계산해줘
});