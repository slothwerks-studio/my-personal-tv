// Create array of programs
// Programs will have a name, description, and URL
let programs = [
  {
    name: "Alicia Keys NPR Tiny Desk Concert",
    description: "The lovely Alicia performs at NPR studios.",
    url: "https://youtu.be/uwUt1fVLb3E",
    duration: {
      hours: 0,
      minutes: 27,
      seconds: 46
    }
  }
];

// Build a function that will show the current list of programs in the UI
function updateProgramList() {
  const programList = document.getElementById("programList");
  // Build a function that will add a program to the UI
  // Takes a program object as an argument
  function addProgram(program) {
    const programCard = document.createElement("div");
    programCard.innterHTML = `
      <span class="program-name>
        ${program.name}
      </span>
      <span class="program-description">
        ${program.description}
      </span>
      <button 
        id="watchProgramButton"
        onclick="loadProgram(program)
      >
        Watch
      </button>
    `;
    programList.appendChild(programCard);
  }
  // Go through programs; add programs to program list
  programs.forEach(function(program) {
    const programCard = document.createElement("div");
    programCard.innerHTML = `
      <span class="program-name">
        ${program.name}
      </span>
      <span class="program-description">
        ${program.description}
      </span>
      <button 
        id="watchProgramButton"
        onclick="loadProgram(program)"
      >
        Watch
      </button>
    `;
    programList.appendChild(programCard);
  });
}

// Update program list upon load
updateProgramList();
