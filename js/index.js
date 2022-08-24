$(function () {
    let winWidth;
    $(window).resize(function () {
        winWidth=$(this).width();
        if(winWidth <= 1024) {
            $('.main-menu').off('mouseenter'); // 1024 보다 작으면
            $('.main-menu').off('mouseleave'); // 이벤트 제거
            $('nav').prependTo('.h-top'); //.h-top의 맨앞부분에 nav 넣어줌.
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO-b.svg');
        }else {
            $('nav').appendTo('header'); // 1024 보다 큰 경우 header 맨 뒤에 nav넣어줌
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO.svg');
            $('.main-menu').on({
                mouseenter: function () {
                    $('.sub-menu, .sub-bg').stop().show(); // 마우스들어오면 서브애들 보이게함
                },
                mouseleave: function () {
                    $('.submenu, .sub-bg').stop().hide(); // 나가면 서브애들 숨김
                }
            });
        }
    }); //resize이벤트 종료
    $(window).trigger('resize'); // 강제 이벤트 발생
    $('.menu-btn').click(function (event) {
        event.stopPropagation(); // 이벤트 버블링(연속발생) 제거
        $('.index-wrap').css('filter', 'blur(10px)'); 
        $('body, html').css({
            height:'100vh',
            overflow:'hidden'
        });
        $('.menu-area').show();
        $('.h-top').animate({
            right:'0%'
        },'fast');
    }); //태블릿, 모바일에서 사용하는 메뉴
    $('.main-menu>li>a').click(function (event) {
        event.stopPropagation();
        $(this).siblings('.sub-menu').animate({
            left:'0%'
        },'fast');
    });
    $('.all> a').click(function (event) {
        event.stopPropagation();
        $(this).parents('.sub-menu').animate({
            left:'150%'
        },'fast');
    });
    $('.menu-area').click(function() {
        $('.index-wrap').css('filter','blur(0px)');
        $('.h-top').animate({
            right:'-100%'
        },'fast',function () {
            $('.menu-area').hide();
        });
    });
    if(winWidth<=480) {
        $('.main-01 img').attr('src','images/M-01-mobile.png')
        $('.main-02 img').attr('src','images/M-02-mobile.png')
        $('.main-03 img').attr('src','images/M-03-mobile.png')
    }else {
        $('.main-01 img').attr('src','images/M-01.png');
        $('.main-02 img').attr('src','images/M-02.png');
        $('.main-03 img').attr('src','images/M-03.png');


    }
    //swiper 플러그인
    let swiperSlide=new swiperSlide('.Featured-slide', {
        //모바일 기준
        slidesPerView:'auto',
        spaceBetween:8,
        pagination: {
            el:'.f-pager',
            clickable:true,
            type:'fraction'//'fraction' -> <좌우> 'bullets' -> 원형버튼
        },
        navigation: {
            prevEl:'.f-prev',
            nextEl:'f-next'
        },
        //반응형(화면 넓이에 따라 레이아웃 변경)
        breakoints:{
            1025: {
                slidesPerView:3,
                spaceBetween:24
            },
            480: {
                slidesPerView:'auto',
                spaceBetween:16
            }
        }
    })
});