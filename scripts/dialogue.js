class DialogueSystem {
  constructor() {
    this.box = document.getElementById("dialogue-box");
    this.nameEl = document.getElementById("character-name");
    this.textEl = document.getElementById("dialogue-text");
    this.imageEl = document.getElementById("character-image"); // new image element

    this.lines = [];
    this.index = 0;
    this.clickHandler = null;
  }

  async start(path) {
    const response = await fetch(path);
    this.lines = await response.json();
    this.index = 0;
    this.box.classList.remove("hidden");

    return new Promise((resolve) => {
      this.clickHandler = () => {
        this.index++;
        if (this.index < this.lines.length) {
          this.showLine();
        } else {
          this.box.classList.add("hidden");
          this.box.removeEventListener("click", this.clickHandler);
          resolve();
        }
      };

      this.box.addEventListener("click", this.clickHandler);
      this.showLine();
    });
  }

  showLine() {
    const line = this.lines[this.index];
    this.nameEl.textContent = line.name;
    this.textEl.textContent = line.text;

    if (line.image) {
      this.imageEl.src = line.image;
      this.imageEl.classList.remove("hidden");
    } else {
      this.imageEl.src = "";
      this.imageEl.classList.add("hidden");
    }
  }
}

window.DialogueSystem = DialogueSystem;