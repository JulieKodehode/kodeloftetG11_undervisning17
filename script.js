function converter() {
  // Fetch elements and values from HTmL.
  const input = parseFloat(document.querySelector("#input").value);
  console.log(input);
  const startUnit = document.querySelector("#startUnit").value;
  console.log(startUnit);
  const endUnit = document.querySelector("#endUnit").value;
  console.log(endUnit);
  let result = document.querySelector("#result");
  console.log(result);
  let convertedNumber = 0;
  console.log(convertedNumber);

  // Checking if input have a number.
  if (Number.isNaN(input)) {
    result.textContent = "Ikke skrevet inn et tall"
    result.style.color = "red"
    console.log("Ikke skrevet inn tall")
    return;
  }

  // Checking if the value of startUnit and endUnit is the same.
  if (startUnit === endUnit) {
    result.textContent = "Velg to forskjellige enheter";
    result.style.color = "red";
    console.log("Velg to forskjellige")
    return;
  }

  // Doing the calculations from startUnit and endUnit with the value of input.
  if (startUnit === "mm" && endUnit === "cm") {
    // Calculation from mm to cm here
    convertedNumber = input / 10;
  } else if (startUnit === "mm" && endUnit === "m") {
    // Calculation from mm to m here
    convertedNumber = input / 1000;
  } else if (startUnit === "cm" && endUnit === "mm") {
    // Calculation from cm to mm here
    convertedNumber = input * 10;
  } else if (startUnit === "cm" && endUnit === "m") {
    // Calculation from cm to m here
    convertedNumber = input / 100;
  } else if (startUnit === "m" && endUnit === "mm") {
    // Calculation from m to mm here
    convertedNumber = input * 1000;
  } else if (startUnit === "m" && endUnit === "cm") {
    // Calculation from m to cm here
    convertedNumber = input * 100;
  } else {
    console.log("Something went terrible wrong 🤯")
  }

  // Verifying and displaying the result.
  console.log(convertedNumber);
  result.textContent = input + startUnit + " = " + convertedNumber + endUnit;
}


// Fetching the element we want to trigger the event with.
const button = document.querySelector('#button');

// The click event on the button activating the function doing the calculation.
button.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Button is clicked!');
  converter()
});
