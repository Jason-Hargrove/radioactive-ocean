const trashContainer = document.querySelector(".trash-container");
const moneyElement = document.querySelector(".money");
const currencyFormatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
});

const MAX_MONEY_RAISED = 30000000;

// ===== if hard coded ====
// const amountRaised = 1023433;
// moneyElement.innerText = currencyFormatter.format(amountRaised);
setupTrash();

async function setupTrash() {
    const amountRaised = await fetch("https://tscache.com/donation_total.json").then(res => res.json()).then(data => data.count);
    moneyElement.innerText = currencyFormatter.format(amountRaised);
}

