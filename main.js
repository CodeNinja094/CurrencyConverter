const countryDiv = document.querySelector('#countryDiv');
let countryBar;
let response;
let data;

(async function getData() {
    response = await fetch('symbol.json');
    data = await response.json();
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
        }

        // Toggle current dropdown
        if (!isVisible) {
            dropdown.style.display = 'block';

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

                        parentDiv.parentElement.children[0].children[1].children[0].src = `https://flagsapi.com/${countryList2[`${targetCode}`]}/flat/64.png`;

                        parentDiv.parentElement.children[0].children[1].children[0].alt = `${countryList2[`${targetCode}`]}`;

                        if (parentDiv.id === 'countryName1') {
                            parentDiv.parentElement.parentElement.parentElement.children[0].children[0].children[1].innerText = (data[`${targetCode}`].symbol_native);

                        }

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
        }
    }
});

