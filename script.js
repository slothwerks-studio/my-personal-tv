// Create array of programs
// Programs will have a title, description, and URL
const programs = [
  {
    id: "uwUt1fVLb3E",
    title: "Alicia Keys NPR Tiny Desk Concert",
    description: "The lovely Alicia performs at NPR studios.",
    url: "https://www.youtube.com/watch?v=uwUt1fVLb3E"
  }
];

// Build a function that will show the current list of programs in the UI
function updateProgramList() {
  const programList = document.getElementById("programList");
  // Wipe out existing content
  programList.innerHTML = "";
  // Go through programs; add programs to program list
  for (let i = 0; i < programs.length; i++) {
    const program = programs[i];
    const programCard = document.createElement("div");
    programCard.innerHTML = `
      <span class="program-title">
        ${program.title}
      </span>
      <span class="program-description">
        ${program.description}
      </span>
      <button 
        id="watchProgramButton"
        onclick="loadProgram('${program.id}')"
      >
        Watch
      </button>
    `;
    programList.appendChild(programCard);
  }
}

// Build a function that will load a video and display it in the app
// Takes a program id as an argument
function loadProgram(id) {
  const tvContainer = document.getElementById("tvContainer");
  tvContainer.innerHTML = `
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/${id}" 
      title="YouTube Video Player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    ></iframe>
  `;
}

// Build a function that will add a new program to the programs list,
// then update the program list in the UI
// This function will be a submission handler and will therefore
// take an event object as an argument
function addVideo(event) {
  console.log("addVideo fired.");
  // Prevent default refresh of app
  event.preventDefault();
  // Grab user input from the form
  const title = document.getElementById("programTitle").value.trim();
  const description = document.getElementById("programDescription").value.trim();
  const link = document.getElementById("programUrl").value.trim();
  // Clean url (remove additional data, leaving only the "root" link)
  const url = cleanUrl(link);
  // Parse the url for the video ID
  let id, parts;
  if (url.includes("youtube") && url.includes("watch?v=")) {
    // This is a link pulled from the browser window
    parts = url.split("watch?v=");
    id = parts[1];
  } else if (url.includes("youtu.be/")) {
    // This is a link pulled from the YouTube "share" feature
    parts = url.split("youtu.be/");
  } else {
    window.alert("We can't use this link to save the video.");
  }

  if (id) {
    // Build object
    const program = {
      id,
      title,
      description,
      url
    }
    console.log("We're saving this program data: ", program);
    // Add to the program list array
    programs.push(program);
    // Reload the list in the UI
    updateProgramList();
  }
}

// Build a helper function that removes additional data from the end of
// a URL (the stuff starting with "&") and returns a url converted to lowercase
// Takes a string website link as an argument
function cleanUrl(url) {
  const parts = url.split("&");
  return parts[0].toLowerCase();
}

// Update form to include addVideo as submission handler
const programForm = document.getElementById("programForm");
programForm.onsubmit = addVideo;

// Update program list upon load
updateProgramList();
