const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");
const btn = document.querySelector(".btn");
// const registerr = document.querySelector(".btnn");

btn.addEventListener("Click",() => {
    window.alert('login successful');
});

// registerr.addEventListener("Click", () => {
//     alert('Registeration successful');
// });

// btn.addEventListener("Click",() => {
//     window.alert('login successful');
// });


    registerlink.addEventListners("Click",()=>{
        wrapper.classList.add("active");
    }); 

    loginlink.addEventListners("Click",()=>{
        wrapper.classList.remove("active");
    });









    // document.getElementById('registrationForm').addEventListener('submit', function(event) {
    //     event.preventDefault();
        
    //     const password = document.getElementById('password').value;
    //     const confirmPassword = document.getElementById('confirmPassword').value;
    //     const errorMessage = document.getElementById('error-message');
        
    //     if (password !== confirmPassword) {
    //         errorMessage.textContent = 'Passwords do not match!';
    //     } else {
    //         errorMessage.textContent = '';
    //         alert('Registration successful!');
    //         // Here you could also send the form data to the server if needed.
    //     }
    // });
    