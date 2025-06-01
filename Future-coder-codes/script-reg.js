function validate() {
    var fullname = document.getElementById('fullname').value;
    var fileInput = document.getElementById('imageUpload');
    var photo = fileInput.files[0];
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var dobDate = new Date(dob);

    var genderRadios = document.getElementsByName('Gender');
    var isGenderSelected = false;
    var selectedGender = '';

    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            isGenderSelected = true;
            selectedGender = genderRadios[i].value;
            break;
        }
    }

    if (fullname.trim() === '') {
        alert('Please enter a Full Name.');
        return false;
    }

    if (!isNaN(fullname.charAt(0))) {
        alert('Full Name cannot start with a number.');
        return false;
    }

    if (!isGenderSelected) {
        alert('Please select a gender.');
        return false;
    }

    if (dob.trim() === '') {
        alert('Please enter a date of birth.');
        return false;
    }

    if (dobDate.getFullYear() > 2017) {
        alert('Sorry, children younger than 6 years old are not accepted.');
        return false;
    }
    if (!photo) {
        alert('Please upload a photo.');
        return false;
    }

    if (tel.trim() === '') {
        alert('Please enter a phone number.');
        return false;
    }

    if (tel.length !== 10) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    if (email.trim() === '') {
        alert('Please enter an email address.');
        return false;
    }


    displayPrintableView(fullname, selectedGender, dob, tel, email, photo);

    var reader = new FileReader();
    reader.onload = function (event) {
        var kid = {
            fullname: fullname,
            gender: selectedGender,
            dob: dob,
            photo: event.target.result,
            phone: tel,
            email: email
        };

        var kidsArray = JSON.parse(localStorage.getItem('registeredKids')) || [];
        kidsArray.push(kid);
        localStorage.setItem('registeredKids', JSON.stringify(kidsArray));
    };
    reader.readAsDataURL(photo);

    alert("register is done succsesfully")
    return false; // Prevent form submission
}

function displayPrintableView(fullname, gender, dob, tel, email, photo) {
    var elements = document.querySelectorAll('body > *');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }

    var printableDiv = document.createElement('div');




printableDiv.style.border = '1px solid black';

    var img = document.createElement('img');
    img.src = URL.createObjectURL(photo);
    img.alt = 'Photo of ' + fullname;
    img.style.width = '150px';
    img.style.padding = '3 em';

    printableDiv.appendChild(img);

    printableDiv.innerHTML += '<p>Full Name: ' + fullname + '</p><p>Gender: ' + gender + '</p><p>Date of Birth: ' + dob + '</p><p>Phone: ' + tel + '</p><p>Email: ' + email + '</p>';

    document.body.appendChild(printableDiv);

    var printButton = document.createElement('button');
    printButton.innerText = 'Print';
    printButton.addEventListener('click', function () {
        window.print();
    });

    document.body.appendChild(printButton);

    var textNonte = document.createElement('h4');
    textNonte.innerHTML = 'to go back to the website, please refresh the page.';
    document.body.appendChild(textNonte);

    var style = document.createElement('style');
    style.innerHTML = `
        @media print {
            button {
                display: none;
            }

            h4{
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
}