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
let Pancakes = new Recipe("Pancakes", "pancakes-ingredients.html", "pancakes-directions.html", "https://cafedelites.com/wp-content/uploads/2016/10/PERFECT-Best-Fluffy-Pancakes-IMAGE-450.jpg", "pancakes-description.html")

let Scramble = new Recipe("Scramble", "scramble-ingredients.html", "scramble-directions.html", "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps7553_SD163324B08_13_10b.jpg", "scramble-description.html")

let eggsBenedict = new Recipe("Eggs Benedict", "eggsbenedict-ingredients.html", "eggsbenedict-directions.html", "https://static01.nyt.com/images/2021/04/30/dining/ar-eggs-benedict/ar-eggs-benedict-articleLarge.jpg?w=1280&q=75", "eggsbenedict-description.html")

let Waffles = new Recipe("Waffles", "waffles-ingredients.html", "waffles-directions.html", "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_belgian-style-waffles_16700_760x580.jpg?ext=.jpg", "waffles-description.html")

let overnightOats = new Recipe("Overnight Oats", "overnightoats-ingredients.html", "overnightoats-directions.html", "https://cdn.loveandlemons.com/wp-content/uploads/2022/09/overnight-oats.jpg", "overnightoats-description.html")

let acaiBowl = new Recipe("Acai Bowls", "acaibowl-ingredients.html", "acaibowl-directions.html", "https://healthfulblondie.com/wp-content/uploads/2022/06/Homemade-Healthy-Protein-Acai-Bowl.jpg", "acaibowl-description.html")

// don't do anything until the DOM loads
document.addEventListener("DOMContentLoaded", function() {
    
    Pancakes.addToNav();
    
    Scramble.addToNav();
    
    eggsBenedict.addToNav();
    
    Waffles.addToNav();
    
    overnightOats.addToNav();
    
    acaiBowl.addToNav();
});
  