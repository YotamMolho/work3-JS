
let bgMusic; 

document.addEventListener('DOMContentLoaded', function() { // הודעה קופצת בפתיחת העמוד
  const modal = document.getElementById('welcome');
  const btn = document.getElementById('startMusic');
  modal.style.display = 'flex';

  btn.addEventListener('click', function() { // מנגן בלחיצה על כפתור LET'S GO 
    if (!bgMusic) {
      bgMusic = new Audio('sounds/jungle.mp3');
      bgMusic.volume = 0.4;
      bgMusic.play();
    }
    modal.style.display = 'none';
  });
});


//השמעת קול של חיה 
function playAnimalSound(jungle) {
  const sound = new Audio(`sounds/jungle.mp3`);
  sound.play();
}

// התאמה בין חיה לקול
document.querySelectorAll('.animal').forEach(img => {
  img.addEventListener('click', function() {
    const animal = this.getAttribute('data-animal');
    playAnimalSound(animal);
  });
});

// כל אות משמיעה חיה מתאימה
document.addEventListener('keydown', function(event) {
  switch(event.key.toLowerCase()) {
    case 'l':
    case 'ל':  
         playAnimalSound('lionSound'); break;         
    case 'm':
    case 'צ':
         playAnimalSound('monkeySound'); break;
    case 'p':
    case 'פ':
         playAnimalSound('parrotSound'); break;
    case 'e':
    case 'ק':
         playAnimalSound('elephantSound'); break;
    case 't':
    case 'א':
         playAnimalSound('tigerSound'); break;
    case 's':
    case 'ד':
         playAnimalSound('snakeSound'); break;
    case 'f':
    case 'כ':
         playAnimalSound('frogSound'); break;
  }
});
