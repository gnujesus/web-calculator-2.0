let screen = document.querySelector(".screen");
let screenFont = screen.style.fontSize;
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
            result = (value1/ 100) * value2
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
                screen.textContent =  "0";
                resetScreen();
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
                break;

            case "%":
                buffer = screen.textContent;
                screen.textContent = "0";
                operand = "percent";
                break;
                
            default:
                if (screen.textContent == 0 || screen.textContent == result || screen.textContent == "Error"){
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

function handleScreen(screenTextLength){

    if (screen.textContent.length > 7 && screen.textContent.length < 11 ){
        screen.style.fontSize = "45px";
    } else if (screen.textContent.length > 11 && screen.textContent.length < 15) {
        screen.style.fontSize = "35px";
    } else if(screen.textContent.length > 14 && screen.textContent.length < 17){
        screen.style.fontSize = "25px";
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
        handleScreen(screen.textContent.length);
    })
}

// Add a variable target to delete the parameters recived by the `handleButtonPress` function
