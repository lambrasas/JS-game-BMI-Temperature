// let randomNumber = Math.floor(Math.random() * 10) + 1;

// let game =(randomNumber)=>{
//     for(let i=0;i<5;i++){
//         let guess = parseInt(prompt("Guess the number 1-10"))
//         if(guess===randomNumber){
//             alert("You win!")
//             return
//         }else{
//             alert("Wrong guess. Try again")
//         }

//     }
//     alert("You are out of guesses, the number was: "+randomNumber)
// }
// game(randomNumber)


// ANTRA UZDUOTIS BMI



// function calcBmi(){
//     let weight=parseFloat(prompt("Iveskite savo svori"))
//     let heightCm=parseFloat(prompt("Iveskite savo ugi cm"))
//     let heightMeters=heightCm/100
//     let bmi=weight/(heightMeters**2)
//     let category;
//     if(isNaN(weight)|| isNaN(heightCm)){
//         alert("Iveskite teisingus duomenis. Pvz: 50 (kg) ir 180(cm)")
//         return
//     }
   
//     if (bmi < 18.5) {
//         category = "Underweight";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         category = "Normal weight";
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         category = "Overweight";
//     } else {
//         category = "Obesity";
//     }
//     alert("Your BMI is: " +bmi.toFixed(2)+" Category: "+ category)
// }
// calcBmi()

//TRECIA UZDUOTIS KALKULIATORIUS

// function caculator(){
//     let num1=parseFloat(prompt("Iveskite pirma skaiciu"))
//     let num2=parseFloat(prompt("Iveskite antra skaiciu"))
//     let operator = prompt("Iveskite norimo veiksmo simboli (+, -, *, /)");
//     let result;
//     if(operator==="+"){
//         result=num1+num2
//     }else if(operator==="-"){
//         result=num1-num2 
//     }else if(operator==="*"){
//         result=num1*num2 
//     }else if(operator==="/"){
//         if(num2===0){
//             alert("Negalima dalinti is 0")
//             return
//         }
//         result=num1/num2 
//     }else{
//         alert("Netinkamas simbolis")
//         return
//     }
//     alert("Resultatas: "+result)
// }
// caculator()

//KETVIRTA UZDUOTIS TEMPERATUROS KONVERTAVIMAS

function temperature(){
    let temperatureNumber=parseFloat(prompt("Iveskite temperaturos skaiciu"))
    let temperatureVariant=prompt("Iveskite temperaturos tipa kuri norite keisti i kita. Pvz:°C, °F")
    let result;
    if(temperatureVariant==="°C"|| temperatureVariant==="C"||temperatureVariant==="c"||temperatureVariant==="celcius"||temperatureVariant==="Celcius"){
        result=(temperatureNumber*1.8)+32
        alert(temperatureNumber + "°C yra " + result.toFixed(2) + "°F");
    }else{
        result=(temperatureNumber-32)/1.8
        alert(temperatureNumber + "°F yra " + result.toFixed(2) + "°C");
        
    }
}
temperature()