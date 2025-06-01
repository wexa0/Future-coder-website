document.addEventListener('DOMContentLoaded', function () {
    // Function to get the start date of the current week (Sunday)
    function getStartOfWeek() {
        var today = new Date();
        var dayOfWeek = today.getDay();
        var startDate = new Date(today);
        startDate.setDate(today.getDate() - dayOfWeek);
        return startDate;
    }
    // Function to format the date as "dd month yyyy"
    function formatDate(date) {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    // Get the start date of the current week
    var startOfWeek = getStartOfWeek();

    // Display the current week's start date on the page
    var currentDateElement = document.getElementById('startWeek');
    currentDateElement.textContent = 'This week starts on ' + formatDate(startOfWeek);
});



document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'more'
    var viewMoreButtons = document.querySelectorAll('.more');

    // Add click event listener to each 'View More' button
    viewMoreButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Traverse the DOM to find the correct additional content
            var parentContainer = button.parentElement;
            var additionalContent = parentContainer ? parentContainer.querySelector('.additional-content') : null;

            var isVisible = additionalContent.style.display !== 'none';
            additionalContent.style.display = isVisible ? 'none' : 'block';

            // Update the data attribute to reflect the current visibility state
            button.setAttribute('data-visible', !isVisible);

            // Move the button to the bottom
            parentContainer.appendChild(button);

            // Change the button text
            button.textContent = isVisible ? 'view More...' : 'view Less...';
    });
    });
});


/*const parentContainer = document.querySelector('.more-container');
parentContainer.addEventListener('click',event=>{
   const current = event.target;
   const isMorebtn = current.className.includes('view more');
   if(!isMorebtn) return;
   const currentText = current.parentNode.querySelector
   ('.more-items');
   currentText.classList.toggle('more-items--show');
   current.textContent = current.textContent.includes('view more')?
   "view less..." : "view more...";
})*/