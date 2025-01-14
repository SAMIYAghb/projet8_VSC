// Créez votre fonction ici
// const calculate = (a, b, operator)=>{
//     if(operator === '+'){
//         return a + b;
//     }
//     if(operator === '-'){
//         return a - b;
//     }
//     if(operator === '*'){
//         return a * b;
//     }
//     if(operator === '/'){
//         if(b === 0){
//             return "Division by zero is not allowed";
//         }else{
//             return a / b;
//         }        
//     } 
//     if(operator === '%'){
//         return "Invalid operator";
//     }
// }
const calculate = (a, b, operator) => {
    // Convertir les entrées en nombres
  a = Number(a);
  b = Number(b);
  // Vérifier si la conversion a échoué
  if (isNaN(a) || isNaN(b)) {
    return "Invalid number";
  }
  
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Division by zero is not allowed";
            } else {
                return a / b;
            }
        case '%':
            return "Invalid operator";
        default:
            return "Invalid operator";
    }
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"
console.log("=============");
// export default calculate
