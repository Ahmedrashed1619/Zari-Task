
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
