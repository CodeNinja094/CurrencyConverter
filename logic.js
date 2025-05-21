// select


const editableDivs = document.querySelectorAll('.countryNameDisplay');

for (const editableDiv of editableDivs) {
    editableDiv.addEventListener('focus', () => {
        const selection = window.getSelection();
        const range = document.createRange();

        range.selectNodeContents(editableDiv); // select all content
        selection.removeAllRanges();
        selection.addRange(range);

        // Optional: Log the selected text

        // editableDiv.addEventListener('')
    });

}

// search



for (const editableDiv of editableDivs) {
    const items = document.querySelectorAll('.country-bar');
    editableDiv.addEventListener('click', () => {
        items.forEach(item => {
            item.style.display = 'flex';
        });
    });

    editableDiv.addEventListener('input', () => {
        const query = editableDiv.textContent.trim().toLowerCase();
        items.forEach(item => {
            let text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? 'flex' : 'none';
        });
    })



}


// swap country 

function swap(callback) {
    let temp = editableDivs[0].innerText;
    editableDivs[0].innerText = editableDivs[1].innerText;
    editableDivs[1].innerText = temp;

    let temp2 = editableDivs[0].parentElement.parentElement.children[0].children[1].innerHTML;
    editableDivs[0].parentElement.parentElement.children[0].children[1].innerHTML = editableDivs[1].parentElement.parentElement.children[0].children[1].innerHTML;
    editableDivs[1].parentElement.parentElement.children[0].children[1].innerHTML = temp2;
    callback();
}

// change symbol

function changeSymbol() {
    let targetCode = '';
    for (const char of editableDivs[0].innerText) {
        if (char === ' ') {
            break;
        } else {
            targetCode += char;
        }
    }
    document.querySelector('#currencyIcon').innerText = data[`${targetCode}`].symbol_native;
}

document.querySelector('#twoArrow').addEventListener('click', () => {
    swap(() => {
        changeSymbol();
    });
});