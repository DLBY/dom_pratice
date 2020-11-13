//Question 1 :

var elements = document.getElementsByTagName("p").length;
console.log(`Il y a ${elements} élements "p" sur cette page`);

//Question 2 :

var myElement = document.getElementById("coucou").innerHTML; //permet de récuperer le contenu
console.log(`Voici le contenu de coucou : ${myElement} .`);

//Question 3 :

var linksElts = document.getElementsByTagName("a");

console.log(`Voici l'url du troisième lien : ${linksElts[2]}`);

//Question 4 :
var countMe = document.getElementsByClassName("compte-moi").length;

console.log(`Il y a ${countMe} éléments ayant la classe compte-moi`);

//Question 5 :
var countLi = document.querySelectorAll( "li.compte-moi").length;

console.log(`Il y a ${countLi} éléments <li> ayant la classe compte-moi`);

// Question 6 :
var countOl = document.querySelectorAll( "ol > li.compte-moi").length;

console.log(`Il y a ${countOl} éléments <li> dans une liste ordonnée ayant la classe compte-moi`);

// Question 7 :
var search = document.querySelectorAll("div")[0].querySelectorAll("ul")[1].querySelectorAll("li")[0];

console.log(`Voici l'élément caché : ${search.textContent}.`);