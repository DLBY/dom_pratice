// Modif n°1

function changeTitles() {
  document.getElementsByTagName("h1")[0].textContent = "Ce que j'ai appris à THP";
  document.querySelectorAll( "p.lead")[0].textContent= "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
  }

  changeTitles()

//Modif n°2
function changeCallToActions(){
  document.querySelectorAll("a.btn")[0].textContent = "OK je veux tester !"
  document.querySelectorAll("a.btn")[0].href = "http://www.thehackingproject.org";
  document.querySelectorAll("a.btn")[1].textContent = "Non merci !";
  document.querySelectorAll("a.btn")[1].href = "https://www.pole-emploi.fr/accueil/";
}

  changeCallToActions()

  //Modif n°3
function changeLogoName(){
  document.querySelector('strong').textContent="The THP Experience";
  document.querySelector('strong').style.fontSize ="2em";
};
changeLogoName()

  //Modif n°4
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];


  function populatedImages(){
    var img = document.querySelectorAll("img");
    for (let i=0; i <img.length; i++){
      img[i].src=imagesArray[i]
    };
  }
  populatedImages()

  //Modif n°5
  function deleteLastCards(){
    cards = document.querySelectorAll("div.col-md-4");
    for (let i=cards.length - 3; i < cards.length; i++){
      cards[i].remove();
    }
  }
  
  function changeCardsText(){
    let textArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
  
    let textCards = document.querySelectorAll("div.card-body > p");
    for(let i=0; i < textArray.length; i++){
      textCards[i].textContent = textArray[i];
    };
  
  };
  
  changeCardsText()
    //Modif n°6