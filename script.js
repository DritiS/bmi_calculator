
function calculateBMI() {
  // Move these lines inside the function
  let height = document.getElementById('Height').value;
  let weight = document.getElementById('Weight').value;

  // Check if height and weight are non-empty and numeric
  if (height !== '' && weight !== '' && !isNaN(height) && !isNaN(weight)) {
      let bmi = (Number(weight) * 10000) / (Number(height) * Number(height));
      document.getElementById("demo").innerHTML = "Your BMI is: " + bmi.toFixed(2);
  } else {
      document.getElementById("demo").innerHTML = "Please enter valid height and weight.";
  }

  return false;

}

function changeImage() {
  let image = document.getElementById('myImage'); // Declare image variable here
  let height = document.getElementById('Height').value;
  let weight = document.getElementById('Weight').value;

  let bmi = (Number(weight) * 10000) / (Number(height) * Number(height));

  
  if (bmi <= 18.5) {
    image.src = "Underweight (2).png";
  } else if (bmi > 18.5 && bmi < 25) {
    image.src = "Normal.png";
  } else if (bmi >= 25 && bmi < 30) {
    image.src = "Overweight.png";
  } else {
    image.src = "Obese.png";
  }
}

function calculateBMI2() {
  // Move these lines inside the function
  let height = document.getElementById('Height').value;
  let weight = document.getElementById('Weight').value;

  // Check if height and weight are non-empty and numeric
  if (height !== '' && weight !== '' && !isNaN(height) && !isNaN(weight)) {
      let bmi2 = (Number(weight) * 703) / (Number(height) * Number(height)*144);
      document.getElementById("demo").innerHTML = "Your BMI is: " + bmi2.toFixed(2);
  } else {
      document.getElementById("demo").innerHTML = "Please enter valid height and weight.";
  }

  return false;
}

function changeImage2() {
  let image = document.getElementById('myImage'); // Declare image variable here
  let height = document.getElementById('Height').value;
  let weight = document.getElementById('Weight').value;

  let bmi2 = (Number(weight) * 703) / (Number(height) * Number(height)*144);

  
  if (bmi2 <= 18.5) {
    image.src = "Underweight (2).png";
  } else if (bmi2 > 18.5 && bmi2 < 25) {
    image.src = "Normal.png";
  } else if (bmi2 >= 25 && bmi2 < 30) {
    image.src = "Overweight.png";
  } else {
    image.src = "Obese.png";
  }
}


