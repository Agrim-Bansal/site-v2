window.onload = () => {
  addProjects();
};

const projects = [
  {
    name: "Artemis",
    description:
      "A futuristic re-imagination of professional photo editing apps integrating AI into the operational workflows capable of running on low compute devices with low latency",
    thumbnail: "src/artemis-preview.png",
    link: "",
    github: "",
  },

  {
    name: "Paint Right",
    description:
      "An svg-based paint application built with C++ and Qt framework with a focus on performance and clean code practices with memory safety and modularity in mind",
    thumbnail: "src/paint-right-preview.png",
    link: "",
    github: "https://github.com/Agrim-Bansal/PaintRight",
  },

  {
    name: "Road Fighter FPGA",
    description:
      "An implementation of the classic 8-bit game Road Fighter on an FPGA (Basys3 by Xilinx) using Verilog, showcasing my skills in hardware design and digital logic. Implements the game mechanics with pseudo random generators, sprite rendering, VGA interfacing and finite state machines to create an engaging gaming experience on hardware.",
    thumbnail: "src/road-fighter-fpga-preview.jpg",
    link: "",
    github: "",
  },

  {
    name: "Can you beat sherlock?",
    description:
      "An AI powered detective game where players solve murder mysteries by interrogating realistic suspects and finding discrepancies. Designed on a terminal theme, the webapp gives an enigmatic vibe to the game.",
    thumbnail: "src/sherlock-preview.jpg",
    link: "https://can-you-beat-sherlock.vercel.app",
    github: "https://github.com/Agrim-Bansal/can-you-beat-sherlock",
  },

  {
    name: "Equity Market Simulator",
    description:
      "An educational tool built to allow people to experiment with stock market dynamics and understand financial concepts in a risk-free environment by trading with paper money. Complete with secure authentication and almost realtime data visualization.",
    thumbnail: "src/market-preview.jpg",
    link: "",
    github: "",
  },

  {
    name: "Brain F Interpreter",
    description:
      "A visual interpreter for the Brainfuck programming language equipped with a debugger, built into terminal, script as well as a website version.",
    thumbnail: "src/brainfuck-preview.jpg",
    link: "",
    github: "",
  },

  {
    name: "Capt. Burnbeard",
    description:
      "A fun webapp which generates playful pirate-themed insults powered by Gemini API and built with ReactJS and Tailwind CSS. It provides users with a humorous way to create pirate-inspired insults for entertainment purposes.",
    thumbnail: "src/capt-burnbeard-preview.jpg",
    link: "",
    github: "",
  },

  // {

  // IITD Sportshub,

  // DigitalEnigma CTF,

  // Robotics Simulation Control,

  // Survey Service,

  // Career Guide,

  // Version Control System,

  // SocialNetwork Sim,

  // Micromouse,

  // AI Dustbin},
  {
    name: "Class Schedule",
    description:
      "A website and chrome-extension to keep record of my online classes built with ExpressJS and Airtable database",
    thumbnail: "src/class-schedule-preview.jpg",
    link: "https://projects.agrimbansal.com/class-schedule",
    github: "https://github.com/Agrim-Bansal/class-schedule",
  },
];

async function addProjects() {
    const projects =await (await fetch('./projects.json')).json();
    console.log(projects);
  const projects_container = document.getElementById("projects_container");

  projects.forEach((project) => {
    const project_tile = document.createElement("div");
    project_tile.classList.add("project_tile");

    const project_link = document.createElement("div");
    if (project.link) project_link.onclick = () => window.open(project.link);

    const project_thumbnail = document.createElement("img");
    project_thumbnail.src = project.thumbnail;
    project_thumbnail.classList.add("project_thumbnail");

    const project_title = document.createElement("div");
    project_title.classList.add("project_title");
    project_title.innerText = project.name;

    const project_info = document.createElement("div");
    project_info.classList.add("project_info");
    project_info.innerText = project.description;

    let redirect_link;
    let github_logo;
    if (project.github) {
      console.log(project.github);
      redirect_link = document.createElement("a");
      redirect_link.href = project.github;
      redirect_link.target = "_blank";
      redirect_link.classList.add("redirect");

      github_logo = document.createElement("img");
      github_logo.src = "src/github-logo.png";
      github_logo.classList.add("github-repo", "redirect");
      redirect_link.appendChild(github_logo);
    }

    project_link.appendChild(project_thumbnail);
    project_link.appendChild(project_title);
    project_link.appendChild(project_info);
    project_tile.appendChild(project_link);
    if (project.github) {
      project_tile.appendChild(redirect_link);
    }
    projects_container.appendChild(project_tile);
  });
}
