

// validation ...

$('#register').click(()=>{
    if(checkName == true && checkPhone == true && checkEmail == true && checkPass == true && checkRepass == true && !isEmailExist()){
        $('#alertSignup').html('Successfully Registered');
        $('#alertSignup').addClass('text-success');
        $('#alertSignup').removeClass('text-danger');
        addUser();
        setTimeout(() => {
            $(location).prop('href', 'signIn.html')
        }, 2000);
    }
    else if(isEmailExist()){
        $('#alertSignup').html('This email already exist.. Try another Entry');
        $('#alertSignup').addClass('text-danger');
        $('#alertSignup').removeClass('text-success');
    }
    else if(checkName != true || checkPhone != true || checkEmail != true || checkPass != true || checkRepass != true){
        $('#alertSignup').html('There are Invalid fields.. You should fill them correctly');
        $('#alertSignup').addClass('text-danger');
        $('#alertSignup').removeClass('text-success');
    }
})



// Check data in local storage
export let users;
// export JSON.parse(localStorage.getItem('ZariUsers'));
if (JSON.parse(localStorage.getItem('ZariUsers')) != null)
{
    users = JSON.parse(localStorage.getItem('ZariUsers'));
}
else
{
    users = [];
}


//... add a new user in local Storage...
function addUser(){
    let user = {
        name : $('#name').val(),
        phone : $('#phone').val(),
        email : $('#email').val(),
        password : $('#password').val()
    }
    users.push(user);
    localStorage.setItem('ZariUsers' , JSON.stringify(users));
}


//...test Is the email Exist ?...
function isEmailExist(){
    for(let i = 0; i < users.length; i++){
        if(users[i].email == $('#email').val())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}



// Validation...

// for name 

 let checkName;
 function validUserName(){
    let regexName = /^[A-Z][a-z- ]{2,15}$/;
    checkName = (regexName.test($('#name').val()));
    if(checkName == true)
    {
        $('#name').addClass('is-valid');
        $('#name').removeClass('is-invalid');
        $('#alertName').css('display' , 'none');
    }
    else
    {
        $('#name').addClass('is-invalid');
        $('#name').removeClass('is-valid');
        $('#alertName').css('display' , 'block');
    }
}

// for phone 

 let checkPhone;
 function validUserPhone(){
    let regexPhone = /^(002)?(01)[0125][0-9]{8}$/;
    checkPhone = regexPhone.test($('#phone').val());
    if(checkPhone == true)
    {
        $('#phone').addClass('is-valid');
        $('#phone').removeClass('is-invalid');
        $('#alertPhone').css('display' , 'none');
    }
    else
    {
        $('#phone').addClass('is-invalid');
        $('#phone').removeClass('is-valid');
        $('#alertPhone').css('display' , 'block');
    }
}

// for email 

 let checkEmail;
 function validUserEmail(){
    let regexEmail = /^[a-zA-Z0-9_]{3,15}(@gmail\.com)$/;
    checkEmail = regexEmail.test($('#email').val());
    if(checkEmail == true)
    {
        $('#email').addClass('is-valid');
        $('#email').removeClass('is-invalid');
        $('#alertEmail').css('display' , 'none');
    }
    else
    {
        $('#email').addClass('is-invalid');
        $('#email').removeClass('is-valid');
        $('#alertEmail').css('display' , 'block');
    }
}

// for password 

 let checkPass;
 function validUserPass(){
    let regexPass =/^(?:[0-9]+[a-zA-Z]|[a-zA-Z]+[0-9])(?:[a-zA-Z0-9 ]{6,})$/;
    checkPass = regexPass.test($('#password').val());
    if(checkPass == true)
    {
        $('#password').addClass('is-valid');
        $('#password').removeClass('is-invalid');
        $('#alertPassword').css('display' , 'none');
    }
    else
    {
        $('#password').addClass('is-invalid');
        $('#password').removeClass('is-valid');
        $('#alertPassword').css('display' , 'block');
    }
}

// for repassword 

 let checkRepass;
 function validUserRepass(){
    $('#repassword').val() == $('#password').val() != '' ? checkRepass = true : checkRepass = false;
    if(checkRepass == true)
    {
        $('#repassword').addClass('is-valid');
        $('#repassword').removeClass('is-invalid');
        $('#alertRePass').css('display' , 'none');
    }
    else
    {
        $('#repassword').addClass('is-invalid');
        $('#repassword').removeClass('is-valid');
        $('#alertRePass').css('display' , 'block');
    }
}


$('#name').on('input' , function(){
    validUserName();
})

$('#email').on('input' , function(){
    validUserEmail();
})

$('#phone').on('input' , function(){
    validUserPhone();
})

$('#password').on('input' , function(){
    validUserPass();
})

$('#repassword').on('input' , function(){
    validUserRepass();
})
