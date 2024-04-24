let formHeading = document.querySelector(".heading");
let underline = document.querySelector(".underline");
let inputsCtnr = document.querySelector(".all-inp-ctnr-inner");
let pswdSugg = document.querySelector(".pwd-sugg");
let signUpBtn = document.querySelector("#sign-up-btn");
let signInBtn = document.querySelector("#sign-in-btn");

signUpBtn.style.background = `rgba(47, 62, 55, 0.4)`;
signUpBtn.style.color = `white`;

const updateFormHeading = (element , newText) => {
    element.innerText = newText;
};

const slideTheUnderline = (element , userVal) => {
    element.style.marginLeft = `${userVal}rem`;
};

const hideNameInput = (element , userVal) => {
    element.style.transform = `translateY(${userVal}rem)`;
};

const changeColorOfBtn = (element , element2) => {
    element.style.background = `rgba(47, 62, 55, 0.4)`;
    element.style.color = `white`;
    element2.style.background = `white`;
    element2.style.color = `black`;
};

signInBtn.addEventListener("click" , () => {
    updateFormHeading(formHeading , `sign in`);
    updateFormHeading(pswdSugg , `lost password`);
    slideTheUnderline(underline , 6.5);
    hideNameInput(inputsCtnr , -5);
    changeColorOfBtn(signInBtn , signUpBtn);
});

signUpBtn.addEventListener("click" , () => {
    updateFormHeading(formHeading , `sign up`);
    updateFormHeading(pswdSugg , `password suggestions`);
    slideTheUnderline(underline , 0);
    hideNameInput(inputsCtnr , 0);
    changeColorOfBtn(signUpBtn , signInBtn);
});