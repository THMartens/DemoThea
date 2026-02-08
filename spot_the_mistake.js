 let currentIndex = 0;

  // Hard-coded data = simple & readable
  const puzzles = [
    {
      src: 'assets/photos/mistake/1.jpeg',
      x: 320,
      y: 180
    },
    {
      src: 'assets/photos/mistake/2.jpeg',
      x: 210,
      y: 260
    },
    {
      src: 'assets/photos/mistake/3.jpeg',
      x: 420,
      y: 150
    },
    {
      src: 'assets/photos/mistake/4.jpeg',
      x: 300,
      y: 320
    },
    {
      src: 'assets/photos/mistake/5.jpeg',
      x: 150,
      y: 200
    }
  ];

  const image = document.getElementById('mainImage');
  const hotspot = document.getElementById('hotspot');
  const nextButton2 = document.getElementById('nextButton2');

  function loadPuzzle(index) {
    const puzzle = puzzles[index];

    image.src = puzzle.src;

    hotspot.style.left = puzzle.x + 'px';
    hotspot.style.top = puzzle.y + 'px';

    nextButton2.style.display = 'none';
  }

  hotspot.addEventListener('click', () => {
    nextButton2.style.display = 'inline-block';
  });

  nextButton2.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex < puzzles.length) {
      loadPuzzle(currentIndex);
    } else {
      // Next scene
      goToScene(7);
    }
  });

  loadPuzzle(currentIndex);