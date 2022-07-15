
// loading to init...........

// $(document).ready(function(){
//     $('#ready').fadeOut(2500, function(){
//         $('body').css('overflow','visible')
//     })
// })



// when click event on topbtn & toggle 

// $('#topBtn').click(function(){
//     $('html , body').animate({scrollTop : 0}, 500);
// })

// $(window).scroll(function(){

//     let whyOffset = $('#why').offset().top;
//     let contactOffset = $('#contact').offset().top;

//     if($(window).scrollTop() > 200)
//     {
//         $('.navbar').css({'backgroundColor' : 'rgba(0, 0, 0, 0.85)', 'transition' : '0.5s'});
//         $('.navbar-collapse').css({'backgroundColor' : 'transparent', 'transition' : '0.5s'});
//     }
//     else
//     {
//         $('.navbar').css({'backgroundColor' : 'transparent', 'transition' : '0.5s'});
//         $('.navbar-collapse').css({'backgroundColor' : 'rgba(0, 0, 0, 0.85)', 'transition' : '0.5s'});
//     }

//     if($(window).scrollTop() > whyOffset && $(window).scrollTop() < contactOffset-250)
//     {
//         $('#topBtn').fadeIn(500);
//     }
//     else
//     {
//         $('#topBtn').fadeOut(250);
//     }
// })

$('.navbar .navbar-toggler').click(()=>{
    $('.navbar .navbar-toggler').toggleClass('convert');
})


// change flag for currency when click 

let currency = document.getElementById('currency');
let img = document.getElementById('img-select')
currency.addEventListener('click' , function(){
    if(this.value == 'dollar'){
        img.removeAttribute('src');
        img.setAttribute('src' , 'imgs/navbar/Flag_of_the_United_States.svg.png');
    }
    else if(this.value == 'pound'){
        img.removeAttribute('src');
        img.setAttribute('src' , 'imgs/navbar/Flag_of_Egypt.png');
    }
    else if(this.value == 'euro'){
        img.removeAttribute('src');
        img.setAttribute('src' , 'imgs/navbar/Flag_of_Europe.svg.png');
    };
})


// add class active to an active link and smooth move.....

$('.navbar-nav .nav-item a').click(function(){
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
    let currentSection = $(this).attr('href');
    let currentOffset = $(currentSection).offset().top;
    $('html , body').animate({scrollTop : currentOffset}, 500);
})


// change indicators buttons style

$('#indicators button').click(function(){
    $(this).addClass('change');
    $(this).siblings().removeClass('change');
})


// counter section

let counters = document.querySelectorAll('.counter');
let section = document.querySelector('.numbers')

function startCount(ele){
    let target = +ele.getAttribute('data-target');
    let count = setInterval(() =>{
        ele.textContent++;
        if(ele.textContent == target){
            clearInterval(count)
        }
    }, 3000/target)
}

// to start count
let numbersOffset = $('#numbers').offset().top - 500;

// to stop counter 
let started = false;

// when scroll to start counter

$(window).scroll(function(){
    if($(window).scrollTop() >= numbersOffset){
        if(!started){
            counters.forEach(counter => startCount(counter))
        }
        started = true;
    }
})

