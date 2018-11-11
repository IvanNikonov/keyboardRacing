$(document).ready(function(){
    var text=$("#fullText").html().trim();
    var printText;
    var currentPosition=0;
    var position;
    $("#printField").on('keyup', function(event){
        printText=$("#printField").val();
        position = printText.length;
        if(printText.substring( 0, position)===text.substring( currentPosition, position)){
            $("#printField").css({"background-color" : "#2a2"});
            if(event.keyCode===32){
                $("#printField").val('');
                currentPosition=position++;
            }
        }
        else{
            $("#printField").css({"background-color" : "#a22"});
        }
    })
})