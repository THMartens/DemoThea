class DialogueSystem {
  constructor() {
    this.box = document.getElementById("dialogue-box");
    this.nameEl = document.getElementById("character-name");
    this.textEl = document.getElementById("dialogue-text");

    this.lines = [];
    this.index = 0;

    this.box.addEventListener("click", () => this.next());
  }

  async start(path) {
    const response = await fetch(path);
    this.lines = await response.json();
    this.index = 0;
    this.box.classList.remove("hidden");
    this.showLine();
  }

  showLine() {
    const line = this.lines[this.index];
    this.nameEl.textContent = line.name;
    this.textEl.textContent = line.text;
  }

  next() {
    this.index++;
    if (this.index < this.lines.length) {
      this.showLine();
    } else {
      this.end();
    }
  }

  end() {
    this.box.classList.add("hidden");
  }
}

window.DialogueSystem = DialogueSystem;

