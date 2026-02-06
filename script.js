const dialogue = new DialogueSystem();
const scenes = {
  1: {
    dialogue: "dialogue/intro.json"
  },
  2: {
    dialogue: "dialogue/aardbeving.json"
  },
  3: {
    dialogue: "dialogue/na_de_aardbeving.json"
  }
};

function goToScene(number) {
  document.querySelectorAll('.scene').forEach(scene => {
    scene.classList.remove('active');
  });

  document.getElementById(`scene-${number}`).classList.add('active');

  const scene = scenes[number];

  if (scene?.dialogue) {
    dialogue.start(scene.dialogue);
  }
}

function checkAnswer() {
  const input = document.getElementById('answer').value.toLowerCase().trim();
  const feedback = document.getElementById('feedback');

  // CHANGE THIS TO THE REAL ANSWER
  const correctAnswer = 1;

  if (input === correctAnswer) {
    goToScene(4);
  } else {
    feedback.textContent = "Hmm… try again 😏";
  }
}

console.log("script.js loaded");






