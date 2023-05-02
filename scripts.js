// function to load text from another file into a DOM element
function loadFileInto(fromFile, whereTo) {

    // initiate the fetch promise
    let remoteData = fetch(fromFile)
        .then( function(response) { 
            // if OK, convert response into text, otherwise trigger the Promise error
            if (response.ok) return response.text();
            else return Promise.reject(response); // trigger error
        } )
        .then( function(responseResult) {
            // update the page
            document.querySelector(whereTo).innerHTML = responseResult;

            // report success
            console.log("Loaded " + fromFile + " into " + whereTo);

        } )
        .catch( function(error){
            // report any errors
            console.log( ("Could not load " + fromFile + " into " + whereTo + ". Specific error: "), error);
        } );
    
}

//end recipe () object constructor
function Recipe(a, b, c, d, e) {
    
    //set some object properties 
    this.name = a;
    this.ingredientsFile = b;
    this.directionsFile = c;
    this.imageSource = d;
    this.descriptionFile = e;

   this.display = function() {
        document.querySelector("#hero h1").innerHTML = this.name;
        loadFileInto(this.ingredientsFile, '#block2');
        loadFileInto(this.directionsFile, '#block3');
        loadFileInto(this.descriptionFile, '#description');
        document.querySelector("#hero").style.backgroundImage = "url(" + this.imageSource +")"
        document.title = "Recipe: " + this.name;
       
       
   }

this.addToNav = function(){
    let newNavLI = document.createElement("li");
    newNavLI.innerHTML = this.name;
    document.querySelector("#navbar ul").appendChild(newNavLI); 
    
    let recipeSelf = this;
    newNavLI.addEventListener("click", function(){
        recipeSelf.display();
});

}
}
let capreseSandwich = new Recipe("Caprese Sandwich", "caprese-ingredients.html", "caprese-directions.html", "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-06-summer-caprese-sandwich%2FKitchn_SummerCapreseSando_518", "caprese-description.html")

let mediterraneanBowl = new Recipe("Mediterranean Bowl", "medbowl-ingredients.html", "medbowl-directions.html", "https://www.eatingbirdfood.com/wp-content/uploads/2022/11/mediterranean-quinoa-bowl-hero-674x950.jpg", "medbowl-description.html")

let tomatoSoup = new Recipe("Tomato Soup", "tomatosoup-ingredients.html", "tomatosoup-directions.html", "https://hungryhealthyhappy.com/wp-content/uploads/2021/09/Easy-Tomato-Soup-featured.jpg", "tomatosoup-description.html")

let ramenNoodles = new Recipe("Ramen Noodles", "ramen-ingredients.html", "ramen-directions.html", "https://pinchofyum.com/wp-content/uploads/Homemade-Ramen-2-3.jpg", "ramen-description.html")

let chickenCaesarWrap = new Recipe("Chicken Caesar Wrap", "caesarwrap-ingredients.html", "caesarwrap-directions.html", "https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Chicken-Caesar-Wrap-1.jpg", "caesarwrap-description.html")

let stuffedBellPeppers = new Recipe("Stuffed Bell Peppers", "stuffedpeppers-ingredients.html", "stuffedpeppers-directions.html", "https://hips.hearstapps.com/hmg-prod/images/delish-classic-stuffed-peppers-horizontal-1538065876.jpg?crop=1xw:0.8435993572576326xh;center,top", "stuffedpeppers-description.html")

let pastaSalad = new Recipe("Pasta Salad", "pastasalad-ingredients.html", "pastasalad-directions.html", "https://thetoastykitchen.com/wp-content/uploads/2019/03/classic-pasta-salad-toasty-kitchen-4.jpg", "pastasalad-description.html")

// don't do anything until the DOM loads
document.addEventListener("DOMContentLoaded", function() {
    
    capreseSandwich.addToNav();
    
    mediterraneanBowl.addToNav();
    
    tomatoSoup.addToNav();
    
    ramenNoodles.addToNav();
    
    chickenCaesarWrap.addToNav();
    
    stuffedBellPeppers.addToNav();
    
    pastaSalad.addToNav();
    
});
  