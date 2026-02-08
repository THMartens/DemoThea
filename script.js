const dialogue = new DialogueSystem();

const scenes = {
  1: { dialogue: "dialogue/intro.json", nextScene: 6 },
  2: { dialogue: "dialogue/aardbeving.json", nextScene: 3 },
  3: { dialogue: "dialogue/na_de_aardbeving.json", nextScene: 4 },
  5: { dialogue: "dialogue/het_doekje.json", nextScene: 6 },
};

async function goToScene(number) {
  if (!number) return;

  // hide all scenes and show the current one
  document.querySelectorAll(".scene").forEach(scene => scene.classList.remove("active"));
  const sceneEl = document.getElementById(`scene-${number}`);
  if (sceneEl) sceneEl.classList.add("active");

  const scene = scenes[number.toString()];
  if (scene?.dialogue) {
    await dialogue.start(scene.dialogue); // wait until dialogue ends
  }

  // after dialogue is done, go to next scene
  if (scene?.nextScene) {
    goToScene(scene.nextScene);
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

// start the first scene
goToScene(1);








