//votre code ici
const pairNumbers = (a, b) => {
  let pairs = [];
  for (let i = a; i <= b; i++) {
    // console.log("pairNumbers", i);

    if (i % 2 === 0) {
      pairs.push(i);
    //   console.log("pairs", pairs);
    }   
  }
//   La méthode join(',') est utilisée pour créer une chaîne de caractères contenant tous les éléments du tableau pairs séparés par des virgules
  console.log("pairs.join", pairs.join(','));
  return pairs.join(',');
};
pairNumbers(1, 10);
// export default pairNumbers
