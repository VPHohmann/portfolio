
const openButtons = document.querySelectorAll(".openButton");

const closeButtons = document.querySelectorAll(".closeButton");

openButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const modalId = event.target.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const modal = event.target.closest("dialog");
        modal.close();
    });
});

const copyButton = document.getElementById('copyButton');
const emailText = document.getElementById('emailText');

copyButton.onclick = () => {
  navigator.clipboard.writeText(emailText.textContent);
  alert('E-mail copiado para a área de transferência!');
};
