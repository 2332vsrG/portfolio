// Tab Switching Functionality
function showTab(evt, tabName) {
  // Get all elements with class="tab-content" and hide them
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Get all elements with class="tab-button" and remove the "active" class
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add("active");
  }
}

// Animated Counter for Stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number[data-target]");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / 50;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

// Run functions when the page loads
window.onload = function () {
  // Set the "About" tab to be active on page load
  const aboutTab = document.querySelector(".tab-button");
  if (aboutTab) {
    aboutTab.click();
  }

  // Trigger the counter animation
  animateCounters();
};

// Animated Counter for Stats with "+" sign

// Function to animate counters
function animateCounter(counter, target) {
  let start = 0;
  const duration = 1500; // total time in ms
  const increment = Math.ceil(target / (duration / 30));

  function updateCounter() {
    start += increment;
    if (start < target) {
      counter.textContent = start;
      setTimeout(updateCounter, 30);
    } else {
      counter.textContent = target + "+"; // final with "+"
    }
  }

  updateCounter();
}

// Function to observe stats section
function setupCounterObserver() {
  const counters = document.querySelectorAll(".stat-number");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = +entry.target.getAttribute("data-target");
            animateCounter(entry.target, target);
            obs.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.4 }
    ); // trigger when 40% visible

    counters.forEach((counter) => observer.observe(counter));
  } else {
    // fallback: run immediately
    counters.forEach((c) => animateCounter(c, +c.dataset.target));
  }
}

  function openAndDownloadCV() {
    const cvUrl = 'cv/Vihanga Rathnayake.pdf'; // Replace with your CV path
    // Open in new tab
    window.open(cvUrl, '_blank');
    
    // Trigger download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Vihanga_Rathnayake_CV.pdf'; // Filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

    const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + document.getElementById('body').value);
    window.location.href = `mailto:hsdbandarnayake@gmail.com?subject=${subject}&body=${body}`;
  });