
// loading to init...........

$(document).ready(function(){
    $('#ready').fadeOut(2000, function(){
        $('body').css('overflow','visible');
    })
})

// for checkOut page 

let checkNameCard;
function validNameCard(){
    let regexName = /^[a-zA-Z]{3,12} [a-zA-Z]{3,12}$/;
    checkNameCard = regexName.test($('#nameCard').val());
    if(checkNameCard == true)
    {
        $('#nameCard').addClass('is-valid');
        $('#nameCard').removeClass('is-invalid');
        $('#alertNameCard').css('display' , 'none');
    }
    else
    {
        $('#nameCard').addClass('is-invalid');
        $('#nameCard').removeClass('is-valid');
        $('#alertNameCard').css('display' , 'block');
    }
}

let checkNumberCard;
function validNumberCard(){
    let regexNumber = /^[0-9]{16}$/;
    checkNumberCard = regexNumber.test($('#number').val());
    if(checkNumberCard == true)
    {
        $('#number').addClass('is-valid');
        $('#number').removeClass('is-invalid');
        $('#alertNumberCard').css('display' , 'none');
    }
    else
    {
        $('#number').addClass('is-invalid');
        $('#number').removeClass('is-valid');
        $('#alertNumberCard').css('display' , 'block');
    }
}

let checkDate;
function validCard(){
    let regexDate = /^([0-9]|10|11|12)\/202[3-8]$/;
    checkDate = regexDate.test($('#date').val());
    if(checkDate == true)
    {
        $('#date').addClass('is-valid');
        $('#date').removeClass('is-invalid');
        $('#alertdateCard').css('display' , 'none');
    }
    else
    {
        $('#date').addClass('is-invalid');
        $('#date').removeClass('is-valid');
        $('#alertdateCard').css('display' , 'block');
    }
}

let checkCvv;
function validCvv(){
    let regexCvv = /^[0-9]{3}$/;
    checkCvv = regexCvv.test($('#passwordCvv').val());
    if(checkCvv == true)
    {
        $('#passwordCvv').addClass('is-valid');
        $('#passwordCvv').removeClass('is-invalid');
        $('#alertpasswordCvvCard').css('display' , 'none');
    }
    else
    {
        $('#passwordCvv').addClass('is-invalid');
        $('#passwordCvv').removeClass('is-valid');
        $('#alertpasswordCvvCard').css('display' , 'block');
    }
}

$('#nameCard').on('input' , function(){
    validNameCard();
})

$('#number').on('input' , function(){
    validNumberCard();
})

$('#date').on('input' , function(){
    validCard();
})

$('#passwordCvv').on('input' , function(){
    validCvv();
})


$('#confirm').click(function(){
    validConfirm();
})

// validation confirm...

function validConfirm(){

    if(checkNumberCard == true && checkNumberCard == true && checkDate == true && checkCvv == true)
    {
        $('#alertConfirm').html('Successfully Confirm');
        $('#alertConfirm').addClass('text-success');
        $('#alertConfirm').removeClass('text-danger');
    }
    else
    {
        $('#alertConfirm').html('There are Invalid fields..You should fill them correctly to Confirm');
        $('#alertConfirm').addClass('text-danger');
        $('#alertConfirm').removeClass('text-success');
    }
}


// to change img card 

let radios = Array.from(document.querySelectorAll('.inputs-radio .radio-input input'));
let imgRadio = document.querySelector('.number-card img');

for(let radio of radios){
    radio.addEventListener('click' , ()=>{
        let text = radio.value;

        if(text == 'Master Card'){
            imgRadio.removeAttribute('src');
            imgRadio.setAttribute('src' , 'imgs/check-out/Master card Icon.png');
        }
        else if(text == 'Mada(مدى)'){
            imgRadio.removeAttribute('src');
            imgRadio.setAttribute('src' , 'imgs/check-out/Layer 0.png');
        }
        else if(text == 'Bank Transfer'){
            imgRadio.removeAttribute('src');
            imgRadio.setAttribute('src' , 'imgs/check-out/bank-transfer 1.png');
        };
    })
}


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

