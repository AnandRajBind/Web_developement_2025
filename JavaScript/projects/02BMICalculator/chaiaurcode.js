const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value); // string value ko integer me convert karne ke liye parseInt use kiya gaya hai.
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if(height === " "|| isNaN(height) || height<0 ){
result.innerHTML= `Please give a valid height ${height}`
  }
  else if(weight === " "|| isNaN(weight) || weight<0 ){
result.innerHTML= `Please give a valid height ${weight}`
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span> ${bmi} </span>`


//     if(bmi<18.6){
//         result.innerHTML=`Your BMI is less than ${bmi}  `
//     }
//     if(bmi>18.6 && bmi<24.9){
//         result.innerHTML=`Your BMI Normal ${bmi}  `
//     }
//     if(bmi>24.9){
//         result.innerHTML=`Your BMI is greater than ${bmi}  `
//     }
   }
 


});

