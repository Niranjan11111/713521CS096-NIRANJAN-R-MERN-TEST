// home

function toggleLoginLogout() {
    const loginLogoutBtn = document.getElementById('login-logout-btn');
    if (localStorage.getItem('loggedIn') === 'true') {
        localStorage.removeItem('loggedIn');
        alert('You have been logged out.');
        loginLogoutBtn.innerText = 'Log In';
        window.location.href = "login.html";
    } else {
        window.location.href = "login.html";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginLogoutBtn = document.getElementById('login-logout-btn');
    if (localStorage.getItem('loggedIn') === 'true') {
        loginLogoutBtn.innerText = 'Log Out';
    } else {
        loginLogoutBtn.innerText = 'Log In';
    }
});

// login

function showRegister() {
    document.getElementById('register-section').classList.add('active');
    document.getElementById('login-section').classList.remove('active');
}

function showLogin() {
    document.getElementById('register-section').classList.remove('active');
    document.getElementById('login-section').classList.add('active');
}

function storeData() {
    const studentName = document.getElementById('student-name').value;
    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;

    const studentInfo = {
        studentName,
        department,
        year,
        timestamp: Date.now()
    };

    localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
    alert('Student information saved!');
}

function login() {
    const loginName = document.getElementById('login-name').value;
    const loginDepartment = document.getElementById('login-department').value;
    const loginYear = document.getElementById('login-year').value;

    const storedInfo = JSON.parse(localStorage.getItem('studentInfo'));

    if (!storedInfo) {
        alert('No student information found. Please register first.');
        return;
    }

    const currentTime = Date.now();
    const storedTime = storedInfo.timestamp;

    const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours

    if (currentTime - storedTime > EXPIRATION_TIME) {
        localStorage.removeItem('studentInfo');
        alert('Session expired. Please register again.');
        showRegister();
        return;
    }

    if (storedInfo.studentName === loginName &&
        storedInfo.department === loginDepartment &&
        storedInfo.year === loginYear) {
        // alert('Login successful!');
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "home.html";
    } else {
        alert('Login failed. Please check your credentials.');
    }
}

function submit(){
    alert('Your form has been submitted and our team will contact you soon')
}