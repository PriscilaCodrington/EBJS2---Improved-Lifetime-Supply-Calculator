
const person1 = {

    name: "Mario",
    currentAge : 18,
    maxAge: 90,
    amountperWeek: 20
}
const person2 = {

    name: "Victoria",
    currentAge : 30,
    maxAge: 95,
    amountperWeek: 35
}
const person3 = {

    name: "Ana Martha",
    currentAge : 22,
    maxAge: 87,
    amountperWeek: 10
}

function lifetimeCalculator(name, currentAge, maxAge, amountperWeek){
    let years = maxAge - currentAge;
    let weeks = (years*365)/7;
    let totalLife = amountperWeek * weeks;
    return name + " has " + currentAge + " years and will eat " + totalLife + " potatoes until ages of " + maxAge ;
}


lifetimeCalculator(person1.name, person1.currentAge, person1.maxAge, person1.amountperWeek);
lifetimeCalculator(person2.name, person2.currentAge, person2.maxAge, person2.amountperWeek);
lifetimeCalculator(person3.name, person3.currentAge, person3.maxAge, person3.amountperWeek);

console.log(lifetimeCalculator(person1.name, person1.currentAge, person1.maxAge, person1.amountperWeek));
console.log(lifetimeCalculator(person2.name, person2.currentAge, person2.maxAge, person2.amountperWeek));
console.log(lifetimeCalculator(person3.name, person3.currentAge, person3.maxAge, person3.amountperWeek));