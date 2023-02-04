//a little spaceing 
console.log("\n=========================");
// Feet to Inch
function feetToInch(feet) {
    return feet * 12;
}
console.log("3 feet in Inch is: ", feetToInch(3));

//Centimeter To Meter 
function centimeterToMeter(centimeter) {
    return centimeter / 100;
}
console.log("7 Centimeter in Meter: ", centimeterToMeter(7));

// Paper Calculator
function paperRequirements(book1, book2, book3) {
    let book1Paper = 100;
    let book2Paper = 200;
    let book3Paper = 300;
    book1 = book1 * book1Paper;
    book2 = book2 * book2Paper;
    book3 = book3 * book3Paper;
    return book1 + book2 + book3;
}
console.log("Total Paper Needed: ", paperRequirements(5, 6, 7));

//Best Finder
function bestFriend(friends) {
    let bestOne = friends[0];
    friends.forEach(e => {
        //console.log(e, e.length);
        if (e.length > bestOne.length) {
            bestOne = e;
        }
    });
    return bestOne;
}
const friends = ["tarek", "bafffssssffffrek", "abdullah", "khabduldddlah", "colimuffllah", "kolimullaah", "ataullah"];
console.log("My Best Friend: ", bestFriend(friends), "\n=======================");

//Find all the first Positive numbers
function positiveNumbers(arr) {
    let positiveNumbers = [];
    for(let e of arr) {
        if (e > 0 || e === 0) {
            positiveNumbers.push(e);
        } else if (e < 0) {
            break;
        }
    }
    return positiveNumbers;
}
const arr = [23,65,2,0,-3,56,67,-5,56,45,-3];
console.log("Positive Numbers are: ", positiveNumbers(arr));
