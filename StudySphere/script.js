// -----------------------Navbar-----------------------

document.addEventListener("DOMContentLoaded", () => {
  // Navbar Scroll Effect
  const body = document.querySelector("body");
  const triggerAnimation = (element, animationClass) => {
    if (!element) {
      return;
    }
    element.classList.remove("animate__animated", animationClass);
    void element.offsetWidth;
    element.classList.add("animate__animated", animationClass);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;
          const textBox = section.querySelector(".textBox");
          const imgBox = section.querySelector(".imgBox");

          // Apply animations only for #about
          if (section.id === "about") {
            triggerAnimation(textBox, "animate__fadeInLeft");
            triggerAnimation(imgBox, "animate__fadeInRight");
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  // Only observe #about section
  const section = document.getElementById("about");
  if (section) observer.observe(section);
});
// -------------------------aboutSections--------------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        if (el.closest("#aboutSection")) {
          if (el.classList.contains("textBox")) {
            el.classList.add("fade-in-left");
          } else if (el.classList.contains("imgBox")) {
            el.classList.add("fade-in-right");
          }
        }

        if (el.closest("#aboutSection2")) {
          if (el.classList.contains("imgBox")) {
            el.classList.add("fade-in-left");
          } else if (el.classList.contains("textBox")) {
            el.classList.add("fade-in-right");
          }
        }
        if (el.closest("#aboutSection3")) {
          if (el.classList.contains("textBox")) {
            el.classList.add("fade-in-left");
          } else if (el.classList.contains("imgBox")) {
            el.classList.add("fade-in-right");
          }
        }
        if (el.closest("#aboutSection4")) {
          if (el.classList.contains("imgBox")) {
            el.classList.add("fade-in-left");
          } else if (el.classList.contains("textBox")) {
            el.classList.add("fade-in-right");
          }
        }
      } else {
        entry.target.classList.remove("fade-in-left", "fade-in-right");
      }
    });
  },
  {
    threshold: 0.4,
  }
);

const elementsToObserve = document.querySelectorAll(
  "#aboutSection .textBox, #aboutSection .imgBox, #aboutSection2 .textBox, #aboutSection2 .imgBox, #aboutSection3 .textBox, #aboutSection3 .imgBox, #aboutSection4 .textBox, #aboutSection4 .imgBox"
);

elementsToObserve.forEach((el) => observer.observe(el));
// Run once on page load
const handleScroll = () => {
  const nav = document.querySelector("nav");
  if (!nav) {
    return;
  }
  if (nav && window.scrollY > 525) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);

const triggerAnimation = (element, animationClass) => {
  if (!element) {
    return;
  }
  element.classList.remove(animationClass); // Remove animation class if already applied
  void element.offsetWidth; // Force reflow to restart animation
  element.classList.add("animate__animated", animationClass); // Add animation class
};
const titleElement = document.getElementById("title");
const captionElement = document.getElementById("caption");

// Trigger animations when page loads or reloads
triggerAnimation(titleElement, "animate__heartBeat");
triggerAnimation(captionElement, "animate__heartBeat");

// Detect scrolling to trigger animation when element is in view
window.addEventListener("scroll", function () {
  if (titleElement) {
    const titleRect = titleElement.getBoundingClientRect();
    if (titleRect.top < window.innerHeight && titleRect.bottom >= 0) {
      triggerAnimation(titleElement, "animate__heartBeat");
    }
    // Re-trigger animation when scrolling back to the top
    if (window.scrollY === 0) {
      triggerAnimation(titleElement, "animate__heartBeat");
    }
  }
  if (captionElement) {
    const captionRect = captionElement.getBoundingClientRect();
    if (captionRect.top < window.innerHeight && captionRect.bottom >= 0) {
      triggerAnimation(captionElement, "animate__heartBeat");
    }
    if (this.window.scrollY === 0) {
      triggerAnimation(captionElement, "animate__heartBeat");
    }
  }
});
// Role-based form switching

const roleRadios = document.getElementsByName("role");
const tutorForm = document.getElementById("tutor-form");
const studentForm = document.getElementById("student-form");

roleRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "tutor") {
      tutorForm.classList.add("active");
      studentForm.classList.remove("active");
    } else if (radio.value === "student") {
      studentForm.classList.add("active");
      tutorForm.classList.remove("active");
    }
  });
});