window.addEventListener("load", function () {
    script();
})
function script() {
    
    var myBtn = document.getElementById("button");

    myBtn.addEventListener("click", function (event) {
        //prendo dati
        var FieldBurger = document.getElementById("burgername");
        var FieldCheese = document.getElementById("cheese-add");
        var FieldEgg = document.getElementById("egg-add");
        var FieldLettuce = document.getElementById("lettuce-add");
        var FieldMustard = document.getElementById("mustard-add");
        var FieldKetchup = document.getElementById("ketchup-add");

        event.preventDefault(); //impedisce il refresh del sito
        var arrayIngredient = new Array();
        var arrayIngredientHTML = document.querySelectorAll("[value^='ingredient']")

        for (var i = 0; i < arrayIngredientHTML.length; i++) {
            var x = arrayIngredientHTML[i];
            if(x.checked){
                arrayIngredient.push(x.value);
            }
            
        }

    })
}
function addIngredient(tot, ingPrice) {
    tot += ingPrice;
    return tot;
}