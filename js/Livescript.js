window.addEventListener("load", function () {
    script();
});

function script() {

    var popup = document.getElementById("popup");
    popup.classList.toggle("show");

    var myBtn = document.getElementById("button");

    myBtn.addEventListener("click", function (event) {
        event.preventDefault(); //impedisce il refresh del sito
        //prendo dati

        var arrayIngredient = new Array();
        var arrayIngredientHTML = document.querySelectorAll("[name^='ingredient']")
        //pusho in un array tutti gli id degli ingredienti checkati
        for (var i = 0; i < arrayIngredientHTML.length; i++) {
            var x = arrayIngredientHTML[i];
            if (x.checked) {
                arrayIngredient.push(x.id);
            }
        }
        //prendo elemento per ID e stampo gli ingredienti sul elemento
        document.getElementById('output').innerHTML = arrayIngredient.join(', ');
    });

}