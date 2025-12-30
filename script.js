// Mobile nav
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("nav-open");
  });

  navList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navList.classList.remove("nav-open");
    }
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact form handler for Formspree
async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const status = document.getElementById("form-status");
  const submitButton = form.querySelector('button[type="submit"]');
  
  // Show loading state
  if (status) {
    status.textContent = "Sending...";
    status.style.color = "var(--accent-gold)";
  }
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
  }

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      if (status) {
        status.textContent = "Thanks! Your message has been sent.";
        status.style.color = "var(--accent-green)";
      }
      form.reset();
    } else {
      const data = await response.json();
      if (data.errors) {
        if (status) {
          status.textContent = data.errors.map(error => error.message).join(", ");
          status.style.color = "var(--accent-red)";
        }
      } else {
        throw new Error(response.statusText);
      }
    }
  } catch (error) {
    if (status) {
      status.textContent = "Oops! There was a problem sending your message. Please try again.";
      status.style.color = "var(--accent-red)";
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }
  }
}
