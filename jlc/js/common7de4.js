//ui




jQuery(document).ready(function ($) {

    $(document).on('click', '.head-menu li', function(e){
       $(this).addClass('active').siblings('li').removeClass('active')
    
      })

    const sections = $('section');
    const  links = $('.head-menu li')

    // page Loading
        function delay(t, v) {
            return new Promise(function(resolve) {
                setTimeout(resolve.bind(null, v), 1000)
            });
        }
        Promise.prototype.delay = function(t) {
            return this.then(function(v) {
                return delay(1000, v);
            });
        }
        Promise.resolve($('.front-sect').removeClass('start')).delay(1000).then(function(v) {
            if($('.front-sect').hasClass('start')){
                $('.main').disable();
            } else{
                $('*.start').removeClass('start')
            }
        });

    var mainObj = {
        init() {
            this.sliderInit();
            this.selectStyle();
            this.clearSelect();
            this.scrollFoo();
            this.menuUI();
            this.modalVid();
        },

        sliderInit: function () {
            $('.work-slider').lightSlider({
                item: 1,
                loop: false,
                pager: true,
                controls: true,
                slideMargin: 368,
                slideMove: 1,
                easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            })
        },
        selectStyle: function () {
            $('select').each(function(){
                var $this = $(this), numberOfOptions = $(this).children('option').length;

                $this.addClass('select-hidden');
                $this.wrap('<div class="select"></div>');
                $this.after('<div class="select-styled"></div>');

                var $styledSelect = $this.next('div.select-styled');
                $styledSelect.text($this.children('option').eq(0).text());

                var $list = $('<ul />', {
                    'class': 'select-options'
                }).insertAfter($styledSelect);

                for (var i = 0; i < numberOfOptions; i++) {
                    $('<li />', {
                        text: $this.children('option').eq(i).text(),
                        rel: $this.children('option').eq(i).val()
                    }).appendTo($list);
                }

                var $listItems = $list.children('li');

                $styledSelect.click(function(e) {
                    e.stopPropagation();

                    $('div.select-styled.active').not(this).each(function(){
                        $(this).removeClass('active').next('ul.select-options').hide();
                    });
                    $(this).toggleClass('active').next('ul.select-options').toggle();
                });
                //


                $listItems.click(function(e) {

                    $styledSelect.text($(this).text()).removeClass('open');
                    $this.val($(this).attr('rel'));
                    $('.select-options').removeClass('open')
                    $this.addClass('open')
                    $list.next().removeClass('open')
                    //
                });

            });

        },
        clearSelect: function () {
            $(document).on('click', '.select-options li', function () {
                $('.select-styled').removeClass('active');
                $(this).parent().css({display: 'none'})
            })
        },
        scrollFoo: function () {



            $(window).scroll(function () {
                var distance = $(this).scrollTop();
                

                if(distance >= 150) {
                    $('.header-main').addClass('head_shadow')
                } 
                else {
                    $('.header-main').removeClass('head_shadow')
                    // $(links[0]).addClass('active').siblings('li').removeClass('active');
                }
             
                
            });
        },
        menuUI: function () {
                //open / close
                $(document).on('click', '.menu-ico', function (e) {

                    e.stopPropagation();
                        $('.menu-ico').css({zIndex: 100})

                        if(!$('.head-aside').hasClass('open')){
                            $('.head-aside').addClass('open');
                            $('.menu-ico, .header-logo').css({zIndex: 100})
                        } else{
                            $('.head-aside').removeClass('open');
                            $('.menu-ico, .header-logo').css({zIndex: 10})
                        }
                });
                //close if open
                $(document).on('click', function () {
                    if($('.head-aside').hasClass('open')){
                        $('.head-aside').removeClass('open');
                    }
                })



            },
            modalVid: function modalVid() {
              var vid = $('.modal-vid video');
              $('.buttons > span').click(function () {
                $('.header-main .header-logo').css({
                  zIndex: 1255
                });
                $('.modal-vid video').attr('muted', true);
                
                $('.modal-vid').addClass('active');
                setTimeout(() => {
                    $('.modal-inn').css({opacity: 1});
                    var vid = $('.modal-vid video');
                    vid[0].play();
                },1250)
              });
              $(document).on('click', '.close', function () {
                 var vid = $('#modal-vid');

                if ($('.modal-vid').hasClass('active')) {
                  $('.modal-vid').removeClass('active');
                  vid[0].pause();
                  $('.modal-vid video').attr('muted', false);
                   $('.modal-inn').css({opacity: 0});
                }
          });

        },
       
    };



    mainObj.init();

    if ($(window).width() >= 769) {
          wow = new WOW(
            {
                animateClass: 'animated',
                offset:       200,
                callback:     function(box) {
                    
                }
            }
        );
          wow.init();   
      } else{
        $('*').removeClass('wow').removeClass('.fadeInRight')
        $('*').removeClass('start');
      }
  
    

    $(document).on('click', 'a[href^="#"]', function (event) {

        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    
    var wpcf7Elm = document.querySelector( '.wpcf7' );
    if(wpcf7Elm){
        wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
        
        $('.mail-status span').text('');
        setTimeout(function(){
            $('.mail-status .bold').text('Your message has been sent!');
            $('.mail-status .normal').text('A member of our team will be in touch shortly.');
        },400);

    }, false );


 wpcf7Elm.addEventListener( 'wpcf7invalid', function( event ) {
        
        $('.mail-status span').text('');
    
    }, false );
    }
    

    const $button = document.querySelector('.select-styled');
    const $form = document.querySelector('.foter-sect');

// При клике на кнопку
    // $button.addEventListener('click', e => {
    //     if ($(window).width() <= 1025){
    //  // Прокрутим страницу к форме 
    //       // $form.scrollIntoView({ 
    //       //   block: 'nearest', // к ближайшей границе экрана
    //       //   behavior: 'smooth', // и плавно 
    //       // });
    //     }
     
    // });
});

