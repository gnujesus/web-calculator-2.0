let screen = document.querySelector(".screen");
let screenFont = screen.style.fontSize;
let history = "";
let buffer = "";
let operand = "";
let result = 0;

function resetScreen(){
    screen.textContent = 0;
    screen.style.fontSize = "60px"
}

function handleOperation(value1, operation, value2){
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    switch (operation){
        case "plus":
            result = value1 + value2;
            break;

        case "minus":
            result = value1 - value2;
            break;

        case "times":
            result = value1 * value2;
            break;

        case "divide":
            result = value1 / value2;
            break;

        case "percent":
            if (value2 == 0){
                result = (value1/100);
            } else{
                result = (value1/ 100) * value2
            }
    }
}

let btn = {
    value: Array.from(document.querySelectorAll(".btn")),
    target: "",
    handleButtonPress: function (button) {

        console.log(button);

        switch (button){
            case "C":
                screen.textContent = "0";
                resetScreen();
                break;
    
            case "←":
                screen.textContent = screen.textContent.slice(0, -1);

                if (screen.textContent.length == 0){
                    screen.textContent = "0"
                }

                break;

            case "÷":
                buffer = screen.textContent;
                operand = "divide";
                resetScreen();
                break;

            case "×":
                buffer = screen.textContent;
                screen.textContent = "0";
                operand = "times";
                resetScreen();
                break;

            case "−":
                buffer = screen.textContent;
                screen.textContent = "0";
                operand = "minus";
                resetScreen();
                break;

            case "+":
                buffer = screen.textContent;
                screen.textContent = "0";
                operand = "plus";
                resetScreen();
                break;

            case "=":
                handleOperation(buffer, operand, screen.textContent);
                resetScreen();
                handleScreen(screen.textContent.length);
                screen.textContent = result;
                history = screen.textContent;
                buffer = "";
                operand = "";
                break;

            case "%":
                buffer = screen.textContent;
                screen.textContent = "0";
                operand = "percent";
                resetScreen();
                break;
                
            case ".":
                screen.append(button);
                break;

            default:
                if (screen.textContent == "0" || screen.textContent == result.toString() || screen.textContent == "Error"){
                    screen.textContent = "";
                }
                screen.append(button);
                break;

            }

        // if (button === "C") {
        //     screen.textContent = "0";
        // } else {
        //     if (screen.textContent == 0){
        //         screen.textContent = "";
        //     }
        //     screen.append(button);
        // }
    },
}

function handleScreen(){

    if (screen.textContent.length > 7 && screen.textContent.length < 11 ){
        screen.style.fontSize = "45px";
    } else if (screen.textContent.length > 10 && screen.textContent.length < 14) {
        screen.style.fontSize = "35px";
    } else if(screen.textContent.length > 13 && screen.textContent.length < 21){
        screen.style.fontSize = "25px";
    } else if (screen.textContent.length > 20 && screen.textContent.length < 32){
        screen.style.fontSize = "15px";
    } else if (screen.textContent.length > 31){
        screen.style.fontSize = "60px";
        screen.textContent = "Error";
    }

    // if (screen.textContent.length > 33){
    //         screen.style.fontSize = "60px";
    //         screen.textContent = "Error";
    // }
    return;
}

for (let i = 0; i < btn.value.length; i++) {
    btn.value[i].addEventListener("click", function (event) {
        btn.handleButtonPress(event.target.textContent);
        handleScreen();
    })
}

// Add a variable target to delete the parameters recived by the `handleButtonPress` function
