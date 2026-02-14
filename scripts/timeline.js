const PHOTO_COUNT = 8;

// Correct order (by filename)
const correctOrder = Array.from(
{ length: PHOTO_COUNT },
(_, i) => `assets/photos/timeline/timeline${String(i + 1).padStart(2, '0')}.jpeg`
);

const timeline = document.getElementById('timeline');
const timeline_fb = document.getElementById('timeline_fb');
//const timelineBtn = document.getElementById('timelineBtn');

let draggedImg = null;

// Shuffle helper
function shuffle(array) {
return array.slice().sort(() => Math.random() - 0.5);
}

// Create slots and images
function initTimeline() {
const shuffled = shuffle(correctOrder);

shuffled.forEach(src => {
    const slot = document.createElement('div');
    slot.className = 'slot';

    const img = document.createElement('img');
    img.src = src;
    img.draggable = true;

    img.addEventListener('dragstart', () => {
    draggedImg = img;
    });

    slot.addEventListener('dragover', e => {
    e.preventDefault();
    });

    slot.addEventListener('drop', () => {
    if (!draggedImg || draggedImg === img) return;

    const draggedSlot = draggedImg.parentElement;
    const targetSlot = slot;
    const targetImg = targetSlot.querySelector('img');

    // Swap images
    draggedSlot.appendChild(targetImg);
    targetSlot.appendChild(draggedImg);

    draggedImg = null;

    checkSolution();
    });

    slot.appendChild(img);
    timeline.appendChild(slot);
});
}

// Check if current order matches correct order
function checkSolution() {
const currentOrder = [...timeline.querySelectorAll('.slot img')]
    .map(img => img.src.split(location.origin + '/')[1]);

const isCorrect = currentOrder.every(
    (src, index) => src === correctOrder[index]
);
/*
if (isCorrect) {
    message.style.display = 'block';
    nextButton.style.display = 'inline-block';
} else {
    message.style.display = 'none';
    nextButton.style.display = 'none';
}*/
if (isCorrect) {
    goToScene(6)
} else {
    timeline_fb.style.display = 'inline-block';
}
}

initTimeline();