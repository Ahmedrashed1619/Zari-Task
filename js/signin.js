

import { users } from "./signup.js";

// ...verification...
let login = document.getElementById('enter-page')
login.addEventListener('click', loginPage);

function loginPage(){

    let passwordSignin = document.getElementById('password-signin');
    let textSignin = document.getElementById('text-signin');
    let text = textSignin.value;
    let pass = passwordSignin.value;
    let alertSignin = document.getElementById('alertSignin');

    if(text == '' || pass == ''){
        alertSignin.innerHTML = 'All Fields are important..';
        alertSignin.classList.add('text-danger');
        alertSignin.classList.remove('text-success');
    }

    if(JSON.parse(localStorage.getItem('ZariUsers')) == null && text != '' && pass != ''){
        alertSignin.innerHTML = 'There is an error in Email, please make a registration first..';
        alertSignin.classList.add('text-danger');
        alertSignin.classList.remove('text-success');
    }
    
    else{
        for(let i = 0; i < users.length; i++){
            if(text == users[i].email || text == users[i].phone && pass == users[i].password ){
                alertSignin.innerHTML = `Hello ${users[i].name}..`;
                alertSignin.classList.add('text-success');
                alertSignin.classList.remove('text-danger');
                return true;
            }
            else
            {
                alertSignin.innerHTML = 'There is an error in Email, please make a registration first..';
                alertSignin.classList.add('text-danger');
                alertSignin.classList.remove('text-success');
                return false;
            }
        }
    }
}
