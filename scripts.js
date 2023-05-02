/*

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
function Recipe(a, b, c, d) {
    
    //set some object properties 
    this.name = a;
    this.ingredientsFile = b;
    this.directionsFile = c;
    this.imageSource = d;

   this.display = function() {
        document.querySelector("#hero h1").innerHTML = this.name;
        loadFileInto(this.ingredientsFile, '#block2');
        loadFileInto(this.directionsFile, '#block3');
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
let Breakfast = new Recipe("Breakfast", "caesar-ingredients.html", "caesar-directions.html", "https://assets.bonappetit.com/photos/59274167d1434b7e3cee2887/1:1/w_1920,c_limit/easy-homemade-caesar-dressing.jpg")

let Lunch = new Recipe("Lunch", "balsamic-ingredients.html", "balsamic-directions.html", "https://barefeetinthekitchen.com/wp-content/uploads/2019/03/Balsamic-Vinaigrette-re-edit-3-1-of-1-2048x1463.jpg")

let Dinner = new Recipe("Dinner", "sesame-ingredients.html", "sesame-directions.html", "https://www.recipetineats.com/wp-content/uploads/2016/12/Asian-Sesame-Dressing-4.jpg")

console.log(Breakfast.imageSource);

// don't do anything until the DOM loads
document.addEventListener("DOMContentLoaded", function() {
    
    Breakfast.addToNav();
    
    Lunch.addToNav();
    
    Dinner.addToNav();
});
*/  