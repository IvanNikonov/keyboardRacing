$(document).ready(function () {
    var text = $("#fullText").html().trim();
    var printText;
    var currentPosition = 0;
    var position;
    function debag() {
        console.log("Набранный текст: " + printText + "\n");
        console.log("Номер символа: " + printText.substring(0, position) + "\n");
        console.log("Текущий символ: " + text.substring(currentPosition, position) + "\n");
        console.log("___________________________________" + "\n");
    }
    $("#printField").on('keyup', function (event) {
        printText = $("#printField").val();
        position = printText.length;
        debag();
        if (printText.substring(0, position) === text.substring(currentPosition, position)) {
            $("#printField").css({ "background-color": "#2a2" });
            if (event.keyCode === 32) {
                $("#printField").val('');
                currentPosition = currentPosition + position + 2;
            }
        }
        else {
            $("#printField").css({ "background-color": "#a22" });
        }

    })
})