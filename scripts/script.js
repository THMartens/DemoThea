const dialogue = new DialogueSystem();

const scenes = {
  1: { dialogue: "dialogue/intro.json", nextScene: 2 },
  2: { dialogue: "dialogue/herinneringen.json", nextScene: 3 },
  3: { dialogue: "dialogue/aardbeving.json", nextScene: 4 },
  4: { dialogue: "dialogue/na_de_aardbeving.json", nextScene: 5 },
  6: { dialogue: "dialogue/het_doekje.json", nextScene: 7 },
  8: { dialogue: "dialogue/beveiligingsvragen.json", nextScene: 9 },
  10: { dialogue: "dialogue/het_album.json", nextScene: 11 },
  12: { dialogue: "dialogue/finale.json", nextScene: 13 }
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

// start the first scene
goToScene(0);








