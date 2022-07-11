

// Check data in local storage
let users;
if (JSON.parse(localStorage.getItem('ZariUsers')) != null)
{
    users = JSON.parse(localStorage.getItem('ZariUsers'));
}
else
{
    users = [];
}


// ...verification...

let login = document.getElementById('enter-page')
login.addEventListener('click', loginPage);

function loginPage(){
    let passwordSignin = document.getElementById('password-signin');
    let textSignin = document.getElementById('text-signin');
    let text = textSignin.value;
    let pass = passwordSignin.value;
    let alertSignin = document.getElementById('alertSignin')
    if(text == '' || pass == ''){
        alertSignin.innerHTML = 'All Fields are important..';
        alertSignin.classList.add('text-danger');
    }
    else{
        for(var i = 0; i < users.length; i++){
            if((text == users[i].email || text == users[i].phone) && pass == users[i].password ){
                alertSignin.innerHTML = `Hello ${users[i].name}`;
                alertSignin.classList.add('text-success');
                return true;
            }
            else
            {
                alertSignin.innerHTML = 'There is an error in Email, Password or Both..';
                alertSignin.classList.add('text-danger');
                return false;
            }
        }
    }
}
