
document.addEventListener('DOMContentLoaded', function() {
    const registeredKids = JSON.parse(localStorage.getItem('registeredKids')) || [];
    const nameSelect = document.getElementById('kid-name');

    registeredKids.forEach(kid => {
        if (kid.fullname && kid.fullname.trim() !== '') {
            const option = document.createElement('option');
            option.value = kid.fullname;
            option.textContent = kid.fullname;
            nameSelect.appendChild(option);
        }
    });
    
    const courses = [
        { name: 'java language', tutor: 'Esraa Bader', prerequisite: 'python language' },
        { name: 'Network basics', tutor: 'Abeer Fares', prerequisite: 'Cyber security basics' },
        { name: 'PHP language', tutor: 'Abdullah Ali', prerequisite: 'java language' },
        { name: 'SQL language', tutor: 'Ali Hammad', prerequisite: 'java language' },
        { name: 'Swift', tutor: 'Abdullah Ali', prerequisite: 'java language' },
        { name: 'Flutter Flow', tutor: 'Abdullah Ali', prerequisite: 'python language' },
        { name: 'python language', tutor: 'Abeer Fares', prerequisite: '' },
        { name: 'UI/UX design', tutor: 'Amany Essa', prerequisite: '' },
        { name: 'Cyber security basics', tutor: 'Manal Salem', prerequisite: '' }
    ];

    const tutorFilter = document.getElementById('tutorFilter');
    const prerequisiteFilter = document.getElementById('prerequisiteFilter');

    courses.forEach(course => {
        if (!Array.from(tutorFilter.options).some(option => option.textContent === course.tutor)) {
            const tutorOption = document.createElement('option');
            tutorOption.value = tutorOption.textContent = course.tutor;
            tutorFilter.appendChild(tutorOption);
        }

        if (course.prerequisite && !Array.from(prerequisiteFilter.options).some(option => option.textContent === course.prerequisite)) {
            const prerequisiteOption = document.createElement('option');
            prerequisiteOption.value = prerequisiteOption.textContent = course.prerequisite;
            prerequisiteFilter.appendChild(prerequisiteOption);
        }
    });

    const updateCoursesDisplay = () => {
        const selectedTutor = tutorFilter.value;
        const selectedPrerequisite = prerequisiteFilter.value;

        const courseElements = document.querySelectorAll('.course');
        courseElements.forEach(el => {
            const courseName = el.querySelector('label').textContent.trim();
            const course = courses.find(c => c.name === courseName);

            const tutorMatch = (selectedTutor === 'all' || course.tutor === selectedTutor);
            const prerequisiteMatch = (selectedPrerequisite === 'all' || course.prerequisite === selectedPrerequisite || (selectedPrerequisite === 'all' && course.prerequisite === ''));

            el.style.display = (tutorMatch && prerequisiteMatch) ? '' : 'none';
        });
    };

    tutorFilter.addEventListener('change', updateCoursesDisplay);
    prerequisiteFilter.addEventListener('change', updateCoursesDisplay);
 const form = document.getElementById('enrollment-form');
 form.addEventListener('submit', function(event) {
     event.preventDefault();

     const selectedChild = nameSelect.value;
     const selectedCourses = Array.from(document.querySelectorAll('.courses input[type="checkbox"]:checked'))
                                   .map(cb => cb.getAttribute('data-course-name'));

     let errorMessage = "";
     if (!selectedChild && selectedCourses.length === 0) {
         errorMessage = 'Please select a child and at least one course.';
     } else if (!selectedChild) {
         errorMessage = 'Please select a child.';
     } else if (selectedCourses.length === 0) {
         errorMessage = 'Please select at least one course.';
     }

     if (errorMessage) {
         alert(errorMessage);
     } else {
         const resultsDiv = document.getElementById('selectedInfo');
         resultsDiv.innerHTML = `
             <strong>Selected Child:</strong> ${selectedChild}<br>
             <strong>Selected Courses:</strong>
             <ul>${selectedCourses.map(courseName => {
                 const course = courses.find(c => c.name === courseName);
                 return course ? `<li>${course.name} (<strong>Tutor:</strong> ${course.tutor})</li>` : ` ${courseName}`;
             }).join('')}</ul>
         `;
         nameSelect.selectedIndex = 0;
         document.querySelectorAll('.courses input[type="checkbox"]').forEach(cb => cb.checked = false);
     }
 });

});