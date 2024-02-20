const courseForm = document.getElementById("register-form");

courseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = document.getElementById("name");
    const course = document.getElementById("userCourse");
    const userJamb = document.getElementById("jambScore");
    const userPostJamb = document.getElementById("postJambScore");
    const userGradeSpan = document.getElementById("user-grade");
    const userGradeNegative = document.getElementById("user-grade");


    const cutOffMark = 25;
    const isQualified = ((parseFloat(userJamb.value) / 2  + parseFloat(userPostJamb.value) / 2) / 2) - cutOffMark;
    const isQualifiedPercent = `${isQualified}%`;
    const gradeText = document.getElementById("user-grade-text");

    if(jambScore.value < 0 || jambScore.value > 400){
        document.getElementById("user-grade").style.display = "none";
        gradeText.style.display = "none";
        jambScore.setCustomValidity(`Your Jamb Score must be between 0 and 400`);
        jambScore.reportValidity();
    } else{
        document.getElementById("user-grade").style.display = "block";
        gradeText.style.display = "block";
    }

    if(userPostJamb.value < 0 || userPostJamb.value > 100){
        document.getElementById("user-grade").style.display = "none";
        gradeText.style.display = "none";
        userPostJamb.setCustomValidity(`Your Post Jamb Score must be between 0 and 100`);
        userPostJamb.reportValidity();
    } else{
        document.getElementById("user-grade").style.display = "block";
        gradeText.style.display = "block";
    }

    if(isQualified >= 50){  
     document.getElementById("user-grade").innerHTML = isQualifiedPercent;
     userGradeSpan.style.color = "green";
    gradeText.innerHTML = `Congratulations! ${userName.value}, you are qualified for ${course.value} course!`;;
    gradeText.style.color = "green";

    } else {
        document.getElementById("user-grade").innerHTML = isQualifiedPercent;
     document.getElementById("user-grade").style.color = "red";

    const scoreLeft = 50 - isQualified;
    gradeText.innerHTML = `Sorry! ${userName.value}, you are not qualified for ${course.value} course!. ${scoreLeft} points remaining!`;
    gradeText.style.color = "red";
    } 

});

const cutPieces = function (fruit){
    return fruit * 4;
};

const fruitProcessor =  function (apples, oranges){

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice;
}
fruitProcessor(2,3);

//THREE DIFFERENT FUNCTION TYPES
// 1) FUNCTION DECLARATION - this means the function can be used before it's declared
function calcAge (birthYear) {
    return 2037 - birthYear;
} 
// FUNCTION EXPRESSION - when the function value is stored in a variable.
const calcAge = function (birthYear){
return 2037 - birthYear;
}

// ARROW FUNCTION
const calcAge = birthYear => 2037 - birthYear;

// Three different ways of writing function - input data, transform data and output data.
function calcAge(birthYear, fistName){
    const age = 2037 - birthYear;
    console.log(`${firstName} is ${age} old.`);
    return age; 
}

const age = calcAge(1991, 'Jones');

// A Software bug is a defect or problem or error in a program.
// Bugs are completely normal in software development

// Debugging is a way of finding,fixing and preventing bugs.

// A real bug which was causing an error in Harvard's computer in 1940.

const ClassModals = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
overlay.addEventListener("click", ClassModals);

task = [ 'code', 'Eat', 'code']; //Arrays
task = new Set(['code', 'Eat', 'code']); //Sets
task = {
    task: 'Code',
    date: 'today',
    repeat: true
}
task = new Map ([
    ['task', 'Code'],
    ['date', 'today'],
    [false, 'Start coding!']
]);