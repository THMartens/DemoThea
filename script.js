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
