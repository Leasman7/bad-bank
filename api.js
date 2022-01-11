// context is globally shared
const ctx = {
    "accounts": [
        {
        "name": "peter",
        "email": "peter@mit.edu",
        "balance": 0,
        "password": "secret"
        }
    ]
}

function create() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const status = document.getElementById('createStatus');
    ctx.accounts.push({
        name: name.value,
        email: email.value,
        password: password.value,
        balance: 0,
    });
    //updata status & clear form
    name.value = '';
    email.value = '';
    password.value = '';
    status.innerHTML = 'Account Created';
}

function allData() {
    const status = document.getElementById('allDataStatus');
    status.innerHTML = JSON.stringify(ctx.accounts);
}

function login() {
    const status = document.getElementById('loginStatus');
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');
    if (Object.values(ctx.accounts).includes(email) && Object.value(ctx.accounts).includes(password)) {
        email.value = '';
        password.value = '';
        status.innerHTML = 'Successfully logged into account';
    } else {
        status.innerHTML = 'Please login using valid email and password'
    }
}