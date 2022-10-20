/*1.how to compare two json have the same properties without order
a.var obj1={name:"person1",age:5}
b.var obj2={age:5,name:"person1"}*/
//Solution
var obj1={
           name:"Mrithul",
           age:5
         } //object 1 declaration
var obj2={
          age:5,
          name:"Mrithul"
         } //object 2 declaration
JSON.stringify(obj1)===JSON.stringify(obj2) //converting object data to JSON stringification
let compare = _.isEqual(obj1,obj2) // using LODASH _.isEqual method to compare the two objects
if(compare===true) //diplaying the output
  console.log("The given two JSON are equal")
 else
  console.log("The given two JSON are not equal")

//output:

//The given two JSON are equal script1.js:17:11
//Live reload enabled. 127.0.0.1:5500:43:13



//2.Use the rest countries url and display all countries flag in the console 
//Solution:

let xhr= new XMLHttpRequest();//initializing xmlhttp request
//open a request and pass url to open methods
xhr.open("GET","https://restcountries.com/v3.1/all")
//process the request on server side and retrive the data
xhr.onload=function()
{
//checking for the Http error codes and retrive data only if the status code lies in the range of 200-299
 if(xhr.status>=200 && xhr.status<300)
 {
  //provide data to server
  var data=JSON.parse(this.response) //converting JSON into object 
}
//using looping concept to display the country flags
for(let i=0;i<data.length;i++)
{
    let countries=data[i]
    console.log(`Country Flag of ${countries.name.common}:${countries.flag}`)
}
}
//send request to data
xhr.send();

//output

/* 127.0.0.1:5500:43:13
Country Flag of Bulgaria:🇧🇬 script2.js:18:13
Country Flag of Falkland Islands:🇫🇰 script2.js:18:13
Country Flag of Syria:🇸🇾 script2.js:18:13
Country Flag of Belarus:🇧🇾 script2.js:18:13
Country Flag of India:🇮🇳 script2.js:18:13
Country Flag of Cuba:🇨🇺 script2.js:18:13
Country Flag of Guadeloupe:🇬🇵 script2.js:18:13
Country Flag of North Macedonia:🇲🇰 script2.js:18:13
Country Flag of Tajikistan:🇹🇯 script2.js:18:13
Country Flag of Bhutan:🇧🇹 script2.js:18:13
Country Flag of Equatorial Guinea:🇬🇶 script2.js:18:13
Country Flag of Sierra Leone:🇸🇱 script2.js:18:13
Country Flag of Saint Helena, Ascension and Tristan da Cunha:🇸🇭 script2.js:18:13
Country Flag of Ukraine:🇺🇦 script2.js:18:13
Country Flag of Israel:🇮🇱 script2.js:18:13
Country Flag of Somalia:🇸🇴 script2.js:18:13
Country Flag of Nicaragua:🇳🇮 script2.js:18:13
Country Flag of South Georgia:🇬🇸 script2.js:18:13
Country Flag of Sri Lanka:🇱🇰 script2.js:18:13
Country Flag of United States:🇺🇸 script2.js:18:13
Country Flag of Moldova:🇲🇩 script2.js:18:13
Country Flag of Gabon:🇬🇦 script2.js:18:13
Country Flag of Estonia:🇪🇪 script2.js:18:13
Country Flag of Canada:🇨🇦 script2.js:18:13
Country Flag of Nauru:🇳🇷 script2.js:18:13
Country Flag of Niger:🇳🇪 script2.js:18:13
Country Flag of French Guiana:🇬🇫 script2.js:18:13
Country Flag of Caribbean Netherlands:🇧🇶 script2.js:18:13
Country Flag of Taiwan:🇹🇼 script2.js:18:13
Country Flag of Bouvet Island:🇧🇻 script2.js:18:13
Country Flag of Tunisia:🇹🇳 script2.js:18:13
Country Flag of Cocos (Keeling) Islands:🇨🇨 script2.js:18:13
Country Flag of Papua New Guinea:🇵🇬 script2.js:18:13
Country Flag of Hungary:🇭🇺 script2.js:18:13
Country Flag of Greenland:🇬🇱 script2.js:18:13
Country Flag of Montserrat:🇲🇸 script2.js:18:13
Country Flag of Palau:🇵🇼 script2.js:18:13
Country Flag of Wallis and Futuna:🇼🇫 script2.js:18:13
Country Flag of Finland:🇫🇮 script2.js:18:13
Country Flag of Mali:🇲🇱 script2.js:18:13
Country Flag of Honduras:🇭🇳 script2.js:18:13
Country Flag of Faroe Islands:🇫🇴 script2.js:18:13
Country Flag of Guinea-Bissau:🇬🇼 script2.js:18:13
Country Flag of Central African Republic:🇨🇫 script2.js:18:13
Country Flag of Guinea:🇬🇳 script2.js:18:13
Country Flag of Sint Maarten:🇸🇽 script2.js:18:13
Country Flag of Saint Vincent and the Grenadines:🇻🇨 script2.js:18:13
Country Flag of Comoros:🇰🇲 script2.js:18:13
Country Flag of Andorra:🇦🇩 script2.js:18:13
Country Flag of Croatia:🇭🇷 script2.js:18:13
Country Flag of China:🇨🇳 script2.js:18:13
Country Flag of Niue:🇳🇺 script2.js:18:13
Country Flag of Liberia:🇱🇷 script2.js:18:13
Country Flag of Hong Kong:🇭🇰 script2.js:18:13
Country Flag of American Samoa:🇦🇸 script2.js:18:13
Country Flag of Iraq:🇮🇶 script2.js:18:13
Country Flag of Saint Kitts and Nevis:🇰🇳 script2.js:18:13
Country Flag of Åland Islands:🇦🇽 script2.js:18:13
Country Flag of Botswana:🇧🇼 script2.js:18:13
Country Flag of Curaçao:🇨🇼 script2.js:18:13
Country Flag of Libya:🇱🇾 script2.js:18:13
Country Flag of Mongolia:🇲🇳 script2.js:18:13
Country Flag of Chile:🇨🇱 script2.js:18:13
Country Flag of Zambia:🇿🇲 script2.js:18:13
Country Flag of Ivory Coast:🇨🇮 script2.js:18:13
*/


//3.Use the same rest countries to display country name,region,sub region and population
//Solution

let xhr1= new XMLHttpRequest();//initializing xmlhttp request
//open a request and pass url to open methods
xhr1.open("GET","https://restcountries.com/v3.1/all")
//process the request on server side and retrive the data
xhr1.onload=function()
{
//checking for the Http error codes and retrive data only if the status code lies in the range of 200-299
 if(xhr1.status>=200 && xhr1.status<300)
 {
  //provide data to server
  var data=JSON.parse(this.response) //converting JSON into object 
}
//using looping concept to display the countries name,region,sub region and population
for(let i=0;i<data.length;i++)
{
    let countries=data[i]
    console.log(`Country Name: ${countries.name.common} 
Region: ${countries.region} 
Sub Region: ${countries.subregion} 
Population: ${countries.population}`)
}
}
//send request to data
xhr1.send();

//output

/*Country Name: Bulgaria 
Region: Europe 
Sub Region: Southeast Europe 
Population: 6927288 script.js:142:13
Country Name: Falkland Islands 
Region: Americas 
Sub Region: South America 
Population: 2563 script.js:142:13
Country Name: Syria 
Region: Asia 
Sub Region: Western Asia 
Population: 17500657 script.js:142:13
Country Name: Belarus 
Region: Europe 
Sub Region: Eastern Europe 
Population: 9398861 script.js:142:13
Country Name: India 
Region: Asia 
Sub Region: Southern Asia 
Population: 1380004385 script.js:142:13
Country Name: Cuba 
Region: Americas 
Sub Region: Caribbean 
Population: 11326616 script.js:142:13
Country Name: Guadeloupe 
Region: Americas 
Sub Region: Caribbean 
Population: 400132 script.js:142:13
Country Name: North Macedonia 
Region: Europe 
Sub Region: Southeast Europe 
Population: 2077132 script.js:142:13
Country Name: Tajikistan 
Region: Asia 
Sub Region: Central Asia 
Population: 9537642 script.js:142:13
Country Name: Bhutan 
Region: Asia 
Sub Region: Southern Asia 
Population: 771612 script.js:142:13
Country Name: Equatorial Guinea 
Region: Africa 
Sub Region: Middle Africa 
Population: 1402985 script.js:142:13
Country Name: Sierra Leone 
Region: Africa 
Sub Region: Western Africa 
Population: 7976985 script.js:142:13
Country Name: Saint Helena, Ascension and Tristan da Cunha 
Region: Africa 
Sub Region: Western Africa 
Population: 53192 script.js:142:13
Country Name: Ukraine 
Region: Europe 
Sub Region: Eastern Europe 
Population: 44134693 script.js:142:13
Country Name: Israel 
Region: Asia 
Sub Region: Western Asia 
Population: 9216900 script.js:142:13
Country Name: Somalia 
Region: Africa 
Sub Region: Eastern Africa 
Population: 15893219 script.js:142:13
Country Name: Nicaragua 
Region: Americas 
Sub Region: Central America 
Population: 6624554 script.js:142:13
Country Name: South Georgia 
Region: Antarctic 
Sub Region: undefined 
Population: 30 script.js:142:13
Country Name: Sri Lanka 
Region: Asia 
Sub Region: Southern Asia 
Population: 21919000 script.js:142:13
Country Name: United States 
Region: Americas 
Sub Region: North America 
Population: 329484123 script.js:142:13
Country Name: Moldova 
Region: Europe 
Sub Region: Eastern Europe 
Population: 2617820 script.js:142:13
Country Name: Gabon 
Region: Africa 
Sub Region: Middle Africa 
Population: 2225728 script.js:142:13
Country Name: Estonia 
Region: Europe 
Sub Region: Northern Europe 
Population: 1331057 script.js:142:13
Country Name: Canada 
Region: Americas 
Sub Region: North America 
Population: 38005238 script.js:142:13
Country Name: Nauru 
Region: Oceania 
Sub Region: Micronesia 
Population: 10834 script.js:142:13
Country Name: Niger 
Region: Africa 
Sub Region: Western Africa 
Population: 24206636 script.js:142:13
Country Name: French Guiana 
Region: Americas 
Sub Region: South America 
Population: 254541 script.js:142:13
*/