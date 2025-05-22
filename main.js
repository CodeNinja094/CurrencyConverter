const countryDiv = document.querySelector('#countryDiv');
const result = document.querySelector('#result');
const textarea = document.querySelector('#textarea');

let items;
let seclectedCountry1 = 'INR';
let seclectedCountry2 = 'USD';
let countryBar;
let response;
let data;

function setupNumberOnlyTextarea(textarea, maxLength) {
    // Prevent typing invalid chars & respect max length
    textarea.addEventListener('keypress', (e) => {
        const char = e.key;
        const allowed = /[0-9.]/;
        if (!allowed.test(char) || textarea.innerText.length >= maxLength) {
            e.preventDefault();
        }
    });

    // // Clean pasted content & enforce max length
    // textarea.addEventListener('paste', (e) => {
    //     e.preventDefault();
    //     let text = (e.clipboardData || window.clipboardData).getData('text');
    //     // Keep digits and dots only
    //     text = text.replace(/[^\d.]/g, '');

    //     // Calculate available space
    //     const available = maxLength - textarea.innerText.length;
    //     // Trim to available length
    //     const trimmed = text.slice(0, available);

    //     document.execCommand('insertText', false, trimmed);
    // });

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

setupNumberOnlyTextarea(textarea, 9)



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

(async function getData() {
    response = await fetch('symbol.json');
    data = await response.json();
    updateList(data);
})();


// Handle clicks inside the countryDiv
for (const child of countryDiv.children) {
    child.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling to document
        const parentDiv = e.target.closest('.countryName');
        const dropdown = parentDiv.querySelector('.dropdown');

        const isVisible = dropdown.style.display === 'block';

        // Hide all dropdowns first
        const allDropdowns = countryDiv.querySelectorAll('.dropdown');
        for (const d of allDropdowns) {
            d.style.display = 'none';
            d.parentElement.children[1].children[0].style.display = 'block';
            d.parentElement.children[1].children[1].style.display = 'none';
        }

        // Toggle current dropdown
        if (!isVisible) {
            dropdown.style.display = 'block';
            parentDiv.children[1].children[0].style.display = 'none';
            parentDiv.children[1].children[1].style.display = 'block';

            if (!countryBar) {
                countryBar = document.querySelectorAll('.country-bar');
                for (const country of countryBar) {
                    country.addEventListener('click', (e) => {
                        let parentDiv = e.target.closest('.countryName');

                        parentDiv.querySelector('.countryNameDisplay').innerText = country.innerText;

                        let targetCode = '';
                        for (const char of country.innerText) {
                            if (char === ' ') {
                                break;
                            } else {
                                targetCode += char;
                            }
                        }

                        targetCode

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
                        setRateData(() => {
                            displayResult1();
                            displayResult2();

                        });
                    })
                }
            }

        }
    });


}

// Handle clicks outside the countryDiv
document.addEventListener('click', (e) => {
    // If the click is outside any .countryName element
    if (!e.target.closest('.countryName')) {
        const allDropdowns = countryDiv.querySelectorAll('.dropdown');
        for (const d of allDropdowns) {
            d.style.display = 'none';
            d.parentElement.children[1].children[0].style.display = 'block';
            d.parentElement.children[1].children[1].style.display = 'none';
        }
    }
});

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
