
function showtxt() {
    let auswahl = document.getElementById("mylist").value;
    let ausgabe = document.getElementById("masse");

    switch(auswahl) {
        case "0":
            ausgabe.innerHTML="<b>Brief und Postkarte</b> <br>L: 10 - 23,5 cm<br>B: 7 - 12,5 cm<br>H: bis 1 cm"
            break;
        case "1":
            ausgabe.innerHTML="<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm"
            break;
        case "2":
            ausgabe.innerHTML="<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        case "3":
            ausgabe.innerHTML="<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        default:
            ausgabe.innerHTML="<b>Extra große Größe</b>"
    }
}