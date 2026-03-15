// currency api from https://github.com/fawazahmed0/exchange-api
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const exchangeBtn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

//adding country list to dropdown

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

//functions

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

const updateExchangeValue = async () => {
    let amount = document.querySelector("form input");
    let amountValue = amount.value;
    if (amountValue === "" || amountValue < 1) {
        amountValue = 1;
        amount.value = "1";
    }
    const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let exhangeRate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = amountValue * exhangeRate;
    msg.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

//event listeners

exchangeBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeValue();
});

window.addEventListener("load", () => {
    updateExchangeValue();
});




