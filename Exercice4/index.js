const btn = document.getElementById('myButton');
btn.addEventListener('click', ()=>{
    const p = document.createElement('p');
    p.textContent = ("Bonjour, vous avez cliqué sur le bouton !")
    btn.insertAdjacentElement('afterend',p);
    // afterend' spécifie que l'élément doit être inséré juste après l'élément cible (btn).
})