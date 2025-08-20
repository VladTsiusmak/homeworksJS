
for (const course of coursesArray) {
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('course')
    document.body.appendChild(courseDiv);

    let courseTitle = document.createElement('h2');
    courseTitle.innerText = course.title;
    courseDiv.appendChild(courseTitle);

    let durationP = document.createElement('p');
    durationP.innerText = `Duration: ${course.monthDuration} months, ${course.hourDuration} hours`;
    courseDiv.appendChild(durationP);

    let modulesUl = document.createElement('ul');
    modulesUl.classList.add('modules');
    courseDiv.appendChild(modulesUl);

    for (const item of course.modules) {
        let moduleLi = document.createElement('li');
        moduleLi.innerText = item;
        modulesUl.appendChild(moduleLi);
    }
}
