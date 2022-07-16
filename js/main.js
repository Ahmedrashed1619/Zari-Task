
// loading to init...........

$(document).ready(function(){
    $('#ready').fadeOut(3000, function(){
        $('body').css('overflow','visible');
        $('#topBtn').css('display' , 'none')
    })
})


// when click event on topbtn & toggle 

$('#topBtn').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})

$('#btnTopFooter').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})

$(window).scroll(function(){

    let whyOffset = $('#why').offset().top;
    let pricingOffset = $('#pricing').offset().top;

    if($(window).scrollTop() > whyOffset && $(window).scrollTop() < pricingOffset)
    {
        $('#topBtn').fadeIn(500);
    }
    else
    {
        $('#topBtn').fadeOut(250);
    }
})

// change toggle navbar style

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


// for email subscribe in footer section

$('#subscribe').click(()=>{
    if(checkEmail == true){
        $('#alertSubscribe').html('Successfully Subscribe');
        $('#alertSubscribe').addClass('text-success');
        $('#alertSubscribe').removeClass('text-danger');
    }
    else {
        $('#alertSubscribe').html('You should fill it correctly to subscribe');
        $('#alertSubscribe').addClass('text-danger');
        $('#alertSubscribe').removeClass('text-success');
    }
})


let checkEmail;
function validUserEmailSubscribe(){
    let regexEmail = /^[a-zA-Z0-9_]{3,15}(@gmail\.com)$/;
    checkEmail = regexEmail.test($('#emailSubscribe').val());
    if(checkEmail == true)
    {
        $('#emailSubscribe').addClass('is-valid');
        $('#emailSubscribe').removeClass('is-invalid');
        $('#alertEmailSubscibe').css('display' , 'none');
    }
    else
    {
        $('#emailSubscribe').addClass('is-invalid');
        $('#emailSubscribe').removeClass('is-valid');
        $('#alertEmailSubscibe').css('display' , 'block');
    }
}

$('#emailSubscribe').on('input' , function(){
    validUserEmailSubscribe();
})












