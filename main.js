const countryDiv = document.querySelector('#countryDiv');

for (const child of countryDiv.children) {
    child.addEventListener('click', (e) => {
        const parentDiv = e.target.closest('.countryName');
        parentDiv.querySelector('.dropdown').style.display = 'block';
    });
}