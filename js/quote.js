/* Quotes from https://type.fit/api/quotes*/

const URL = "js/quotes.json";

async function render() {
    let tmp = await fetch(URL);
    let result = await tmp.json();
    let rand = Math.floor(Math.random() * result.length);
    if(!result[rand].author)
        result[rand].author = "Unknown";
    document.getElementById("quote").innerHTML = result[rand].text;
    document.getElementById("author").innerHTML = '—'.concat(' ', result[rand].author);
}

render()
    .then(success => {
        console.log("SUCCESS");
        console.log(success);
    })
    .catch(fail => {
        console.log("FAILURE");
        console.log(fail);
    });