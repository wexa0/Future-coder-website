function displayRegisteredKids() {
    var kidsData = JSON.parse(localStorage.getItem('registeredKids')); 
    var container = document.getElementById('dynamicKidsContainer'); 

    if (!kidsData || kidsData.length === 0) {
        const localStorageEmpty = !localStorage.getItem('registeredKids');
        const defaultNamesExist = localStorageEmpty || (kidsData && kidsData.length === 0);

        if (defaultNamesExist) {
            const defaultKids = [
                { fullname: 'Sarah Ahmed', photo: 'image/kid1.jpg' },
                { fullname: 'Raya Ahmed', photo: 'image/kid9.jpg' }
            ];
            localStorage.setItem('registeredKids', JSON.stringify(defaultKids)); 
            kidsData = defaultKids; 
        }
    }


    kidsData.forEach(kid => {
        var kidDiv = document.createElement('div');
        kidDiv.className = 'Dashboard-kid-info'; 

        var kidInfo = `
            <div>
                <img src="${kid.photo}" class="Dashboard-kidImage" alt="Photo of ${kid.fullname}" >
            </div>
            <div>
                <h3>${kid.fullname}</h3>
            </div>
        `;
        kidDiv.innerHTML = kidInfo;

        container.appendChild(kidDiv); 
    });

    
}

document.addEventListener('DOMContentLoaded', displayRegisteredKids);
