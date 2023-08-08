let dropDownButton = document.getElementById('dropbtn');
let dropDownMenu = document.getElementById('dropdown-menu');
let buttonArrow = document.getElementById('arrow');
let buttonCardElement = document.getElementById('lastbtn');
let buttonGoBack = document.getElementById('go-back-btn');
let mainContainer = document.getElementById('main-container');
let feedbackContainer = document.getElementById('feedback-container');
let addFeedbackButton = document.getElementById('add-feedback');
let createFeedbackContainer = document.getElementById('create-fb-container');
let createGoBackButton = document.getElementById('create-go-back-btn');
let cancelButton = document.getElementById('firstbtn');
let editFeedbackContainer = document.getElementById('edit-fb-container');
let editCancelButton = document.getElementById('editfirstbtn');
let editGoBackButton = document.getElementById('edit-go-back-btn');
let editFeedBackButton = document.getElementById('editfbbtn');
let roadmapButton = document.getElementById('roadmapbtn');
let mobileRoadmapButton = document.getElementById('mobile-roadmapbtn');
let roadmapContainer = document.getElementById('roadmap-container');
let rmGoBackButton = document.getElementById('rm-go-back-btn');
let mobileDesign = document.getElementById('mobile-design');
let crossButton = document.getElementById('cross');
let menuButton = document.getElementById('menu');
let backgroundBlock = document.getElementById('block');
let plannedPage = document.getElementById('planned-page');
let inProgressPage = document.getElementById('in-progress-page');
let livePage = document.getElementById('live-page');
let plannedBtn = document.getElementById('nav-planned');
let inProgressBtn = document.getElementById('nav-in-progress');
let liveBtn = document.getElementById('nav-live');

dropDownButton.addEventListener('click', () => {
    if(dropDownMenu.style.display === 'none'){
        dropDownMenu.style.display = 'block';
        buttonArrow.style.transform = 'rotate(90deg)';
    }
    else {
        dropDownMenu.style.display = 'none';
        buttonArrow.style.transform = 'rotate(270deg)';
    }
})

buttonCardElement.addEventListener('click', () => {
        feedbackContainer.style.display = 'flex';
        mainContainer.style.display = 'none';
})

buttonGoBack.addEventListener('click', () => {
        mainContainer.style.display = 'flex';
        feedbackContainer.style.display = 'none';
})

addFeedbackButton.addEventListener('click', () => {
    createFeedbackContainer.style.display = 'block'
    mainContainer.style.display = 'none';
})

createGoBackButton.addEventListener('click', () => {
    mainContainer.style.display = 'flex';
    createFeedbackContainer.style.display = 'none';
})

cancelButton.addEventListener('click', () => {
    mainContainer.style.display = 'flex';
    createFeedbackContainer.style.display = 'none';
})

editFeedBackButton.addEventListener('click', () => {
    editFeedbackContainer.style.display = 'block';
    feedbackContainer.style.display = 'none';
})

editGoBackButton.addEventListener('click', () => {
    feedbackContainer.style.display = 'block';
    editFeedbackContainer.style.display = 'none';
})

editCancelButton.addEventListener('click', () => {
    feedbackContainer.style.display = 'block';
    editFeedbackContainer.style.display = 'none';
})

roadmapButton.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    roadmapContainer.style.display = 'block';
})
mobileRoadmapButton.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    roadmapContainer.style.display = 'block';
})

rmGoBackButton.addEventListener('click', () => {
    roadmapContainer.style.display = 'none';
    mainContainer.style.display = 'flex';
})

menuButton.addEventListener('click', () => {
    menuButton.style.display = 'none';
    crossButton.style.display = 'block';
    mobileDesign.style.display = 'block';
    backgroundBlock.style.display = 'block';
    document.body.style.overflow = 'hidden';
})

crossButton.addEventListener('click', () => {
    crossButton.style.display = 'none';
    menuButton.style.display = 'block';
    mobileDesign.style.display = 'none';
    backgroundBlock.style.display = 'none';
    document.body.style.overflow = 'auto';
})

plannedBtn.addEventListener('click', () => {
    plannedPage.style.display = 'flex';
    inProgressPage.style.display = 'none';
    livePage.style.display = 'none';
    plannedBtn.style.borderBottom = '3px solid #F49F85'
    inProgressBtn.style.borderBottom = 'none';
    liveBtn.style.borderBottom = 'none';
    plannedBtn.style.color = 'black';
    inProgressBtn.style.color = '#647196';
    liveBtn.style.color = '#647196';
})
inProgressBtn.addEventListener('click', () => {
    plannedPage.style.display = 'none';
    inProgressPage.style.display = 'flex';
    livePage.style.display = 'none';
    plannedBtn.style.borderBottom = 'none'
    inProgressBtn.style.borderBottom = '3px solid #AD1FEA';
    liveBtn.style.borderBottom = 'none';
    plannedBtn.style.color = '#647196';
    inProgressBtn.style.color = 'black';
    liveBtn.style.color = '#647196';
})
liveBtn.addEventListener('click', () => {
    plannedPage.style.display = 'none';
    inProgressPage.style.display = 'none';
    livePage.style.display = 'flex';
    plannedBtn.style.borderBottom = 'none'
    inProgressBtn.style.borderBottom = 'none';
    liveBtn.style.borderBottom = '3px solid #62BCFA';
    plannedBtn.style.color = '#647196';
    inProgressBtn.style.color = '#647196';
    liveBtn.style.color = 'black';
})