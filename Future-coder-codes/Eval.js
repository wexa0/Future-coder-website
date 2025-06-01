const stars = document.querySelectorAll('.course-rate i');

stars.forEach(star => {
    star.addEventListener('click', function() {
        let rating = this.getAttribute('data-value');
        let currentRating = document.querySelector('.course-rate .selected')?.getAttribute('data-value');

        if(currentRating === rating) {
            deselectStars();
        } else {
            updateRatingDisplay(rating);
        }
    });
});

function updateRatingDisplay(rating) {
    deselectStars(); 
    stars.forEach(star => {
        if(star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
            star.style.color = '#fff833';
        }
    });

    console.log('Rated:', rating);
}

function deselectStars() {
    stars.forEach(star => {
        star.classList.remove('selected');
        star.style.color = 'initial'; 
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enrollment-form');
    const courseSelect = document.getElementById('course-name');
    const stars = document.querySelectorAll('.course-rate i');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = this.dataset.value;
            updateStarDisplay(selectedRating);
        });
    });

    function updateStarDisplay(rating) {
        stars.forEach(star => {
            star.style.color = star.dataset.value <= rating ? '#fff833' : '#000000';
        });
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
    
        let errorMessage = "";
        if(courseSelect.value === "") {
            errorMessage += "Please select a course. ";
        }
        if(selectedRating === 0) {
            errorMessage += "Please select a rating.";
        }
    
        if(errorMessage) {
            alert(errorMessage);
        } else {
            alert(`Thank you for your feedback!\nYour rating for course ${courseSelect.options[courseSelect.selectedIndex].text} is ${selectedRating}`);
    
            form.reset(); 
    
            selectedRating = 0;
            updateStarDisplay(selectedRating);
        }
    });
});



