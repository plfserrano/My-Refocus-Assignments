function calculateBMI(height,weight){ //height in cm, weight in kg
    // bmi = weight / (height^2)
    let bmi = weight / ((height/100) ** 2);
    return bmi;
}

console.log(calculateBMI(160, 49));