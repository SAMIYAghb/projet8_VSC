//votre code ici
const pairNumbers = (a, b) => {
  // Convertir les entrées de type chaîne de caractères en nombres
  a = Number(a);
  b = Number(b);
// Return an empty string if start is greater than or equal to end
  if (a >= b) {
    return '';
  }
  let pairs = [];
  for (let i = a; i <= b; i++) {
    // console.log("pairNumbers", i);

    if (i % 2 === 0) {
      pairs.push(i);
    //   console.log("pairs", pairs);
    }   
  }
//   La méthode join(',') est utilisée pour créer une 
// chaîne de caractères contenant tous les éléments du tableau pairs séparés par des virgules
  console.log("pairs.join", pairs.join(','));
  console.log("=============")
  return pairs.join(',');
};
pairNumbers(1, 10);
// export default pairNumbers
