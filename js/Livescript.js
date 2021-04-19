window.addEventListener("load", function () {
    var totale = 50;
    console.log("Base price: " + totale);
    script();
})
function script() {
    
    var myBtn = document.getElementById("button");

    myBtn.addEventListener("click", function (event) {
        event.preventDefault(); //impedisce il refresh del sito
        //prendo dati
        // var FieldBurger = document.getElementById("burgername");
        // var FieldCheese = document.getElementById("cheese-add");
        // var FieldEgg = document.getElementById("egg-add");
        // var FieldLettuce = document.getElementById("lettuce-add");
        // var FieldMustard = document.getElementById("mustard-add");
        // var FieldKetchup = document.getElementById("ketchup-add");
        
        var arrayIngredient = new Array();
        var arrayIngredientHTML = document.querySelectorAll("[name^='ingredient']")
        //pusho in un array tutti i value degli ingredienti checkati
        for (var i = 0; i < arrayIngredientHTML.length; i++) {
            var x = arrayIngredientHTML[i];
            if(x.checked){
                arrayIngredient.push(x.value);
            }
        }
        //sommo
        for (var i = 0; i < arrayIngredient.length; i++) {
            totale += parseInt(arrayIngredient[i]);
        }

        //print output
        console.log("Totale: "+ totale);
        var PriceHTML = document.getElementById("price");
        PriceHTML.innerHTML= totale +" €";
    })
}
