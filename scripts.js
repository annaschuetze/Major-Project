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
let tacoSoup = new Recipe("Taco Soup", "tacosoup-ingredients.html", "tacosoup-directions.html", "https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1152/hd-aspect-1503419036-taco-soup-delish.jpg?resize=1200:*", "tacosoup-description.html")

let vodkaSaucePasta = new Recipe("Vodka Sauce Pasta", "vodkapasta-ingredients.html", "vodkapasta-directions.html", "https://lexiscleankitchen.com/wp-content/uploads/2015/03/penne-alla-vodka5.jpg", "vodkapasta-description.html")

let eggRollBowls = new Recipe("Egg Roll Bowls", "eggroll-ingredients.html", "eggroll-directions.html", "https://www.the-girl-who-ate-everything.com/wp-content/uploads/2019/03/egg-roll-in-a-bowl-8.jpg", "eggroll-description.html")

let brusselSprouts = new Recipe("Brussel Sprouts", "brussel-ingredients.html", "brussel-directions.html", "https://assets.bonappetit.com/photos/635049dac8b1604157059608/1:1/w_1920,c_limit/1019-brussels-sprouts-lede.jpg", "brussel-description.html")

let breadSalad = new Recipe("Bread Salad", "breadsalad-ingredients.html", "breadsalad-directions.html", "https://www.kitchenkonfidence.com/wp-content/uploads/2021/05/Panzanella-Salad-4.jpg", "breadsalad-description.html")

let pizzaLogs = new Recipe("Pizza Logs", "pizzalogs-ingredients.html", "pizzalogs-directions.html", "https://www.savoryexperiments.com/wp-content/uploads/2023/03/Pizza-Logs-10.jpg", "pizzalogs-description.html")

let smashBurger = new Recipe("Smash Burger", "smashburger-ingredients.html", "smashburger-directions.html", "https://images.squarespace-cdn.com/content/v1/55cd2992e4b09e646ff13894/1603491152359-UZ3YMGGXT5HGXSG56PFX/IMG_9138%2B%25282%2529%2B2%2Bcopy.jpg?format=1000w", "smashburger-description.html")


// don't do anything until the DOM loads
document.addEventListener("DOMContentLoaded", function() {
    
    tacoSoup.addToNav();
    
    vodkaSaucePasta.addToNav();
    
    eggRollBowls.addToNav();
    
    brusselSprouts.addToNav();
    
    breadSalad.addToNav();
    
    pizzaLogs.addToNav();
    
    smashBurger.addToNav();
});
  