window.addEventListener("load", function () {
    var totale = 50;
    console.log("Base price: " + totale);
    var couponList = ["FLORIAN2021", "BOOLEAN2021", "MARCO420SIXTYNINE"];
    console.log("Coupon list: \n" + couponList.join("\n"));
    script();
});

function script() {

    var myBtn = document.getElementById("button");

    myBtn.addEventListener("click", function (event) {
        event.preventDefault(); //impedisce il refresh del sito
        //prendo dati

        var arrayIngredient = new Array();
        var arrayIngredientHTML = document.querySelectorAll("[name^='ingredient']")
        //pusho in un array tutti i value degli ingredienti checkati
        for (var i = 0; i < arrayIngredientHTML.length; i++) {
            var x = arrayIngredientHTML[i];
            if (x.checked) {
                arrayIngredient.push(x.value);
            }
        }
        //sommo 
        var totale = 50;
        for (var i = 0; i < arrayIngredient.length; i++) {
            totale += parseInt(arrayIngredient[i]);
        }

        //coupon
        var checkcoupon = false;
        var couponList = ["FLORIAN2021", "BOOLEAN2021", "MARCO420SIXTYNINE"];
        var CouponHTML = document.getElementById("coupon");
        var Couponcode = CouponHTML.value;
        for (var i = 0; i < couponList.length; i++) {
            if (Couponcode === couponList[i]) {
                checkcoupon = true;
            }
        }
        if (checkcoupon) {
            totale = totale * 0.8;
            console.log("20% discount has been applied.")
        }
        console.log("Totale: " + totale);
        var codeHTML = document.getElementById("price");
        codeHTML.innerHTML = totale + " €";
    });

}