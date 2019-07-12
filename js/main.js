// import { cities } from "./data.js"; // we imported the array of the cities from the file data.js. you can use in your code the array with the name 'cities'

// here you can type your code
/* 
let input = document.getElementById('searchfield');
let output = document.getElementById('output');

input.addEventListener('input', test);

function test(){
    let inputText = input.value;
    output.innerHTML = '';

    if(inputText.length > 1){
        for(i = 0; i < cities.length; i++){
            let x = cities[i].city.toUpperCase().search(inputText.toUpperCase());
            let y = cities[i].state.toUpperCase().search(inputText.toUpperCase());
            
            if(x != -1 || y != -1){
                output.innerHTML += `<li>${mark(cities[i].city, inputText)} ${mark(cities[i].state, inputText)} ${cities[i].population}</li>`;
            }
        }
    }
}
function mark(text, search){
    var re = new RegExp(search, 'i');
    return text.replace(re, `<mark>${search}</mark>`);
}
 */
// -------------------------------------------------------------

// Another a way

const citiesForm = document.forms.searchForm; //i can use this target just with Id or name attribute
const citiesInput = citiesForm.searchedCity;
const outputList = document.querySelector('.suggestions');

citiesForm.addEventListener('input', () => {
    const searchValue = citiesInput.value;
    // console.log(searchValue);
    const regex = new RegExp(searchValue, 'ig');

    const newMatches = cities.filter(element => element.city.match(regex));
    // console.log(newMatches);
    const html = newMatches.map(element => {
        return `<li>${marking(element.city, regex)} ${element.state} ${payAtention(element.population)}</li>`;
    });
    // console.log(html);
    outputList.innerHTML = html.join(''); // cuz html is array and i can't write array in html so i use join to change it to string
});
function marking(str, regx){
    return str.replace(regx, `<mark>$&</mark>`); // $& it's like substring (cut and past)!!
}
function payAtention(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') // to make ',' in the population !!!!!!
}