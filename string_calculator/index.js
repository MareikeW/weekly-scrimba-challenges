const mainContainer = document.getElementById("main-container");
const equationField = document.getElementById("equation-field");
const solveButton = document.getElementById("solve-button");
const solutionDisplay = document.getElementById("solution-display");

solveButton.addEventListener("click", function() {
    // Clears the solution contents on each click
    solutionDisplay.innerHTML = ``
    
    // Write your code here 👇
    let equationArray = equationField.value.split(" ");
   
    let firstValue = Number(equationArray[0]);
    let operator = equationArray[1];
    let secondValue = Number(equationArray[2]);
    let result = 0;
    
    switch(operator) {
        case "+":
            result = firstValue + secondValue;
            break;
        case "-":
            result = firstValue - secondValue;
            break;
        case "/":
            result = firstValue / secondValue;
            result = result.toFixed(2);
            break;
        case "*":
            result = firstValue * secondValue;
            break;
        default:
            result = "No valid operation."    
    }
    
    let firstValueComponent = document.createElement("div");
    let operatorComponent = document.createElement("div");
    let secondValueComponent = document.createElement("div");
    let equalSignComponent = document.createElement("div");
    let resultComponent = document.createElement("div");
    
    firstValueComponent.classList.add("equation-component");
    operatorComponent.classList.add("equation-component");
    secondValueComponent.classList.add("equation-component");
    equalSignComponent.classList.add("equation-component");
    resultComponent.classList.add("equation-component");
    
    firstValueComponent.textContent = firstValue;
    firstValueComponent.style.background = "orange";
    operatorComponent.textContent = operator;
    operatorComponent.style.background = "lightgreen";
    secondValueComponent.textContent = secondValue;
    secondValueComponent.style.background = "orange";
    equalSignComponent.textContent = "=";
    equalSignComponent.style.background = "lightgreen";
    resultComponent.textContent = result;
    resultComponent.style.background = "purple"
    
    solutionDisplay.append(firstValueComponent, operatorComponent, secondValueComponent, equalSignComponent, resultComponent);
    
    
})

/*
Part 1 (Calculation): 
    +Your first goal is to solve a simple text-based
        math problem entered in the input field
    +The problem can be add/sub/multiply/divide
    +Here are few examples: 
        "3 + 3" -> 6
        "10 - 3" -> 7
        "44 / 2" -> 22
        "2 * 8" -> 16 
    +When the 'Solve' button is clicked
        -Create a new div with the
            class 'equation-component'
            its text value should be the solution
            to the input equation
        -This element should be added as a child of 
            the `solutionDisplay` div

    Note: You can assume there will always only be 2 values, 
        both whole integers, and always a space between each 
        integer and the operator as in the above examples


Part 2 (Flex Display): 
    Then, you'll Flex your Flexbox skills!
    + Vertically stack the contents of the mainContainer
    + Center the content horizontally
    + Display all components of the equation 
        in the solutionDisplay using a horizontal Flexbox
        with `space around` each component
    
Skills: 
    Event Listeners, String Manipulation, Array Manipulation, 
Arithmetic, DOM Manipulation, Flexbox



STRETCH GOALS:
    +Accept and solve more complex problems with more than 2 inputs
    +Signal the different types of components (operator/value/solution) with different colors
    +Accept strings without spaces
    +Can you improve the overall design?
*/