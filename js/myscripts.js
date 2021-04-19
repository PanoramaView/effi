window.addEventListener("load", function () {
    script();
})
function script() {
    //prendo dati
    var myForm = document.getElementById("myForm");
    var BurgerName = document.getElementById("burgername");


    myForm.addEventListener("submit", function (event) {
        event.preventDefault(); //impedisce il refresh del sito
        var form = event.currentTarget;
        var ingredients = form.elements;
        var arrayIngredientHTML = document.querySelectorAll("[value^='ingredient']")

        var arrayIngredient = new Array();
        for (var i = 0; i < arrayIngredientHTML.length; i++) {
            var x = ingredients.ingredient[i].value;
            arrayIngredient.push(x);
        }

    })
}
function addIngredient(tot, ingPrice) {
    tot += ingPrice;
    return tot;
}