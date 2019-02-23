$(document).ready(function () {

    console.log("working!");

    var mainTargetNumber = 78;
    $("#target-number").text(mainTargetNumber);

    var counter = 0;
    $("#userCounter").text(counter);


    $(".image").on("click", function () {

        var crystalValue = ($(this).attr("value"));

        crystalValue = parseInt(crystalValue);

        counter += crystalValue;
        $("#userCounter").text(counter);

        if (counter === mainTargetNumber) {
            alert("Winner");
        } else if (counter > mainTargetNumber) {
            alert("Loser");
        }

    });

});