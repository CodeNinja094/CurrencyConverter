const countryDiv = document.querySelector('#countryDiv');
const result = document.querySelector('#result');
const textarea = document.querySelector('#textarea');

let items;
let seclectedCountry1 = 'INR';
let seclectedCountry2 = 'USD';
let response;
let data;

document.querySelector('.bi-list').addEventListener('click', () => {
    document.querySelector('#menuitemdiv').style.display = 'flex';
    document.querySelector('.bi-list').style.display = 'none';
    document.querySelector('.bi-x-lg').style.display = 'block';

})
document.querySelector('.bi-x-lg').addEventListener('click', () => {
    document.querySelector('#menuitemdiv').style.display = 'none';
    document.querySelector('.bi-x-lg').style.display = 'none';
    document.querySelector('.bi-list').style.display = 'block';

})
document.querySelector('#menuitemdiv').addEventListener('click', () => {
    document.querySelector('#menuitemdiv').style.display = 'none';
    document.querySelector('.bi-x-lg').style.display = 'none';
    document.querySelector('.bi-list').style.display = 'block';

})


function setupNumberOnlyTextarea(textarea, maxLength) {
    // Prevent typing invalid chars & respect max length
    textarea.addEventListener('keypress', (e) => {
        const char = e.key;
        const allowed = /[0-9.]/;
        if (!allowed.test(char) || textarea.innerText.length >= maxLength) {
            e.preventDefault();
        }
    });

    // Enforce max length on any input (typing, delete, cut, etc)
    textarea.addEventListener('input', () => {
        if (textarea.innerText.length > maxLength) {
            textarea.innerText = textarea.innerText.slice(0, maxLength);
            // Move cursor to end
            const range = document.createRange();
            const sel = window.getSelection();
            range.selectNodeContents(textarea);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    });
}

setupNumberOnlyTextarea(textarea, 9);

// fetch json

(async function getData() {
    response = await fetch('symbol.json');
    data = await response.json();
    updateList(data);
})();

// create dropdown

function updateList(data) {
    const dropdown1 = document.querySelector("#dropdown1");
    const dropdown2 = document.querySelector("#dropdown2");
    for (const [currencyCode, currencyInfo] of Object.entries(data)) {

        const countryBar1 = document.createElement("div");
        countryBar1.classList.add('country-bar');

        const countryBar2 = document.createElement("div");
        countryBar2.classList.add('country-bar');

        const flag1 = document.createElement("div");
        flag1.classList.add('flag');

        const flag2 = document.createElement("div");
        flag2.classList.add('flag');

        const image1 = document.createElement("img");
        image1.src = `https://flagsapi.com/${currencyInfo.country_code}/flat/64.png`;
        image1.onerror = function () {
            this.onerror = null;
            this.src = 'images/dollar-symbol.png';
        };
        image1.alt = `${currencyInfo.code}`;
        image1.height = '30';

        const image2 = document.createElement("img");
        image2.src = `https://flagsapi.com/${currencyInfo.country_code}/flat/64.png`;
        image2.onerror = function () {
            this.onerror = null;
            this.src = 'images/dollar-symbol.png';
        };
        image2.alt = `${currencyInfo.code}`;
        image2.height = '30';

        const countrynamesymbol1 = document.createElement("div");
        countrynamesymbol1.classList.add('countrynamesymbol');
        countrynamesymbol1.textContent = `${currencyInfo.code} - ${currencyInfo.name}`;

        const countrynamesymbol2 = document.createElement("div");
        countrynamesymbol2.classList.add('countrynamesymbol');
        countrynamesymbol2.textContent = `${currencyInfo.code} - ${currencyInfo.name}`;


        dropdown1.appendChild(countryBar1);
        countryBar1.appendChild(flag1);
        flag1.appendChild(image1);
        countryBar1.appendChild(countrynamesymbol1);

        dropdown2.appendChild(countryBar2);
        countryBar2.appendChild(flag2);
        flag2.appendChild(image2);
        countryBar2.appendChild(countrynamesymbol2);
    }
    items = document.querySelectorAll('.country-bar');
}

// Add this after your dropdowns are created
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        const country = e.target.closest('.country-bar');
        if (!country) return;

        const parentDiv = dropdown.closest('.countryName');
        parentDiv.querySelector('.countryNameDisplay').innerText = country.innerText;

        const targetCode = country.innerText.split(' ')[0];

        parentDiv.parentElement.children[0].children[1].children[0].src = `https://flagsapi.com/${data[`${targetCode}`].country_code}/flat/64.png`;
        parentDiv.parentElement.children[0].children[1].children[0].onerror = function () {
            this.onerror = null;
            this.src = 'images/dollar-symbol.png';
        };

        parentDiv.parentElement.children[0].children[1].children[0].alt = `${data[`${targetCode}`].country_code}`;

        if (parentDiv.id === 'countryName1') {
            parentDiv.parentElement.parentElement.parentElement.children[0].children[0].children[1].innerText = data[`${targetCode}`].symbol_native;
            seclectedCountry1 = targetCode;
        } else {
            seclectedCountry2 = targetCode;
        }
        dropdown.style.display = 'none';
        setRateData();
    });
});

// Attach event listeners to each .countryNameDisplay
document.querySelectorAll('.countryNameDisplay').forEach(display => {
    display.addEventListener('click', (e) => {
        e.stopPropagation();
        // Find the parent .countryName div
        const parentDiv = display.closest('.countryName');
        const dropdown = parentDiv.querySelector('.dropdown');

        // Hide all dropdowns first
        document.querySelectorAll('.dropdown').forEach(d => {
            d.style.display = 'none';
            // Optionally reset arrow icons here if needed
            const arrowIcon = d.parentElement.querySelector('.arrowIcon');
            if (arrowIcon) {
                arrowIcon.children[0].style.display = 'block'; // down
                arrowIcon.children[1].style.display = 'none';  // up
            }
        });

        // Toggle current dropdown
        if (dropdown.style.display !== 'block') {
            dropdown.style.display = 'block';
            const arrowIcon = parentDiv.querySelector('.arrowIcon');
            if (arrowIcon) {
                arrowIcon.children[0].style.display = 'none'; // down
                arrowIcon.children[1].style.display = 'block'; // up
            }
        }
    });
});

// Attach event listeners to each down arrow icon
document.querySelectorAll('.bi-caret-down-square').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        const parentDiv = icon.closest('.countryName');
        // Open the dropdown for this countryName
        const dropdown = parentDiv.querySelector('.dropdown');
        // Hide all dropdowns first
        document.querySelectorAll('.dropdown').forEach(d => {
            d.style.display = 'none';
            const arrowIcon = d.parentElement.querySelector('.arrowIcon');
            if (arrowIcon) {
                arrowIcon.children[0].style.display = 'block';
                arrowIcon.children[1].style.display = 'none';
            }
        });
        // Show this dropdown
        dropdown.style.display = 'block';
        const arrowIcon = parentDiv.querySelector('.arrowIcon');
        if (arrowIcon) {
            arrowIcon.children[0].style.display = 'none';
            arrowIcon.children[1].style.display = 'block';
        }
    });
});

// Attach event listeners to each up arrow icon
document.querySelectorAll('.bi-caret-up-square').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        const parentDiv = icon.closest('.countryName');
        // Close the dropdown for this countryName
        const dropdown = parentDiv.querySelector('.dropdown');
        dropdown.style.display = 'none';
        const arrowIcon = parentDiv.querySelector('.arrowIcon');
        if (arrowIcon) {
            arrowIcon.children[0].style.display = 'block';
            arrowIcon.children[1].style.display = 'none';
        }
    });
});

// Hide dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.countryName')) {
        document.querySelectorAll('.dropdown').forEach(d => {
            d.style.display = 'none';
            const arrowIcon = d.parentElement.querySelector('.arrowIcon');
            if (arrowIcon) {
                arrowIcon.children[0].style.display = 'block';
                arrowIcon.children[1].style.display = 'none';
            }
        });
    }
});

// ...existing code...

let countries = document.querySelectorAll('.country');
let amountbox = document.querySelector('#amountbox');

for (const thisCountry of countries) {
    thisCountry.addEventListener('click', (e) => {
        e.stopPropagation(); // Stop the click from reaching the body

        // Remove active class from all
        countries.forEach(el => el.classList.remove('active'));

        // Add active to clicked one
        thisCountry.classList.add('active');
    });
}

amountbox.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop the click from reaching the body

    // Add active to clicked one
    amountbox.classList.add('active');
});

// When clicking anywhere else, remove the active class
document.addEventListener('click', () => {
    countries.forEach(el => el.classList.remove('active'));
    amountbox.classList.remove('active');
});

// display result1

function displayResult1() {
    result.children[0].children[0].innerText = `${textarea.innerText} ${data[`${seclectedCountry1}`].name} = `;
    result.children[0].children[2].innerText = `${((rate2 / rate1) * Number(textarea.innerText)).toFixed(5)} ${data[`${seclectedCountry2}`].name}`;
}

// display result2

function displayResult2() {
    result.children[1].children[0].innerText = `1 ${seclectedCountry1} = ${(rate2 / rate1).toFixed(5)} ${seclectedCountry2}`;
    result.children[1].children[2].innerText = `1 ${seclectedCountry2} = ${(rate1 / rate2).toFixed(5)} ${seclectedCountry1}`;
}
