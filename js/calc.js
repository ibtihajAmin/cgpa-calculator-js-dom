document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    //for course 1
    const course1Credit = document.getElementById('course_1_credit');
    const course1CreditText = course1Credit.value;
    const course1CreditValue = parseFloat(course1CreditText);
    console.log(course1CreditValue);

    const course1Grade = document.getElementById('course_1_gp');
    const course1GradeText = course1Grade.value;
    const course1GradeValue = parseFloat(course1GradeText);
    console.log(course1GradeValue);

    //for course 2
    const course2Credit = document.getElementById('course_2_credit');
    const course2CreditText = course2Credit.value;
    const course2CreditValue = parseFloat(course2CreditText);
    console.log(course2CreditValue);

    const course2Grade = document.getElementById('course_2_gp');
    const course2GradeText = course2Grade.value;
    const course2GradeValue = parseFloat(course2GradeText);
    console.log(course2GradeValue);

    //for course 3
    const course3Credit = document.getElementById('course_3_credit');
    const course3CreditText = course3Credit.value;
    const course3CreditValue = parseFloat(course3CreditText);
    console.log(course3CreditValue);

    const course3Grade = document.getElementById('course_3_gp');
    const course3GradeText = course3Grade.value;
    const course3GradeValue = parseFloat(course3GradeText);
    console.log(course3GradeValue);

    //for course 4
    const course4Credit = document.getElementById('course_4_credit');
    const course4CreditText = course4Credit.value;
    const course4CreditValue = parseFloat(course4CreditText);
    console.log(course4CreditValue);

    const course4Grade = document.getElementById('course_4_gp');
    const course4GradeText = course4Grade.value;
    const course4GradeValue = parseFloat(course4GradeText);
    console.log(course4GradeValue);

})