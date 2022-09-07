function ageCalculator(name, yearOfBirth, currentYear) {
let age = currentYear - yearOfBirth
return (name + " is " + age + " years old.")
} console.log(ageCalculator("Jack", 1975, 2022));