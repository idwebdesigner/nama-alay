document.getElementById('submit').addEventListener('click', getName);

function getName() {
    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var prefixes = ["Dengansepenuhhati ","Kanselalucayan","inhilangingatan", "Manusia Biasa ", "C'yank Dya ", "Wet willy O'", "O'", "Ronald Mac ", "The wee bellboy ", "bahagia-melihatmu Tersenyum ", "NggaSuka'BasaBasi-KalauMau Ngomong'Mending-ToThe Point'Aja ",
                    "Emuach-Emuach ", "Si Piink-Queenchez ", "Tersenyum'Maniez ", "'Akan-Selalu ", "Cinta-iank'tulus ", "Pug face ", "Disgruntled ", "Down'n'Out ", "Randy ", "PengenBelajar Utk'merasakan-sebuah Keikhlasan ", "jenuh'Dengan-smuaini ", "Hatiya-Cenat'Cenut "],
        affixes = ["' sedih lihat", "Hiks", "Meski'HatidanCinta-ini ", "Telah'qauLukai-GubRakk", "'LoversEdition", "'iank-prnhMrasakn", "'s milk", 
                  "Sakityach'CintaDumay", "Tpi-ttapBngkit'danMncari", "SelaLu'MngingatMu", "'s pot pouri mix", "KaloDi-Pasar SuQa'Nyasar", "'s porridge juice", "'s liquid lunch", "'s morning glory", "Akan Trus'TinggalDi-HatinyaDlam Jrak'WaktuYang-CkupLama", "Kuinginmelukis'sinarmudihati"],
        randomise = randomNumber(3, 0),
        randyP = randomNumber(prefixes.length, 0),
        randyA = randomNumber(affixes.length, 0),
        randomPrefix = prefixes[randyP],
        randomAffix = affixes[randyA],
        fonts = ["'Ewert'"],
        name = document.getElementById('userName').value,
        beerName;
  
    if(name.length >= 1){
    if (randomise === 0) {
        beerName = randomPrefix + name;
    } else if (randomise === 1) {
        beerName = name + randomAffix;
    } else {
        beerName = randomPrefix + name + randomAffix;
    } 
    document.getElementById("title").style.fontFamily = fonts[randomNumber(fonts.length, 0)];
    document.getElementById('title').innerHTML = beerName;
    } else {
      alert("Enter your name first!");
    }

   
}

var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($button, duration, {
        scaleY: 1.6,
        ease: Expo.easeOut
    });
    TweenMax.to($button, duration, {
        scaleX: 1.2,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [3],
        delay: delay
    });
    TweenMax.to($button, duration * 1.25, {
        scaleX: 1,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [6],
        delay: delay * 3
    });
});