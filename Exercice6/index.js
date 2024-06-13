const input = document.getElementById("display");

const appendToDisplay = (value) => {
  //   input.value += value;
  const operators = ["+", "-", "*", "/"];
  // On récupère le dernier caractère de la valeur actuelle affichée dans l'élément input
  const lastChar = input.value.charAt(input.value.length - 1);

  if (!isNaN(lastChar) || lastChar === ".") {
    // Si le dernier caractère est un chiffre ou un point décimal
    input.value += value;
  } else if (operators.includes(lastChar) && !operators.includes(value)) {
    // Si le dernier caractère est un opérateur mais pas le nouveau
    input.value += value;
     // Si le dernier caractère est un signe moins ('-') et le nouveau caractère n'est pas un signe moins,
  // cela signifie que nous pouvons ajouter le nouveau caractère
  } else if (value !== "-" && lastChar === "-") {
    // Permet de saisir des nombres négatifs
    input.value += value;
  }
};

const clearDisplay = () => {
  input.value = "";
};

const calculateResult = () => {
  const expression = input.value;
  //   console.log(expression);
  const result = eval(expression);

  if (Number.isFinite(result)) {
    // input.value = result;
    // Si le résultat est un nombre décimal
    const resultString = result.toString();
    input.value = resultString;
  } else {
    input.value = "Division by zero is not allowed";
  }
};

// const x = 10;
// const y = 20;
// const expression = 'x + y'; // Une chaîne représentant une expression JavaScript
// const result = eval(expression); // évalue l'expression et stocke le résultat dans result
// console.log(result); // Affiche 30

// Number.isFinite() est une méthode statique en JavaScript qui détermine si la valeur passée en argument est un nombre fini. Elle renvoie true si la valeur est un nombre fini, c'est-à-dire qu'elle n'est ni NaN (Not a Number) ni Infinity ni -Infinity. Sinon, elle renvoie false.
