console.log(document.querySelectorAll(".drum"));
for(let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    //Detecting button press
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //var audio=new Audio("sounds/tom-1.mp3");
        //audio.play();
        var buttonInnerHTML = this.innerHTML; 
        makesound(buttonInnerHTML);
        animation(buttonInnerHTML);
        
    });
    //Detecting keyboard press
    document.addEventListener("keydown",function(event){
        makesound(event.key);

        animation(event.key);
    });
    function makesound(key){
        switch(key) { 
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                var kick = new Audio("sounds/kick.mp3");
                kick.play();
                break;

            case "s":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "d":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "j":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "k":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            default:
                console.log(buttonInnerHTML);
        }
    }

    function animation(currentkey){
        var activeButton = document.querySelector("."+currentkey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
    },100)
}
}
