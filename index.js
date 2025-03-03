document.addEventListener("DOMContentLoaded", function() {
    function boutton() {
        let boutton1 = document.getElementById("sub1");
        let boutton2 = document.getElementById("sub2");
        let boutton3 = document.getElementById("sub3");
        let boutton4 = document.getElementById("sub4");
        let boutton5 = document.getElementById("sub5");
        let boutton8 = document.getElementById("sub8");
        let boutton9 = document.getElementById("sub9");
        let boutton10 = document.getElementById("sub10");
        let boutton12 = document.getElementById("sub12");
        let boutton13 = document.getElementById("sub13");
        let boutton14 = document.getElementById("sub14");
        let boutton15 = document.getElementById("sub15");

        boutton1.addEventListener("click", function() {
            alert("Vous avez commandé de la tomate fraîche");
        });
        boutton2.addEventListener("click", function() {
            alert("Vous avez commandé du concombre frais");
        });
        boutton3.addEventListener("click", function() {
            alert("Vous avez commandé des choux frais");
        });
        boutton4.addEventListener("click", function() {
            alert("Vous avez commandé des poivrons");
        });
        boutton5.addEventListener("click", function() {
            alert("Vous avez commandé des carottes");
        });
        boutton8.addEventListener("click", function() {
            alert("Vous avez commandé de l'oignon marocain");
        });
        boutton9.addEventListener("click", function() {
            alert("Vous avez commandé des céleris européens");
        });
        boutton10.addEventListener("click", function() {
            alert("Vous avez commandé des persils");
        });
        boutton12.addEventListener("click", function() {
            alert("Vous avez commandé un panier de fruits");
        });
        boutton13.addEventListener("click", function() {
            alert("Vous avez commandé des herbes d'assaisonnement piquant");
        });
        boutton14.addEventListener("click", function() {
            alert("Vous avez commandé des kiwis");
        });
        boutton15.addEventListener("click", function() {
            alert("Vous avez commandé des bananes plantains");
        });
    }

    boutton();
});
