 

let app = {
       
    init: function() {
 
        console.log("L'appli est lancé");

        /* Je créer une variable booléen qui dit que le dark mode n'est pas activer */
        app.darkModeActivate = false;

        /* On cible le bouton mode sombre par son id */
        app.elementBouttonDarkMode = document.querySelector('#darkMode');
        
        /* On attribue un écouteur d'évènement à l'élément bouton, l'évènement écouter sera un clique */
        app.elementBouttonDarkMode.addEventListener('click', app.changeColorMode);

        
    },

    /**
     * Fonction qui va changer la couleur du site
     * 
    */
    changeColorMode: function() {

        /* Je cible le body */ 
        const elementBody = document.querySelector('.bodyPage');

        /* Je cible les paragraphes des sections introductions, formations et expériences  */
        const elementParagraph = document.querySelectorAll('.paragraphPage');

        /* Je cible les paragraphes de la section travaux */
        const elementParagraphTravaux = document.querySelectorAll('.paragraphPageTravaux');
    
        /* Je cible les liens de mes boutons */
        const elementLink = document.querySelectorAll('.linkPage');

        /* Je cible les tags */
        const elementTag = document.querySelectorAll('.mainTagTravaux');
        
        /* Je cible les titres h3 */
        const elementTitleH3 = document.querySelectorAll('.mainTitlePage');
        
        app.darkModeActivate = !app.darkModeActivate;
        
       /* Si le bouton est cliqué alors on ajoute une classe (styles mode sombre) aux différents éléments */
       if(app.darkModeActivate === true) { 

        
            /* J'ajoute les styles de mon body pour le mode sombre */
            elementBody.classList.add('bodyDarkStyle');

            /* Je boucle sur le tableau d'objet */
            for(let i = 0; i < elementParagraph.length; i++) {

                /* Chaque item de mon tableau correspond à un paragraphe */
                app.itemParagraphPage = elementParagraph[i];
                /* Pour chaque paragraphe j'ajoute les styles du mode sombre (class CSS) */
                app.itemParagraphPage.classList.add('pDarkStyle');
            }

            for(let i = 0; i < elementParagraphTravaux.length; i++) {

                app.itemParagraphPageTravaux = elementParagraphTravaux[i];

                app.itemParagraphPageTravaux.classList.add('pDarkStyle');
            }
            
            for(let i = 0; i < elementLink.length; i++) {

                app.itemLink = elementLink[i];

                app.itemLink.classList.add('aDarkStyle');
            }

            for(let i = 0; i < elementTag.length; i++) {

                app.itemTag = elementTag[i];

                app.itemTag.classList.add('tagDarkStyle');
            }

            for(let i = 0; i < elementTitleH3.length; i++) {

                app.itemTitleH3 = elementTitleH3[i];

                app.itemTitleH3.classList.add('h3DarkStyle');
            }
             
            app.elementBouttonDarkMode.textContent = "Activer le mode clair";
            app.elementBouttonDarkMode.classList.add('buttonDarkModeStyle');           
            
            
         /* Sinon si darkModeActivate === false on revient au style d'avant */
       } else {

            elementBody.classList.remove('bodyDarkStyle');

            for(let i = 0; i < elementParagraph.length; i++) {

                app.itemParagraphPage = elementParagraph[i];
                /* Pour chaque paragraphe j'enlève les styles du mode sombre (class CSS) */
                app.itemParagraphPage.classList.remove('pDarkStyle');
            }

            for(let i = 0; i < elementParagraphTravaux.length; i++) {

                app.itemParagraphPageTravaux = elementParagraphTravaux[i];

                app.itemParagraphPageTravaux.classList.remove('pDarkStyle');
            }

            for(let i = 0; i < elementLink.length; i++) {

                app.itemLink = elementLink[i];

                app.itemLink.classList.remove('aDarkStyle');
            }

            for(let i = 0; i < elementTag.length; i++) {

                app.itemTag = elementTag[i];

                app.itemTag.classList.remove('tagDarkStyle');
            }

            for(let i = 0; i < elementTitleH3.length; i++) {

                app.itemTitleH3 = elementTitleH3[i];

                app.itemTitleH3.classList.remove('h3DarkStyle');
            }

            app.elementBouttonDarkMode.textContent = "Activer le mode sombre";
            app.elementBouttonDarkMode.classList.remove('buttonDarkModeStyle');    

           

       }
  
    },
    
     

}

document.addEventListener('DOMContentLoaded', app.init);