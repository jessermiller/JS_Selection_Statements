console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


//Exercise 1 num guessing

let favNum = 6;

let guessAnswer = window.prompt("Guess my favorite number");

if (guessAnswer == favNum ) {
  console.log("Congratulations!");
}
else if (guessAnswer < favNum) {
  console.log("Too low!");
}
else if (guessAnswer > favNum) {
  console.log("Too High!");
}
else if (isNaN(guessAnswer)) {
  console.log("Thats not a valid number.");
}

// Exercise 2 Birth month

let birthMonth = window.prompt("Insert Birth Month");

switch (birthMonth) {
  case ("December"):
  case ("February"):
  case ("January"):
    console.log("Winter");
    break;

  case ("March"):
  case ("April"):
  case ("May"):
    console.log("Spring");
    break;

  case ("June"):
  case ("July"):
  case ("August"):
    console.log("Summer");
    break;

  case ("September"):
  case ("October"):
  case ("November"):
    console.log("Autumn");
    break;
  default: 
    console.log("I didnt get that..");
}

//Exercise 3 Business Logic



let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId) {
  case "01":
    type ="Tank Top";
    break;
 
  case "02":
    type = "T-Shirt";
    break;

  case "03":
    type = "Long Sleeve";
    break;
 
   case "04":
    type = "Sweat Shirt";
    type = "Other";
   
}

switch(colorId) {
    case "BL":
      color = "Black";
      break;
    
    case "BU":
      color = "Blue";
      break;

    case "RD":
      color = "Red";
      break;
    
    case "PU":
      color = "Purple";
      break;

    case "WH":
      color = "White";

}

switch(sizeId) {
    case "S":
      size = "Small";
      break;

    case "M":
      size = "Medium";
      break;

    case "L":
      size = "Large";
      break;

    case "XL":
      size = "Extra Large";
      

}


console.log(`Product: ${size} ${color} ${type}`);