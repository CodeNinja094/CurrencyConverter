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