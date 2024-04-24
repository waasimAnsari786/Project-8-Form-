let formHeading = document.querySelector(".heading");
let underline = document.querySelector(".underline");
let nameInput = document.querySelector("#name-input-sec");
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

const hideNameInput = (element) => {
    element.style.display = `none`;
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
    hideNameInput(nameInput);
    changeColorOfBtn(signInBtn , signUpBtn);
});