const URL = "https://dogapi.dog/api/v2/facts";
const factPara = document.querySelector("#fact");
const factsBtn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);

//GET Request Example
// function fetch2() {
//     console.log("fetch2 working...");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("fetch2 done...");
//             resolve(200);
//         }, 4000);
//     });
// }
const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    console.log(typeof response);
    let data = await response.json();
    console.log(data);
    console.log(typeof data);
    console.log(data.data[0].attributes.body);
    factPara.innerText = data.data[0].attributes.body;
};


//promise chaining
// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             factPara.innerText = data.data[0].attributes.body;
//         });
// }

factsBtn.addEventListener("click", getFacts);
//factsBtn.onclick = getFacts;

//getFacts();