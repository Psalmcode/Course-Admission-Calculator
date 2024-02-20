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