

function wiggleWitIt() {
     wiggles = document.getElementsByTagName("w");
  
    [...wiggles].forEach((wiggle) => {
      wiggle.innerHTML = wiggle
        .innerText
        .split("")
        .map((char, index) => {
          return `<span style='--animation-order: ${index + 1};'>${char}</span>`;
        })
        .join("");
    });
};

document.addEventListener("DOMContentLoaded", wiggleWitIt());

document.querySelectorAll(".project-link").forEach(link => {
    const button = link.querySelector(".view-button");

    link.addEventListener("mousemove", e => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
      button.style.opacity = 1;
    });

    link.addEventListener("mouseleave", () => {
      button.style.opacity = 0;
    });
  });
