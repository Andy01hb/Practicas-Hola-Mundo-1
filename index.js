const insultos = [

"Tonto",
"Inútil",
"Idiota",
"Imbécil",
"Necio",
"Patán",
"Bruto",
"Bufón",
"Torpe",
"Bobalicón",
"Zopenco",
"Mentecato",
"Chiflado",
"Retardado",
"Cenutrio",
"Zángano",
"Pelmazo",
"Botarate",
"Tarado",
"Lerdo",

];

function generarinsulto() {
    const randomindex = Math.floor(Math.random() * insultos.length);
    const insulto = insultos[randomindex];
    document.getElementById("insulto").innerText = insulto;
}
document.querySelector(".abutton").addEventListener("click", generarinsulto);