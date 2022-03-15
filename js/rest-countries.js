/* // Methord 1: Old Methord

const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countries(data))
}
loadData();

const countries = (countries) => {
    // console.log(countries)
    // console.log(countries[0].flags.png)
    const earth = document.getElementById('earth')
    countries.forEach(country => {
        console.log(country.name.common)
        const div = document.createElement('div');
        div.classList.add('courites')
        div.innerHTML = `
            <img src="${country.flags.png}">
            <h2>${country.name.common}</h2>
        `;
        earth.appendChild(div);
    })

} */


// Methord 2: New Methord
const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesHTML = countries.map(conuntry => createHTML(conuntry));
    const earth = document.getElementById('earth')
    // array এর প্রত্যেকটা element এ একটা করে কমা থাকে। এমনকি প্রত্যেকটা এলিমেন্টকে জয়েন করে একটা স্ট্রিং এ পরিণত করলেও তাদের মধ্যে কমা থেকে যায়। তাই এক্ষেত্রে আমরা join empty স্ট্রিং ইউজ করবো তাহলে array element এর মধ্যে কমা থাকবে না।
    earth.innerHTML = countriesHTML.join(' ');


    // NOTE: array কে জয়েন করলে array এর প্রত্যেকটা element মিলে একটা স্ট্রিং তৈরি করে।
}


const createHTML = country => {
    return `
    <div>
        <img src="${country.flags.png}">
        <h2>${country.name.common}</h2>
    </div>
    `
}
loadData()