const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    let today = new Date();

    let birthDetails = {
        date: document.querySelector("input[name='inputDay']").value,
        month: document.querySelector("input[name='inputMonth']").value,
        year: document.querySelector("input[name='inputYear']").value
    }

    let currentDate = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    leapChecker(currentYear);

    if (currentYear < birthDetails.year ||
        (currentMonth < birthDetails.month && currentYear == birthDetails.year) ||
        (currentDate < birthDetails.date && currentMonth == birthDetails.month &&
            currentYear == birthDetails.year)) {
        alert('Not born yet');
        displayResult("-", "-", "-");
        return;
    } 

    let birthYear = currentYear - birthDetails.year;
    let birthMonth, birthDate;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }

    displayResult(birthDate, birthMonth, birthYear);
}

function displayResult(bDate, bMonth, bYear) {
    document.getElementById("year").textContent = bYear;
    document.getElementById("month").textContent = bMonth;
    document.getElementById("day").textContent = bDate;
}

function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}
