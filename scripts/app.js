"use scripts";

// IIFE - Immediately Invoked functional expression
(function () {


    function DisplayHomePage(){
        console.log("Calling DisplayHomePage")

        let aboutUsButton = document.getElementById("aboutUs");
        aboutUsButton.addEventListener("click", function(){
            location.href = "about.html";
            console.log("About Us Button Clicked");
        });

        let MainContent = document.getElementsByTagName("main")[0];
        let MainParagraph = document.createElement("p");

        //<p id="MainParagraph" class="mt-3">
        MainParagraph.setAttribute("id", "main-paragraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is my first main paragraph";


        //Display to screen
        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        //String literal
        let SecondString = `${FirstString} my second string`;
        MainParagraph.textContent = SecondString;
        //Display to screen
        MainContent.appendChild(MainParagraph);

        let DocumentBody = document.body;

        //<article></article>
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id = "Articleparagraph" class = "mt-3">This is My First article Paragraph</p>`
        Article.setAttribute ("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);

    }

    function DisplayProductsPage(){
        console.log("Calling DisplayProductsPage...");
    }

    function DisplayServicesPage(){
        console.log("Calling DisplayServicesPage...");
    }

    function DisplayAboutPage(){
        console.log("Calling DisplayAboutPage...");
    }

    function DisplayContactPage(){
        console.log("Calling DisplayContactPage...");
    }

    function Start() {
        console.log("Starting app...");

        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;

            case "Products":
                DisplayProductsPage();
                break;

            case "Services":
                DisplayServicesPage();
                break;

            case "About":
                DisplayAboutPage();
                break;

            case "Contact":
                DisplayContactPage();
                break;
        }

    }
    window.addEventListener("load", Start);

})()