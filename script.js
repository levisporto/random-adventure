


function knowFate(){

    const mainImg = document.getElementById("mainImg");

    let randomImg = Math.floor(Math.random() * 9); // Generates 0-10

    switch (randomImg) {
        case 0:
          mainImg.src = "PNG/htc-2.png";
          break;
        case 1:
          mainImg.src = "PNG/htc-3.png";
          break;
        case 2:
          mainImg.src = "PNG/htc-4.png";
          break;
        case 3:
          mainImg.src = "PNG/htc-5.png";
          break;
        case 4:
          mainImg.src = "PNG/htc-6.png";
          break;
        case 5:
          mainImg.src = "PNG/htc-7.png";
          break;
        case 6:
          mainImg.src = "PNG/htc-8.png";
          break;
        case 7:
          mainImg.src = "PNG/htc-9.png";
          break;
        case 8:
          mainImg.src = "PNG/htc-10.png";
          break;
        case 9:
          mainImg.src = "PNG/htc-11.png";
          break;
          case 10:
            mainImg.src = "PNG/htc-12.png";
            break;
            
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



let startQuest = ["You must bring peace to all the land.", "You shall build an empire.", "You must conduct your army to victory.", "You need to find a cure for the plague.", "You must venture deep into the woods and find the hidden mystical being.", "You must get revenge on those who wronged you.", "You wake up with a strange desire of flesh meat - raw flesh.", "The king sent guards after you - they are waiting at the door.", "The king came hidden to have a word with you.", "Assassins are on the lookout for you.", "There is a big bounty on your head. You are being pursued.", "You must contact the oracle to know your fate this time.", "You must defeat the evil dragon, which threatens to eat the whole world.", "The witch bewitched you with superhuman strengh, agility and health.", "The queen promised you lands and gold if you fullfil your quest.", "The queen provided you with magical equipament and an escort.", "You are to plant a magic seed into the roots of the world.", "You must defeat the demon lord, going insane after the lost of his daughter.", "You are to burn the candlelight at the shore, to bring the ships home.", "You are the weapon they need to finish the war.", "You decide to compete on the tournament, and must travel to the capital.", "You fight for fame, glory and worldwide recognition.", "Your loved one was taken. You must go before it is too late.", "Your family is being held at the castle walls.", "The thief has your puppy dog.", "You are haunted by visions and ghosts, unable to dream.", "You must close your eyes and dream a long dream.", "The tribe performs a ritual on you. You feel strange. What is happening?", "You were once old and tired, but now you reborn as a younger, more beautiful and stronger version of yourself.", "You are the commander, and need to protect your land from the invasors.", "Strange ships come from the sky at night. You are to investigate the sightings.", "A serial murderer is acting on your small village. Who could he/she be?", "You now are able to travel between time and dimensions. So you venture into a distant past.", "The queen saw you on the streets and now she is deeply in love with you.", "Your ship was attacked by pirates. You jumped into the sea and know you are heading to the shore.", "Your mother is infected with a rare disease, and you must travel to find the cure.", "The council sends you a letter. You must pack your things and go at once.", "You are tasked with escorting the princess to the temple. She is very treacherous and you need to be careful.", "Some sort of monster is attacking the cattle and the sheep at night.", "You are in the royal cerimony, having now have the crown. Powerful enemies congratulate you, ploting your demise.", "The earth has errupted, and evil beings are now crawling out of the holes.", "A wicked, insane pyromancer is burning down the village. He must be stopped before it wall turn into ash.", "You treason was discovered. You must leave your chambers and run before they find you.", "A hunter stares you at a distance, waiting your next move.", "You have now the secret spellbook and must learn all the spells, one by one.", "A dragon flies high above you. They found you!"]
randomStartQuest = Math.floor(Math.random() * startQuest.length);
newStartQuest = startQuest[randomStartQuest]

let startPremise = ["You are equipped with a bow and arrows - you have an excelent marksmanship.", "You decide to take on this matter with bare hands. Fists only.", "On your pocket there is a sharp knife and some blouse buttons.", "However you decide that they are not paying you high enough and go back to sleep.", "Little that they know that you decided to parter with the enemy.", "You have only the sword of legend and the shield of protection with you, but that should be enough give your courage.", "You rip of a bone from your rib. That will be your weapon.", "The animals are on your side. You can ask any insect, fish, mammal or bird to do anything for you.", "Having control of the fire, you will use it to burn down your enemies.", "Your army waits for your next command.", "You are travelling with five good and dear friends. One of them is your lover. Nobody knows that yet.", "You, however, is plotting to murder the king and usurp the throne.", "You have a dragon with you, and will soon roam the skies.", "But first, you need to wash, brush your teeth and do some push-ups.", "This is so everyday for you. Like, you do this almost every single day.", "You, however, is getting a little insane every day that passes. It is becoming worse.", "You remember a plethora of spells. You have mighty magic on your side.", "You run for your life!", "You venture into the capital now...", "Your powerful axe will argue with anyone that goes against you.", "Installing some mods rewards you with a Glock, a MP5 and a Ak-47. Let's go ballistic.", "You are just a girl, but that shouldn't be a problem anyways.", "You think: ''I need to get home quickly. There is a need recipe of delicious apple pie with cinnamon I really need to test out.''", "You can ask the gods for blessing, granting you with a powerful ability of your choosing.", "You have a ring that once wore can make you go invisible. How are you going to use it?", "You can turn into any animal of your liking. Which is going to be?", "You can talk to plants, trees and even the winds: they can have interesting information.", "Maybe you can talk out of this situation? You are very charismatic.", "The sun is now setting. You need to mount your acampament and kindle a bonfire.", "You, however, infects anyone you touch with a rare and incurable disease."]
randomStartPremise = Math.floor(Math.random() * startPremise.length);
newStartPremise = startPremise[randomStartPremise]

const h2 = document.getElementById("h2");
newh2 = startPoint[randomStartPoint]
h2.textContent= 'your adventure begins. You are ' + newStartStory + '. ' + newStartQuest + ' ' + newStartPremise


const firstButton = document.getElementById("firstButton");
firstButton.textContent="Roll it again!";


}











     

