// Créez votre fonction ici
const calculateAverage = (array) => {
  // Vérifier si le tableau est indéfini ou vide
  if (!array || array.length === 0) {
    return "No numbers to calculate average";
  }
  // Initialisation de la somme à 0
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    // console.log(i);
    // console.log(array[i]);
    // Convertir les éléments en nombres s'ils sont des chaînes de caractères
    let num = Number(array[i]);
    // Vérifier si la conversion a échoué
    if (isNaN(num)) {
      return "Invalid number in array";
    }
    sum += num;
  }
  // console.log(sum);
  return sum / array.length;
};

// const calculateAverage = (array) => {
//     if (!array) {
//         return "No numbers to calculate average";
//     }
//     const sum = array.reduce((acc, curr) => acc + curr, 0);
//     return sum / array.length;
// }
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average
console.log("=============");
// export default calculateAverage
