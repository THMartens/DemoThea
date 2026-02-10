class DialogueSystem {
  constructor() {
    this.box = document.getElementById("dialogue-box");
    this.nameEl = document.getElementById("character-name");
    this.textEl = document.getElementById("dialogue-text");

    this.lines = [];
    this.index = 0;

    this.clickHandler = null; // store event handler
  }

  async start(path) {
    const response = await fetch(path);
    this.lines = await response.json();
    this.index = 0;
    this.box.classList.remove("hidden");

    return new Promise((resolve) => {
      // set up click handler for advancing dialogue
      this.clickHandler = () => {
        this.index++;
        if (this.index < this.lines.length) {
          this.showLine();
        } else {
          this.box.classList.add("hidden");
          this.box.removeEventListener("click", this.clickHandler);
          resolve(); // resolve the promise when dialogue ends
        }
      };

      this.box.addEventListener("click", this.clickHandler);
      this.showLine(); // show first line immediately
    });
  }

  showLine() {
    const line = this.lines[this.index];
    this.nameEl.textContent = line.name;
    this.textEl.textContent = line.text;
  }
}

window.DialogueSystem = DialogueSystem;
