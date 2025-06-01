

document.addEventListener('DOMContentLoaded', function () {
  var sortingSelect = document.getElementById('sorting');
  var allTutorsContainer = document.getElementById('allTutors');
  var tutorCards = Array.from(document.querySelectorAll('.tutorCard'));

  function sortTutorsAlphabetically() {
    var sortedTutors = tutorCards.sort(function (a, b) {
      var nameA = a.getAttribute('data-sort-key').toUpperCase();
      var nameB = b.getAttribute('data-sort-key').toUpperCase();
      return nameA.localeCompare(nameB);
    });

    allTutorsContainer.innerHTML = '';
    sortedTutors.forEach(function (tutor) {
      allTutorsContainer.appendChild(tutor.cloneNode(true));
    });
  }

  function sortTutorsReverseAlphabetically() {
    var sortedTutors = tutorCards.sort(function (a, b) {
      var nameA = a.getAttribute('data-sort-key').toUpperCase();
      var nameB = b.getAttribute('data-sort-key').toUpperCase();
      return nameB.localeCompare(nameA);
    });

    allTutorsContainer.innerHTML = '';
    sortedTutors.forEach(function (tutor) {
      allTutorsContainer.appendChild(tutor.cloneNode(true));
    });
  }

  sortingSelect.addEventListener('change', function () {
    var selectedOption = sortingSelect.value;

    if (selectedOption === 'ASC') {
      sortTutorsAlphabetically();
    } else if (selectedOption === 'DEC') {
      sortTutorsReverseAlphabetically();
    }
  });
});