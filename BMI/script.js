const form = document.querySelector("form");
//const height = parseInt(document.querySelector('#height').value)
//this usecase will give you empty values

form.addEventListener("submit", function (e) {
  e.preventDefault(); //to prevent default events

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give avalid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    let bmiCategory;
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = "Normal weight";
    } else {
      bmiCategory = "Overweight";
    }
    results.innerHTML = `<span>${bmiCategory}: ${bmi}</span>`;
  }
});
