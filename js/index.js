document.getElementById('submit').addEventListener('click', getName);

function getName() {
    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var prefixes = ["Untrustworthy ","Mild mannered ","The old boss ", "Night time ", "Auld saggy ", "Wet willy O'", "O'", "Ronald Mac ", "The wee bellboy ", "Thirsty ", "Hard working ",
                    "Green guts ", "Best boy ", "Horny ", "Dirty ", "Ogre breath ", "Pug face ", "Disgruntled ", "Down'n'Out ", "Randy ", "Evil ", "Saint ", "Penny grabber "],
        affixes = ["'s dirty satchel", "'s torn coat", "'s turnip juice", "berg", "'s bad breath", "'s thirsty throat", "'s milk", 
                  "'s elixir", "'s magic shandy", "'s home wrecker", "'s pot pouri mix", "'s jail cell", "'s porridge juice", "'s liquid lunch", "'s morning glory", "'s evening in", "'s late night delight"],
        randomise = randomNumber(3, 0),
        randyP = randomNumber(prefixes.length, 0),
        randyA = randomNumber(affixes.length, 0),
        randomPrefix = prefixes[randyP],
        randomAffix = affixes[randyA],
        fonts = ["'Nothing You Could Do'", "'Rock Salt'", "'Ewert'", "'Limelight'","'Permanent Marker'","'Playball'","'Kaushan Script'"],
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