 let currentIndex = 0;

  // Hard-coded data = simple & readable
  const puzzles = [
    {
      src: 'assets/photos/mistake/1.jpg',
      x: 100,
      y: 360,
      width: 40,
      height: 40
    },
    {
      src: 'assets/photos/mistake/2.jpg',
      x: 365,
      y: 340,
      width: 20,
      height: 20
    },
    {
      src: 'assets/photos/mistake/3.jpg',
      x: 633,
      y: 335,
      width: 35,
      height: 35
    },
    {
      src: 'assets/photos/mistake/4.jpg',
      x: 280,
      y: 660,
      width: 60,
      height: 40
    },
    {
      src: 'assets/photos/mistake/5.jpg',
      x: 415,
      y: 445,
      width: 70,
      height: 70
    }
  ];

  const image = document.getElementById('mainImage');
  const hotspot = document.getElementById('hotspot');
  const nextButton2 = document.getElementById('nextButton2');

  function loadPuzzle(index) {
    const puzzle = puzzles[index];

    image.src = puzzle.src;

    hotspot.style.width = puzzle.width + 'px';
    hotspot.style.height = puzzle.height + 'px';

    hotspot.style.left = puzzle.x + 'px';
    hotspot.style.top = puzzle.y + 'px';

    nextButton2.style.display = 'none';
  }

  hotspot.addEventListener('click', () => {
    hotspot.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
    nextButton2.style.display = 'inline-block';
  });

  nextButton2.addEventListener('click', () => {
    hotspot.style.backgroundColor = 'transparent';
    currentIndex++;

    if (currentIndex < puzzles.length) {
      loadPuzzle(currentIndex);
    } else {
      // Next scene
      goToScene(7);
    }
  });

  loadPuzzle(currentIndex);