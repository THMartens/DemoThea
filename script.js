function goToScene(number) {
  document.querySelectorAll('.scene').forEach(scene => {
    scene.classList.remove('active');
  });

  document.getElementById(`scene-${number}`).classList.add('active');
}

function checkAnswer() {
  const input = document.getElementById('answer').value.toLowerCase().trim();
  const feedback = document.getElementById('feedback');

  // CHANGE THIS TO THE REAL ANSWER
  const correctAnswer = "february";

  if (input === correctAnswer) {
    goToScene(4);
  } else {
    feedback.textContent = "Hmm… try again 😏";
  }
}

let draggedPhotoId = null;

document.querySelectorAll(".draggable").forEach(photo => {

  photo.addEventListener("dragstart", () => {
    draggedPhotoId = photo.dataset.id;
  });

});

document.querySelectorAll(".slot").forEach(slot => {

  slot.addEventListener("dragover", (event) => {
    event.preventDefault(); // Required to allow drop
  });

  slot.addEventListener("drop", () => {

    const photo = document.querySelector(
      `.draggable[data-id="${draggedPhotoId}"]`
    );

    slot.innerHTML = "";
    slot.appendChild(photo);

  });

});

function checkTimeline() {

  const slots = document.querySelectorAll(".slot");

  let currentOrder = [];

  slots.forEach(slot => {

    const photo = slot.querySelector(".draggable");

    if (photo) {
      currentOrder.push(photo.dataset.id);
    }

  });

  // CHANGE THIS ORDER TO MATCH YOUR REAL TIMELINE
  const correctOrder = ["1", "2", "3"];

  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
    goToScene(5); // success scene
  } else {
    document.getElementById("timeline-feedback")
      .textContent = "Almost! Try rearranging them 🥰";
  }

}
