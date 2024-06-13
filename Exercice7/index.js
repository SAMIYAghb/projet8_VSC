const convertToBinary = () =>{
    // La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier 
    const decimal = parseInt(document.getElementById('decimalInput').value);
    // assure que la variable decimal est bien un nombre
    // La méthode toString(2) convertit le nombre en une chaîne de caractères représentant ce nombre en binaire. Le paramètre 2 indique que la base utilisée pour la conversion est la base 2 (binaire).
    const binaryNumber = Number(decimal).toString(2);
    // console.log(binaryNumber)
    document.getElementById('binaryResult').innerText = `La représentation binaire de ${decimal} est : ${binaryNumber}`;
}
convertToBinary(10);