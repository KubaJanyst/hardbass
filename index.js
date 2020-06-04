var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var deepBass = new Audio("sounds/bd_909dwsd.wav");
            deepBass.play();
            break;

        case "a":
            var cutBass = new Audio("sounds/bass-cut-044_A.wav");
            cutBass.play();
            break;

        case "s":
            var dirtBass = new Audio("sounds/bd_vinylinstereo.wav");
            dirtBass.play();
            break;

        case "d":
            var subBass = new Audio("sounds/tom_discodisco.wav");
            subBass.play();
            break;

        case "j":
            var oneClap = new Audio("sounds/clap.wav");
            oneClap.play();
            break;

        case "k":
            var oneSnare = new Audio("sounds/snare.wav");
            oneSnare.play();
            break;

        case "l":
            var twoSnare = new Audio("sounds/synth.wav");
            twoSnare.play();
            break;

        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}
