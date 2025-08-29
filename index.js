

const header = document.querySelector("header");

header.style.borderRadius= "200px";
// methode pour creer les 20 div autpmatiquement avec JS
// const conteneur = document.getElementById("conteneur");

// for(let i=1; i <= 20; i++){

//     const paireDiv = document.createElement('div');
//     paireDiv.classList.add('paire');
//     paireDiv.id = "paire" + i;

//     const questionDiv = document.createElement('div');
//     questionDiv.classList.add('question');
//     questionDiv.id = "question" + i

//     const reponseDiv = document.createElement('div');
//     reponseDiv.classList.add('reponse');
//     reponseDiv.id = "reponse" + i;
    
//     paireDiv.appendChild(questionDiv);
//     paireDiv.appendChild(reponseDiv);

//     conteneur.appendChild(paireDiv)
// }


// Je prends toutes les "questions" de la page
const questions = document.querySelectorAll(".question");

// Je prends tous les boutons "Valider"
const boutons = document.querySelectorAll(".valider");

const demarrerBtn = document.getElementById("demarrer");
const presentation = document.getElementById("presentation");
let clique = document.querySelectorAll(".clique"); 
const reponses = document.querySelectorAll(".reponse");

const felicitation = document.getElementById("felicitation");
const scoree = document.getElementById("score")

let score = 0;

console.log(felicitation);
demarrerBtn.addEventListener("click", () => {
    presentation.style.display = "none"; 
    questions[0].style.display = "flex";  
});

boutons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    clique = document.querySelectorAll(".clique"); 

    if (clique.length == 0){
      console.log(clique);
      alert("Veuillez selectionner une reponse");
      return
    }

    questions[i].style.display = "none";

    if (i + 1 < questions.length) {
      questions[i + 1].style.display = "flex";
    }
    if(i + 1 == questions.length ){
        felicitation.style.display ="flex";
    }
  });
});


// console.log(reponses);

reponses.forEach (reponse => {
  reponse.addEventListener("click", () =>{
    reponses.forEach(r => r.classList.remove("clique"));
    reponse.classList.toggle("clique");
})
})


boutons.forEach(bouton => {
  bouton.addEventListener("click", () => {

    reponses.forEach(reponse =>{
      if (reponse.classList.contains("vrai")  && reponse.classList.contains("clique")){
        score++;
        scoree.textContent = `Votre score est de ${score}/${questions.length}`;
      }
      reponse.classList.remove("clique");
    } );
    console.log(clique);
    console.log(score);
  })
} )


const rejouer = document.getElementById("rejouer");

rejouer.addEventListener("click", () => {
  score = 0;
  felicitation.style.display = "none"; 

  reponses.forEach(r => r.classList.remove("clique"));

  questions.forEach(q => q.style.display = "none");

  questions[0].style.display = "flex";
});

