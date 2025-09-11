// Load navbar.html into #navbar
fetch("navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

fetch("profile.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("profile").innerHTML = data;
  });

// Load about.html dynamically
fetch("about.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("about").innerHTML = data;

    // After component loads, activate observer
    setupCounterObserver();
  });

fetch("education.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("education").innerHTML = data;
  });

fetch("experience.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("experience").innerHTML = data;
  });

fetch("projects.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("projects").innerHTML = data;
  });

fetch("skills.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("skills").innerHTML = data;
  });

fetch("reflections.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("reflections").innerHTML = data;
  });

fetch("contact.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("contact").innerHTML = data;
  });

fetch("experienceTable.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("experienceTable").innerHTML = data;
  });
