// Exchange rate
let rateData;
let rateresponse;
let rate1, rate2;
(async () => {
    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/usd.json`;
    rateresponse = await fetch(url);
    rateData = await rateresponse.json();
    setRateData();
})();

function setRateData() {
    rate1 = rateData.usd[seclectedCountry1.toLowerCase()];
    rate2 = rateData.usd[seclectedCountry2.toLowerCase()];
    displayResult1();
    displayResult2();
}


const editableDivs = document.querySelectorAll('.countryNameDisplay');


editableDivs.forEach(editableDiv => {
    // select
    editableDiv.addEventListener('focus', () => {
        const selection = window.getSelection();
        const range = document.createRange();

        range.selectNodeContents(editableDiv);
        selection.removeAllRanges();
        selection.addRange(range);
    });

    // search
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
    });
});

// swap country 

function swap(callback) {

    let temp = editableDivs[0].innerText;
    editableDivs[0].innerText = editableDivs[1].innerText;
    editableDivs[1].innerText = temp;

    let temp2 = editableDivs[0].parentElement.parentElement.children[0].children[1].innerHTML;
    editableDivs[0].parentElement.parentElement.children[0].children[1].innerHTML = editableDivs[1].parentElement.parentElement.children[0].children[1].innerHTML;
    editableDivs[1].parentElement.parentElement.children[0].children[1].innerHTML = temp2;

    // seclectedCountry1 swap 
    let temp3 = seclectedCountry2;
    seclectedCountry2 = seclectedCountry1;
    seclectedCountry1 = temp3;

    callback();
}

// change symbol call back

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
        displayResult1();
        displayResult2();
    });
});

// convert button

const convertBtn = document.querySelector('#convertBtn');
convertBtn.addEventListener('click', () => {
    displayResult1();

})