function handleContactOpen() {
  document.querySelector(".home-container").style.display = "none";
  if (document.querySelector(".experience-details-container").style.display === "block") {
    if (document.querySelector(".contact-details-container").style.display !== "block") {
      document.querySelector(".contact-details-container").style.display = "block";
      document.querySelector(".contact-details-container").style.position = "absolute";
      document.querySelector(".contact-details-container").style.top = "100px";
      document.querySelector(".contact-details-container").style.left = 0;
      document.querySelector(".contact-details-container").style.right = 0;
      document.querySelector(".contact-details-container").style.height = "calc(100% - 200px)";
      document.querySelector(".contact-details-container").style.zIndex = 1;
    } else {
      document.querySelector(".experience-details-container").style.zIndex = 0;
      document.querySelector(".contact-details-container").style.zIndex = 1;
    }
  } else {
    document.querySelector(".contact-details-container").style.display = "block";
    document.querySelector(".contact-details-container").style.position = "relative";
    document.querySelector(".contact-details-container").style.top = 0;
    document.querySelector(".contact-details-container").style.left = 0;
    document.querySelector(".contact-details-container").style.right = 0;
    document.querySelector(".contact-details-container").style.height = "calc(100% - 100px)";
    document.querySelector(".contact-details-container").style.zIndex = 0;
  }
}

function handleExperienceOpen() {
  document.querySelector(".home-container").style.display = "none";
  if (document.querySelector(".contact-details-container").style.display === "block") {
    if (document.querySelector(".experience-details-container").style.display !== "block") {
      document.querySelector(".experience-details-container").style.display = "block";
      document.querySelector(".experience-details-container").style.position = "absolute";
      document.querySelector(".experience-details-container").style.top = "100px";
      document.querySelector(".experience-details-container").style.left = 0;
      document.querySelector(".experience-details-container").style.right = 0;
      document.querySelector(".experience-details-container").style.height = "calc(100% - 200px)";
      document.querySelector(".experience-details-container").style.zIndex = 1;
    } else {
      document.querySelector(".experience-details-container").style.zIndex = 1;
      document.querySelector(".contact-details-container").style.zIndex = 0;
    }
  } else {
    console.log("else exper");
    document.querySelector(".experience-details-container").style.display = "block";
    document.querySelector(".experience-details-container").style.position = "relative";
    document.querySelector(".experience-details-container").style.top = 0;
    document.querySelector(".experience-details-container").style.left = 0;
    document.querySelector(".experience-details-container").style.right = 0;
    document.querySelector(".experience-details-container").style.height = "calc(100% - 100px)";
    document.querySelector(".experience-details-container").style.zIndex = 0;
  }
}

function handleContactClose() {
  document.querySelector(".contact-details-container").style.display = "none";
  if (document.querySelector(".experience-details-container").style.display === "none" && document.querySelector(".contact-details-container").style.display === "none") {
    document.querySelector(".home-container").style.display = "block";
  }
}

function handleProjectClose() {
  document.querySelector(".experience-details-container").style.display = "none";
  if (document.querySelector(".experience-details-container").style.display === "none" && document.querySelector(".contact-details-container").style.display === "none") {
    document.querySelector(".home-container").style.display = "block";
  }
}
