let Button = document.getElementById("drpbtn");
let menu = document.getElementById("dropdown");
let menubtn = document.getElementById("button");
let mainPage = document.getElementById("mainpage");

Button.addEventListener("click", () => {
    menu.style.display = 'block';
    mainPage.style.display = 'none';
})

menubtn.addEventListener("click", () => {
    menu.style.display = 'none';
    mainPage.style.display = 'block';
})