document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    //for course 1
    const course1Credit = document.getElementById('course_1_credit');
    const course1CreditText = course1Credit.value;
    const course1CreditValue = parseFloat(course1CreditText);
    // console.log(course1CreditValue);

    const course1Grade = document.getElementById('course_1_gp');
    const course1GradeText = course1Grade.value;
    const course1GradeValue = parseFloat(course1GradeText);
    //console.log(course1GradeValue);

    //for course 2
    const course2Credit = document.getElementById('course_2_credit');
    const course2CreditText = course2Credit.value;
    const course2CreditValue = parseFloat(course2CreditText);
    //console.log(course2CreditValue);

    const course2Grade = document.getElementById('course_2_gp');
    const course2GradeText = course2Grade.value;
    const course2GradeValue = parseFloat(course2GradeText);
    //console.log(course2GradeValue);

    //for course 3
    const course3Credit = document.getElementById('course_3_credit');
    const course3CreditText = course3Credit.value;
    const course3CreditValue = parseFloat(course3CreditText);
    //console.log(course3CreditValue);

    const course3Grade = document.getElementById('course_3_gp');
    const course3GradeText = course3Grade.value;
    const course3GradeValue = parseFloat(course3GradeText);
    //console.log(course3GradeValue);

    //for course 4
    const course4Credit = document.getElementById('course_4_credit');
    const course4CreditText = course4Credit.value;
    const course4CreditValue = parseFloat(course4CreditText);
    // console.log(course4CreditValue);

    const course4Grade = document.getElementById('course_4_gp');
    const course4GradeText = course4Grade.value;
    const course4GradeValue = parseFloat(course4GradeText);
    // console.log(course4GradeValue);

    course1Credit.value = '';
    course1Grade.value = '';
    course2Credit.value = '';
    course2Grade.value = '';
    course3Credit.value = '';
    course3Grade.value = '';
    course4Credit.value = '';
    course4Grade.value = '';


    //CGPA calculation
    const productOfGpAndCredit = (course1CreditValue * course1GradeValue) + (course2CreditValue * course2GradeValue) + (course3CreditValue * course3GradeValue) + (course4CreditValue * course4GradeValue);
    //console.log(productOfGpAndCredit);

    const sumOfCredit = course1CreditValue + course2CreditValue + course3CreditValue + course4CreditValue;
    //console.log(sumOfCredit);

    const cgpa = productOfGpAndCredit / sumOfCredit;
    //console.log(cgpa);

    //show sgpa on UI
    document.getElementById('grade-point').innerText = cgpa.toFixed(2);

    //show grade & status on UI
    if (cgpa >= 0 && cgpa < 2.00) {
        document.getElementById('grade').innerText = 'F';
        document.getElementById('status').innerText = 'Fail';
    }
    else if (cgpa >= 2.00 && cgpa < 2.25) {
        document.getElementById('grade').innerText = 'D';
        document.getElementById('status').innerText = 'Pass';
    }
    else if (cgpa >= 2.25 && cgpa < 2.50) {
        document.getElementById('grade').innerText = 'C';
        document.getElementById('status').innerText = 'Below Average';
    }
    else if (cgpa >= 2.50 && cgpa < 2.75) {
        document.getElementById('grade').innerText = 'C+';
        document.getElementById('status').innerText = 'Average';
    }
    else if (cgpa >= 2.75 && cgpa < 3.00) {
        document.getElementById('grade').innerText = 'B-';
        document.getElementById('status').innerText = 'Above Average';
    }
    else if (cgpa >= 3.00 && cgpa < 3.25) {
        document.getElementById('grade').innerText = 'B';
        document.getElementById('status').innerText = 'Satisfactory';
    }
    else if (cgpa >= 3.25 && cgpa < 3.50) {
        document.getElementById('grade').innerText = 'B+';
        document.getElementById('status').innerText = 'Good';
    }
    else if (cgpa >= 3.50 && cgpa < 3.75) {
        document.getElementById('grade').innerText = 'A-';
        document.getElementById('status').innerText = 'Very Good';
    }
    else if (cgpa >= 3.75 && cgpa < 4.00) {
        document.getElementById('grade').innerText = 'A';
        document.getElementById('status').innerText = 'Excellent';
    }
    else if (cgpa == 4.00) {
        document.getElementById('grade').innerText = 'A+';
        document.getElementById('status').innerText = 'Outstanding';
    }



})