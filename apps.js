function Eleve (id, nom , prenom, sexe, age){
  this.id = id;
  this.nom = nom;
  this.prenom = prenom;
  this.sexe = sexe;
  this.age = age;
  this.affiche2 = function(){
    var titre = "M" == this.sexe?"Monsieur" : "Madame";
    console.log(titre+ " " + this.nom + " " + this.prenom);
  }
}

var p1 = new Eleve("1", "Subias", "Leo", "M" , "20");
p1.affiche2();


function Classe(){
  this.curIdEleve = 1;
  this.compteEleve = [];

  //Methode d'ajout d'eleve
  this.addEleve = function(prenom, nom, age, sexe){
    var ajout = new Eleve (this.curIdEleve, nom, prenom, sexe, age);
    this.compteEleve.push(ajout);
    this.curIdEleve++;
  }
  //Methode de comptage
  this.compteEleve = function(A, M, F){
    if () {}
  }
}

var simplon = new Classe();

simplon.addEleve( "leo", "gla", "20", "F");
simplon.addEleve( "jimmy", "gla", "20", "F")
simplon.addEleve( "chris", "hello", "25", "M")
console.log(simplon.compteEleve);
      // Créer un objet Classe

      //     Attributs: curIdEleve ( un incrément qui servira pour définir l'id unique de l'élève)
      // , eleves ( le tableau qui contiendra les élèves)
      // //     Avec un constructeur sans parametres, qui initialise les attributs curIdEleve à 1 et
       // eleves à tableau vide []
      // //     Une methode addEleve( prenom, nom, sexe, age ) qui ajoute un élève (l'id de l'élève sera
      // défini à partir de l'attribut curIdEleve) et incrémente curIdEleve.
      // //     Une methode compteEleve( sexe ) qui compte le nombre d'eleve en fonction du sexe
       // ( A pour tous, M pour hommes et F pour Femme)
       // //     Une methode afficheEleves qui affiche tous les élèves ( en utilisant la méhode affiche
       // de chaque éleve)
       // //     Une méthode afficheStatClasse qui affiche le nombre total de la classe, le nombre de
       // femme, le nombre d'homme, la moyenne d'age

