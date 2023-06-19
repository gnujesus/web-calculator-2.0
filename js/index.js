let screen = document.querySelector(".screen");
let buffer = "";
let operand = "";
let result = 0;

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
                break;
    
            case "←":
                screen.textContent =  "0";
                break;

            case "÷":
                buffer = screen.textContent;
                screen.textContent = "0";
                operand = "divide";
                break;

            case "×":
                buffer = screen.textContent;
                screen.textContent = "0";
                operand = "times";
                break;

            case "−":
                buffer = screen.textContent;
                screen.textContent = "0";
                operand = "minus";
                break;

            case "+":
                buffer = screen.textContent;
                screen.textContent = "0";
                operand = "plus";
                break;

            case "=":
                handleOperation(buffer, operand, screen.textContent);
                screen.textContent = result;
                break;

            case "%":
                buffer = screen.textContent;
                screen.textContent = "0";
                operand = "percent";
                break;
                
            default:
                if (screen.textContent == 0 || screen.textContent == result){
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
    }
}

for (let i = 0; i < btn.value.length; i++) {
    btn.value[i].addEventListener("click", function (event) {
        btn.handleButtonPress(event.target.textContent)
    })
}

// Add a variable target to delete the parameters recived by the `handleButtonPress` function
