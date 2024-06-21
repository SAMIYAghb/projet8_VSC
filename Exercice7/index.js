const convertToBinary = () => {
  const inputValue = document.getElementById("decimalInput").value;

  // Vérifier si l'entrée est un nombre valide
  if (!isNaN(inputValue)) {
    // La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier
    const decimal = parseInt(inputValue);
    const binaryNumber = Number(decimal).toString(2);
      // console.log(binaryNumber)
  document.getElementById(
    "binaryResult"
  ).innerText = `La représentation binaire de ${decimal} est : ${binaryNumber}`;
  }else {
    // Si l'entrée n'est pas un nombre valide, effacer le résultat
    document.getElementById('binaryResult').innerText = '';
  }

  // assure que la variable decimal est bien un nombre
  // La méthode toString(2) convertit le nombre en une chaîne de caractères représentant ce nombre en binaire. Le paramètre 2 indique que la base utilisée pour la conversion est la base 2 (binaire).
  

};
convertToBinary(10);
