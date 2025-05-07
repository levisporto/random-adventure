


function knowFate(){

    const mainImg = document.getElementById("mainImg");

    let randomImg = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    if(randomImg === 0){ // Using === for comparison
        mainImg.src = "PNG/htc-2.png";
    } else if (randomImg === 1){ // Using === for comparison
        mainImg.src = "PNG/htc-3.png";
    } else { // This will catch randomImg === 2
        mainImg.src = "PNG/htc-4.png";
    }


    let randomStartPoint
let startPoint = ["Deep into the vulcano", "Down in the rabbit hole", "At the shore", "In a small tent", "In a small village", "Amidst the stars", "At a cold, dark and strange cave", "Into the mountain top", "Locked into a prision cell", "Buried deep into the tomb", "In a big town, next to the castle walls", "Into a lucid dream", "In the dark, dark woods", "From the wicked flesh", "In the colony of the ice reign", "In the oriental lands", "In a parallel universe, above time and space", "In the golden realm", "Inside a magical painting", "Far into the desert"]
randomStartPoint = Math.floor(Math.random() * startPoint.length);

const h1 = document.getElementById("h1");
newh1 = startPoint[randomStartPoint]
h1.textContent= newh1 + ', ';

let startStory = ["a vile monster, with red eyes and sharp teeth", "of royal blood, next in line of the succession", "a oracle, receiving visions in your dreams", "a lone warrior, capable and experienced, riding a strong steed", "a mighty wizard, using cape and robe and knowing powerful spells", "infected with a rare disease, and your days are numbered", "a ghostly being, having already died but returning to fulfil your duty", "a thief, able to sneak in, pickpocket and go unnoticed", "a magical being, ethreal, hard to describe", "a hunter, experienced with the bow and arrow", "a coward, hiding in the dark, treacherous", "a mercenary, looking for jobs that pays a good coin", "a druid, able to turn into any animal you want", "a tavern owner, selling drinks and bread", "a smart herbalist, guarding the last seeds of the world", "dying, on your last breath, and ready to depart to the next realm", "a giant, standing tall above others, with massive strenght and health", "the charismatic one: beautiful, graceful, and with good manners", "the one from the prophecies, returned after a thousand years", "from a secret alliance, united to usurp the throne", "a fairy, with beautiful wings and magical abilities", "a dangerous criminal, feared by all"]
randomStartStory = Math.floor(Math.random() * startPoint.length);
newStartStory = startStory[randomStartStory]



const h2 = document.getElementById("h2");
newh2 = startPoint[randomStartPoint]
h2.textContent= 'your adventure begins. You are ' + newStartStory + '. ' 





}






function randomEmojis(){
    const emoji1 = document.getElementById("emoji1");
    const emoji2 = document.getElementById("emoji2");
    const emoji3 = document.getElementById("emoji3");
    const emoji4 = document.getElementById("emoji4");
    const emoji5 = document.getElementById("emoji5");


let newEmoji;



let random1 = Math.floor(Math.random() * emojiList.length);
let random2 = Math.floor(Math.random() * emojiList.length);
let random3 = Math.floor(Math.random() * emojiList.length);
let random4 = Math.floor(Math.random() * emojiList.length);
let random5 = Math.floor(Math.random() * emojiList.length);

newEmoji1 = emojiList[random1]
newEmoji2 = emojiList[random2]
newEmoji3 = emojiList[random3]
newEmoji4 = emojiList[random4]
newEmoji5 = emojiList[random5]




    emoji1.src =  `https://emojiapi.dev/api/v1/${newEmoji1}/120.png`
    emoji2.src = `https://emojiapi.dev/api/v1/${newEmoji2}/120.png`
     emoji3.src = `https://emojiapi.dev/api/v1/${newEmoji3}/120.png`
      emoji4.src = `https://emojiapi.dev/api/v1/${newEmoji4}/120.png`
       emoji5.src = `https://emojiapi.dev/api/v1/${newEmoji5}/120.png`




       const firstButton = document.getElementById("firstButton");
       firstButton.textContent="Roll it again!";



}